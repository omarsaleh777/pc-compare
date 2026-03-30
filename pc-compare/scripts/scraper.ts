// ============================================================
// Phase 2: Optional Scraper — DO NOT USE UNTIL PHASE 1 IS LIVE
// ============================================================
//
// This script is designed to run on a SEPARATE VPS or Railway
// cron job — NOT on Vercel. It uses Playwright (headless browser)
// to scrape Amazon product pages and update prices/ratings.
//
// Setup:
//   1. Deploy this to Railway / VPS / any server with Node.js
//   2. Install: npm install playwright @prisma/client
//   3. Set DATABASE_URL to your production PostgreSQL URL
//   4. Run on a cron schedule (every 6 hours recommended)
//
// ⚠️ Amazon's ToS prohibits scraping. Use at your own risk.
// ⚠️ Amazon frequently changes DOM structure — selectors may break.
//
// Usage:
//   npx tsx scripts/scraper.ts
//
// ============================================================

// import { chromium } from "playwright";
// import { PrismaClient } from "@prisma/client";
//
// const prisma = new PrismaClient();
//
// async function scrapeProduct(url: string) {
//   const browser = await chromium.launch({ headless: true });
//   const page = await browser.newPage();
//
//   await page.setExtraHTTPHeaders({
//     "User-Agent":
//       "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36",
//   });
//
//   let retries = 3;
//   while (retries > 0) {
//     try {
//       await page.goto(url, { waitUntil: "domcontentloaded", timeout: 15000 });
//
//       const price = await page.$eval(
//         "#priceblock_ourprice, .a-price .a-offscreen",
//         (el) => parseFloat(el.textContent!.replace(/[^0-9.]/g, ""))
//       );
//
//       const rating = await page.$eval(".a-icon-alt", (el) =>
//         parseFloat(el.textContent!.split(" ")[0])
//       );
//
//       const reviewCount = await page.$eval("#acrCustomerReviewText", (el) =>
//         parseInt(el.textContent!.replace(/[^0-9]/g, ""), 10)
//       );
//
//       await browser.close();
//       return { price, rating, reviewCount };
//     } catch {
//       retries--;
//       if (retries === 0) {
//         console.error(`Failed to scrape: ${url}`);
//         await browser.close();
//         return null;
//       }
//       await new Promise((r) => setTimeout(r, 3000));
//     }
//   }
// }
//
// async function updateAllPrices() {
//   const products = await prisma.product.findMany();
//   for (const product of products) {
//     const data = await scrapeProduct(product.productUrl);
//     if (data) {
//       await prisma.product.update({
//         where: { id: product.id },
//         data: { ...data, lastUpdated: new Date() },
//       });
//       console.log(`Updated: ${product.name}`);
//     }
//     await new Promise((r) => setTimeout(r, 2000));
//   }
// }
//
// updateAllPrices().finally(() => prisma.$disconnect());

console.log("Phase 2 scraper is not active. Uncomment the code above to enable.");
console.log("This should run on a separate VPS or Railway, NOT on Vercel.");
