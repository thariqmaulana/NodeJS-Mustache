import Mustache from "mustache";
import fs from "fs/promises"

test("Mustache List", async () => {
  const helloTemplate = await fs.readFile("./templates/students.mustache")
    .then(data => data.toString());

  const data = Mustache.render(helloTemplate, {
    students: [
      {name: "Thariq", value: 100},
      {name: "Budi", value: 100},
    ]
  });

  console.info(data);
  expect(data).toContain("Thariq");
  expect(data).toContain("Budi");
  expect(data).toContain("100");//otomatis jadi string
})

// </head>
// <body>
//   <h1>Students</h1>
//   <table>
//       <tr>
//         <td>Thariq</td>
//         <td>100</td>
//       </tr>
//       <tr>
//         <td>Budi</td>
//         <td>100</td>
//       </tr>
//   </table>
// </body>
// </html>