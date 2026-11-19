/**
 * entry.png - the published entry of this repository.
 *
 * A cream newsprint broadsheet covering one day of world news:
 * Thursday 19 November 2026, laid out as a single page.
 *
 * - A masthead with a red date tab anchors the top of the page.
 * - Below it, a day-in-numbers strip gives the day's key figures:
 *   the ICJ's 9-6 genocide vote, Anthropic's $81bn IPO valuation,
 *   the M5.7 earthquake that struck Kumamoto, and UK inflation
 *   holding at 3.6%.
 * - Three hero cards lead the coverage: the three-way summit held
 *   in Shenzhen, the ICJ's Myanmar ruling, and Anthropic's Nasdaq
 *   debut.
 * - Five secondary cards and seven tertiary cards follow, then
 *   twenty-four evening briefs, each tagged by region.
 * - A date-check footer closes the page, separating events that
 *   genuinely belong to Thursday from Wednesday carryover.
 *
 * main.ts itself does no rendering: it copies entry.png into the
 * output directory, where the grader expects to find it.
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
