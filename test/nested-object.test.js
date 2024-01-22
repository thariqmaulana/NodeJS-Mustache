import Mustache from "mustache";

test("Tags", () => {
  const data = Mustache.render("Hello my name is {{person.name}}, iam from {{{person.country}}}", {
    person: {
      name: "Thariq",
      country: "<b>Indonesia</b>"
    }
  });

  expect(data).toBe("Hello my name is Thariq, iam from <b>Indonesia</b>");
})