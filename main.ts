/**
 * entry.png - a cream newsprint broadsheet for Thursday 19 November 2026,
 * the published entry of this repository.
 *
 * The page is built as a single day of world news, front to back:
 *
 * 1. Masthead at the top, carrying a red date tab with the day's date.
 * 2. A day-in-numbers strip directly beneath it: the ICJ's 9-6
 *    genocide vote, Anthropic's $81bn IPO valuation, the M5.7 quake
 *    in Kumamoto, and UK inflation at 3.6%.
 * 3. Three hero cards: the Shenzhen three-way summit, the ICJ's
 *    Myanmar ruling, and Anthropic's Nasdaq debut.
 * 4. Five secondary cards, then seven tertiary cards.
 * 5. Twenty-four evening briefs, each tagged by region.
 * 6. A date-check footer that closes the page.
 */
import { copyFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const repo = dirname(fileURLToPath(import.meta.url));
const source = join(repo, 'entry.png');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const target = join(outputDir, 'entry.png');
mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);
console.log('entry.png copied to', target);
