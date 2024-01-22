import Mustache from "mustache";
import fs from "fs/promises"

test("Mustache Session Not Show", async () => {

  const helloTemplate = await fs.readFile("./templates/person.mustache")
    .then(data => data.toString());

  const data = Mustache.render(helloTemplate, {});
  console.info(data);//bodynya kosong
  expect(data).not.toContain("Hello");
})

test("Mustache Section Show", async () => {
  //anggap saja true, dan yang tidak muncul false
  //pengkondisian / if di mustache
  const helloTemplate = await fs.readFile("./templates/person.mustache")
    .then(data => data.toString());

  const data = Mustache.render(helloTemplate, {
    person: "ABC"
  });
  console.info(data);
  expect(data).toContain("Hello");
})




// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Document</title>
// </head>
// <body>
// </body>
// </html>

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Document</title>
// </head>
// <body>
//     Hello
//     <!-- jika data person ada maka hello akan keluar, jika tidak maka tidak -->
// </body>
// </html>