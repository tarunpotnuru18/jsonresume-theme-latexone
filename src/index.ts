import { render as ejsRender } from "ejs";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
// Get the directory of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const templatePath = resolve(__dirname, "../resume.template.ejs");
// Resolve the template path relative to the current file location
let template = readFileSync(templatePath, "utf-8");
function render(resume: any) {
  const html = ejsRender(template, { resume });
  return html;
}

export { render };
