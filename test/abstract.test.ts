describe("abstract", () => {
  abstract class Costumer {
    readonly id: number;
    abstract name: String;

    constructor(id: number) {
      this.id = id;
    }

    hello() {
      console.info(`Hello`);
    }

    abstract sayHello(name: string): void;
  }

  class RegularCostumer extends Costumer {
    name: String;
    constructor(id: number, name: String) {
      super(id);
      this.name = name;
    }

    sayHello(name: string): void {
      console.info(`Hello ${name}, my name is ${this.name}`);
    }
  }

  it("Should support", () => {
    const costumer1 = new RegularCostumer(1, "Ilham");
    costumer1.sayHello("Bonardo");
  });
});
