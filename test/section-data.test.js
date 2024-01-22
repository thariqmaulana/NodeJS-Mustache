import Mustache from "mustache";
import fs from "fs/promises"

test("Mustache Section Data", async () => {
  const helloTemplate = await fs.readFile("./templates/person2.mustache")
    .then(data => data.toString());

  const data = Mustache.render(helloTemplate, {
    person: {
      name: "Thariq",
      country: "Indonesia"
    }
  });

  console.info(data);
  expect(data).toContain("Hello, iam Thariq and iam from Indonesia");
})

