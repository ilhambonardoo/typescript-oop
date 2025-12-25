describe("Inheritance", () => {
  class Employee {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  class Manager extends Employee {}
  class Director extends Manager {}

  it("should support inheritance", () => {
    const employee: Employee = new Employee("Ilham");
    console.info(employee.name);

    const manager: Manager = new Manager("Bonardo");
    console.info(manager.name);

    const director: Director = new Director("Marpaung");
    console.info(director.name);
  });
});
