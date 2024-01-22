import Mustache from "mustache";
import fs from "fs/promises";

test("Read Mustache File", async () => {
  //karena returnnya buffer maka langsung kita ubah jadi string
  const helloTemplate = await fs.readFile("./templates/hello.mustache")
    .then(data => data.toString());
    
  console.info(helloTemplate);

  const data = Mustache.render(helloTemplate, {
    title: "Belajar NodeJS Mustache"
  })

  console.info(data);

  expect(data).toContain("Belajar NodeJS Mustache");

})
//helloTemplate
{/* <html>
<body>
<h1>{{title}}</h1>
</body>
</html> */}

//data
//  <html>
{/* <body>
<h1>Belajar NodeJS Mustache</h1>
</body>
</html> */}