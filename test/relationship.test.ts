describe("Relationship", () => {
  class Person {
    constructor(public name: string) {}
  }

  class Costumer {
    constructor(public name: string) {}
  }

  it("should support", () => {
    const person: Person = new Person("Ilham");
    console.info(person.name);
  });
});
