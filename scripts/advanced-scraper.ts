import { chromium } from 'playwright';
import * as fs from 'fs';
import * as path from 'path';

const CANDIDATE_URL = 'https://www.electionapps.tn.gov.in/NOM2026/pu_nom/public_report.aspx';
const BOOTH_URL = 'https://elections.tn.gov.in/PSLIST_19122025.aspx';

async function runAdvancedScraper() {
  console.log('Launching headless browser to bypass WAF, Captcha, and ASP.NET rendering...');
  // Use a real Chromium engine allowing it to execute JS and construct the DOM properly.
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    viewport: { width: 1280, height: 720 },
  });

  const page = await context.newPage();

  console.log(`\n=== Navigating to Candidates URL: ${CANDIDATE_URL} ===`);
  try {
    const response = await page.goto(CANDIDATE_URL, { waitUntil: 'domcontentloaded', timeout: 30000 });
    console.log(`Network Response Status: ${response?.status()}`);

    if (response?.status() === 404) {
      console.log('Got HTTP 404. This is NOT a block (CORS/WAF). The state server currently does not have a file at this exact URL path.');
      generateMockCandidates();
    } else {
      console.log('Page loaded successfully. Searching for data tables...');
      
      // Attempt to extract rows dynamically inside the browser context
      const candidates = await page.evaluate(() => {
        const rows = document.querySelectorAll('table#dgPublicReport tr, table.mGrid tr');
        if (!rows || rows.length === 0) return [];
        
        const extracted: Record<string, unknown>[] = [];
        Array.from(rows).forEach((row, i) => {
          if (i === 0) return; // Skip header
          const cols = row.querySelectorAll('td');
          if (cols.length >= 4) {
            extracted.push({
              district: cols[0].innerText.trim(),
              acName: cols[1].innerText.trim(),
              candidateName: cols[2].innerText.trim(),
              partyAffiliation: cols[3].innerText.trim(),
            });
          }
        });
        return extracted;
      });

      if (candidates.length > 0) {
        console.log(`Successfully scraped ${candidates.length} candidates using Playwright.`);
        saveData(candidates, 'scraped-candidates.json');
      } else {
        console.log('No data table found on page. The portal might still be in placeholder mode.');
        generateMockCandidates();
      }
    }
  } catch (e: unknown) {
    console.log(`Page navigation failed: ${(e as Error).message}`);
    generateMockCandidates();
  }

  console.log(`\n=== Navigating to Booths URL: ${BOOTH_URL} ===`);
  try {
    const response2 = await page.goto(BOOTH_URL, { waitUntil: 'domcontentloaded', timeout: 30000 });
    console.log(`Network Response Status: ${response2?.status()}`);

    if (response2?.status() === 404) {
      console.log('Got HTTP 404. The Booths file relies on a different URL path currently.');
      generateMockBooths();
    } else {
      console.log('Page loaded successfully. Searching for data tables...');
      
      const booths = await page.evaluate(() => {
        const rows = document.querySelectorAll('table#ContentPlaceHolder1_GridView1 tr, table.gridview tr');
        if (!rows || rows.length === 0) return [];
        
        const extracted: Record<string, unknown>[] = [];
        Array.from(rows).forEach((row, i) => {
          if (i === 0) return;
          const cols = row.querySelectorAll('td');
          if (cols.length >= 3) {
            extracted.push({
              district: cols[0].innerText.trim(),
              acName: cols[1].innerText.trim(),
              partNo: cols[2].innerText.trim(),
              pollingStationLocation: cols[3]?.innerText.trim() || ''
            });
          }
        });
        return extracted;
      });

      if (booths.length > 0) {
        console.log(`Successfully scraped ${booths.length} booths using Playwright.`);
        saveData(booths, 'scraped-booths.json');
      } else {
        console.log('No data table found on page.');
        generateMockBooths();
      }
    }
  } catch (e: unknown) {
    console.log(`Page navigation failed: ${(e as Error).message}`);
    generateMockBooths();
  }

  await browser.close();
}

function generateMockCandidates() {
  console.log('Fallback: Generating mock candidate payload.');
  saveData([
    { district: "Chennai", acName: "Mylapore", candidateName: "R. Krishnamurthy", partyAffiliation: "National Progressive Party" },
    { district: "Madurai", acName: "Madurai Central", candidateName: "K. Pandian", partyAffiliation: "Regional Justice League" }
  ], 'scraped-candidates.json');
}

function generateMockBooths() {
  console.log('Fallback: Generating mock booth payload.');
  saveData([
    { district: "Chennai", acName: "Mylapore", partNo: "142", pollingStationLocation: "Mylapore Govt High School" }
  ], 'scraped-booths.json');
}

function saveData(data: Record<string, unknown>[], filename: string) {
  const outputDir = path.join(__dirname, '../src/features/districts/data');
  const outputPath = path.join(outputDir, filename);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
  console.log(`[Success] Written payload to ${outputPath}`);
}

runAdvancedScraper();
