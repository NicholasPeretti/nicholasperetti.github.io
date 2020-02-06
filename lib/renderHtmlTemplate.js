import { readFileSync } from "fs";
import { render } from "ejs";

export default function renderHtmlTemplate(templatePath, variables) {
  const template = readFileSync(templatePath).toString();
  return render(template, variables);
}
