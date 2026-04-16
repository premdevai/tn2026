import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const root = process.cwd();
const scanRoots = ["src/app", "src/components", "src/features"];
const allowedNavFiles = new Set(["src/components/shared/breadcrumbs.tsx"]);
const allowedNavFolders = ["src/components/layout/"];

const checks = [
  {
    name: "arbitrary tiny font size",
    pattern: /\btext-\[(?:9|10|11)px\]/g,
    message: "Use the shared caption/body scale instead of tiny arbitrary font sizes."
  },
  {
    name: "oversized radius",
    pattern: /\brounded-(?:xl|2xl|3xl)\b|\brounded-\[[^\]]+\]/g,
    message: "Use rounded-lg by default; reserve rounded-full for pills, avatars, and dots."
  },
  {
    name: "raw slate color",
    pattern: /\b(?:text|bg|border)-slate-\d+\b/g,
    message: "Use semantic surface/foreground tokens instead of slate utilities."
  },
  {
    name: "raw hex Tailwind class",
    pattern: /\b(?:text|bg|border)-\[[^\]]*#[0-9a-fA-F]{3,8}[^\]]*\]/g,
    message: "Use semantic tokens instead of raw hex Tailwind classes."
  }
];

function listFiles(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      return listFiles(fullPath);
    }

    return fullPath.endsWith(".tsx") ? [fullPath] : [];
  });
}

function lineForIndex(source, index) {
  return source.slice(0, index).split("\n").length;
}

function normalizePath(file) {
  return relative(root, file).split(sep).join("/");
}

const findings = [];

for (const scanRoot of scanRoots) {
  const files = listFiles(join(root, scanRoot));

  for (const file of files) {
    const source = readFileSync(file, "utf8");
    const path = normalizePath(file);

    for (const check of checks) {
      for (const match of source.matchAll(check.pattern)) {
        findings.push({
          path,
          line: lineForIndex(source, match.index ?? 0),
          message: check.message,
          value: match[0]
        });
      }
    }

    const navAllowed =
      allowedNavFiles.has(path) || allowedNavFolders.some((folder) => path.startsWith(folder));

    if (!navAllowed) {
      for (const match of source.matchAll(/<nav\b/g)) {
        findings.push({
          path,
          line: lineForIndex(source, match.index ?? 0),
          message: "Route-level breadcrumb/back navigation must use the shared Breadcrumbs component.",
          value: "<nav"
        });
      }
    }
  }
}

if (findings.length > 0) {
  console.error("Design audit failed:");
  for (const finding of findings) {
    console.error(`${finding.path}:${finding.line} ${finding.value} - ${finding.message}`);
  }
  process.exit(1);
}

console.log("Design audit passed.");
