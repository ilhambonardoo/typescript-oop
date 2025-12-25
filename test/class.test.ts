describe("class", () => {
  class Costumer {
    constructor() {
      console.info("Create new costumer");
    }
  }

  class Order {}

  it("should can create class", () => {
    const costumer: Costumer = new Costumer();
    const order = new Order();
  });

  it("should can create constructor", () => {
    new Costumer();
    new Costumer();
  });
});
