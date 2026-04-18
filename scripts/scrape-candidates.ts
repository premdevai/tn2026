import axios from 'axios';
import * as cheerio from 'cheerio';
import * as fs from 'fs';
import * as path from 'path';

// Goal: Scrape the TN SEC Nominations Portal
const url = 'https://www.electionapps.tn.gov.in/NOM2026/pu_nom/public_report.aspx';

async function scrapeCandidates() {
  console.log(`Starting candidate scrape from: ${url}`);
  
  try {
    // Attempt to hit the official endpoint
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    });

    const $ = cheerio.load(response.data);
    const candidates: Record<string, unknown>[] = [];

    // TN SEC ASPX tables typically use #dgPublicReport, #GridView1 or .mGrid
    const rows = $('table#dgPublicReport tr, table.mGrid tr');
    
    if (rows.length === 0) {
      console.log("No table rows found on the live URL. Is the election phase active?");
      generateMockData();
      return;
    }

    rows.each((i, row) => {
      // Skip header row
      if (i === 0) return;
      
      const cols = $(row).find('td');
      if (cols.length >= 4) {
        candidates.push({
          district: $(cols[0]).text().trim(),
          acName: $(cols[1]).text().trim(),
          candidateName: $(cols[2]).text().trim(),
          partyAffiliation: $(cols[3]).text().trim(),
          status: $(cols[4]).text().trim() || 'Accepted'
        });
      }
    });

    console.log(`Successfully scraped ${candidates.length} candidates.`);
    saveData(candidates);

  } catch (err) {
    const error = err as Error & { response?: { status: number } };
    if (error.response && error.response.status === 404) {
      console.log(`Official URL returned 404. The 2026 portal is not live yet.`);
      console.log(`Falling back to local simulation of the expected scraped payload...`);
      generateMockData();
    } else {
      console.error(`Scrape failed:`, error.message);
    }
  }
}

function generateMockData() {
  const dummyCandidates = [
    {
      district: "Chennai",
      acName: "Mylapore",
      candidateName: "R. Krishnamurthy",
      partyAffiliation: "National Progressive Party",
      status: "Accepted"
    },
    {
      district: "Chennai",
      acName: "Mylapore",
      candidateName: "Dr. S. Anitha",
      partyAffiliation: "Independent",
      status: "Accepted"
    },
    {
      district: "Madurai",
      acName: "Madurai Central",
      candidateName: "K. Pandian",
      partyAffiliation: "Regional Justice League",
      status: "Accepted"
    }
  ];
  
  console.log(`Generated ${dummyCandidates.length} fallback candidates to map over your UI.`);
  saveData(dummyCandidates);
}

function saveData(data: Record<string, unknown>[]) {
  const outputDir = path.join(__dirname, '../src/features/districts/data');
  const outputPath = path.join(outputDir, 'scraped-candidates.json');
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
  console.log(`Saved scraped data to ${outputPath}`);
}

scrapeCandidates();
