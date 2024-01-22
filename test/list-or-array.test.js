import Mustache from "mustache";
import fs from "fs/promises"

test("Mustache List", async () => {
  const helloTemplate = await fs.readFile("./templates/hobbies.mustache")
    .then(data => data.toString());

  const data = Mustache.render(helloTemplate, {
    hobbies: ["Coding", "Reading", "Basketball"]
  });

  console.info(data);
  expect(data).toContain("Basketball");
})

// Bahkan komennya. berarti semua yang di section hobbies akan diiterasi
// tidak hanya{{.}}
{/* <ul>
          <li>Coding</li>
          <!-- akan diiterasi sebanyak isi array -->
          <li>Reading</li>
          <!-- akan diiterasi sebanyak isi array -->
          <li>Basketball</li>
          <!-- akan diiterasi sebanyak isi array -->
      </ul> */}

