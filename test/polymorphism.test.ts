describe("Polymorphism", () => {
  class Employee {
    constructor(public name: String) {}
  }

  class Manager extends Employee {}

  class VicePresident extends Manager {}

  function sayHello(employee: Employee): void {
    if (employee instanceof VicePresident) {
      const vp = employee as VicePresident;
      console.info(`Hello VP ${vp.name}`);
    } else if (employee instanceof Manager) {
      const manager = employee as Manager;
      console.info(`Hello Manager ${manager.name}`);
    } else {
      console.info(`Hello employee ${employee.name}`);
    }
  }

  function sayHelloWrong(employee: Employee): void {
    if (employee instanceof Manager) {
      const manager = employee as Manager;
      console.info(`Hello Manager ${manager.name}`);
    } else if (employee instanceof VicePresident) {
      const vp = employee as VicePresident;
      console.info(`Hello VP ${vp.name}`);
    } else {
      console.info(`Hello employee ${employee.name}`);
    }
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

  it("should support method polymorphism wrong", () => {
    sayHelloWrong(new Employee("Ilham"));
    sayHelloWrong(new Manager("Bonardo"));
    sayHelloWrong(new VicePresident("Marpaung"));
  });
});
