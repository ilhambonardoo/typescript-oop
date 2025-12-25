describe("super constructor", () => {
  class Person {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  class Employee extends Person {
    departement: string;

    constructor(name: string, departement: string) {
      super(name);
      this.departement = departement;
    }
  }

  it("should can support super constructor", () => {
    const employee: Employee = new Employee("Ilham", "Sekolah Vokasi");
    console.info(employee);
    console.info(employee.name);
    console.info(employee.departement);
  });
});
