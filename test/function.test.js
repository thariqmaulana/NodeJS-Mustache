import Mustache from "mustache";

test("Test Function", async () => {

  const parameter = {
    name: "Thariq",
    upper: () => {
      return (text, render) => {
        return render(text).toUpperCase();
      }
    }
  }

  // yang di ditengah upper akan dimasukkan ke variabel text
  const data = Mustache.render("Halo {{#upper}}{{name}}{{/upper}}", parameter);
  const data2 = Mustache.render("Halo {{#upper}}Thariq{{/upper}}", parameter);
  expect(data).toBe("Halo THARIQ");
  expect(data2).toBe("Halo THARIQ");
})