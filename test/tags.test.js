import Mustache from "mustache";

test("Tags", () => {
  const data = Mustache.render("Hello {{name}}, iam from {{{country}}}", {
    name: "People",
    country: "<b>Indonesia</b>"
  });

  expect(data).toBe("Hello People, iam from <b>Indonesia</b>");
})