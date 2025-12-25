describe("parameter properties", () => {
  class Person {
    constructor(public name: string) {}
  }

  it("should support", () => {
    const person: Person = new Person("Ilham");
    console.info(person);

    person.name = "Ghina";
    console.info(person);
  });
});
