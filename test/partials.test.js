import Mustache from "mustache";
import fs from "fs/promises"

test("Partials", async () => {
  const headerTemplate = await fs.readFile("./templates/header.mustache")
    .then(data => data.toString());
  const footerTemplate = await fs.readFile("./templates/footer.mustache")
  .then(data => data.toString());
  const contentTemplate = await fs.readFile("./templates/content.mustache")
  .then(data => data.toString());

  const data = Mustache.render(contentTemplate, {
    title: "Belajar NodeJS Mustache",
    content: "NodeJS"
  }, {
    headerr: headerTemplate,
    footer: footerTemplate
  });

  expect(data).toContain("Belajar NodeJS Mustache");
  expect(data).toContain("NodeJS");
  expect(data).toContain("Thariq Maulana");
  console.info(data);
})
