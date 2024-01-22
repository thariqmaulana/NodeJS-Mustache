import Mustache from "mustache";
import fs from "fs/promises"

test("Mustache Session Inverted", async () => {
  //Hello Guest
  const helloTemplate = await fs.readFile("./templates/inverted-section.mustache")
    .then(data => data.toString());

  const data = Mustache.render(helloTemplate, {});
  console.info(data);
  expect(data).toContain("Hello Guest");
})

test("Mustache Section Normal", async () => {
  //Hello Thariq
  const helloTemplate = await fs.readFile("./templates/inverted-section.mustache")
    .then(data => data.toString());

  const data = Mustache.render(helloTemplate, {
    person: {
      name: "Thariq"
    }
  });
  console.info(data);
  expect(data).toContain("Hello Thariq");
})
