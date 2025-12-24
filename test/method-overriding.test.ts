describe("Method Overriding", () => {
  class Employee {
    name: string;
    constructor(name: string) {
      this.name = name;
    }

    sayHello(name: string): void {
      console.info(`Hello ${name}, my name is ${this.name}`);
    }
  }

  class Manager extends Employee {
    sayHello(name: string): void {
      console.info(
        `Hello ${name}, my name is ${this.name} I'm full stack web develompent`
      );
    }
  }

  it("should support Method", () => {
    const employee: Employee = new Employee("Bonardo");
    employee.sayHello("Jamrund");
    const manager: Manager = new Manager("Ghina");
    manager.sayHello("kali");
  });
});
