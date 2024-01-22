import Mustache from "mustache";

test("Menggunakan Mustache", () => {
  const data = Mustache.render("Hello {{name}}", {name: "Thariq"});

  expect(data).toBe("Hello Thariq");
})

test("Menggunakan Mustache Cache", () => {
  Mustache.parse("Hello {{name}}");

  //hanya mengambil hasil kompilasi di memori
  const data = Mustache.render("Hello {{name}}", {name: "Thariq"});

  expect(data).toBe("Hello Thariq");
})