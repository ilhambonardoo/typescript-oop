describe("Polymorphism", () => {
  class Employee {
    constructor(public name: String) {}
  }

  class Manager extends Employee {}

  class VicePresident extends Manager {}

  function sayHello(employee: Employee): void {
    console.info(`Hello my name is ${employee.name}`);
  }

  it("Should support", () => {
    let employee: Employee = new Employee("Ilham");
    console.info(employee);

    employee = new Manager("Ilham");
    console.info(employee);

    employee = new VicePresident("Ilham");
    console.info(employee);
  });

  it("should support method polymorphism", () => {
    sayHello(new Employee("Ilham"));
    sayHello(new Manager("Bonardo"));
    sayHello(new VicePresident("Marpaung"));
  });
});
