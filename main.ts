/**
 * entry.png presents ALL THE DAY'S NEWS as a cream one-page broadsheet.
 * It is the Thursday 19 November 2026 edition, composed as a single
 * compact newspaper page rather than a sequence of separate screens.
 *
 * The image gathers 40 stories from across the day's world news into one
 * readable editorial field, with the most consequential items given the
 * strongest visual weight and shorter reports filling out the page.
 *
 * A stat band under the masthead provides a quick numerical snapshot of
 * the edition before the reader moves into the story cards and briefs.
 * A region tally makes the geographic spread of the reporting visible,
 * helping the page communicate breadth as well as headline importance.
 *
 * The layout closes with a date-check footer so the edition can be
 * identified and verified at a glance, even when the image is viewed small.
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
