describe("Properties", () => {
  class Costumer {
    readonly id: string;
    name: string;
    age?: number;
    // jika ingin menambahkan default value ubah saja menjadi --> name: string = "Guest"

    constructor(id: string, name: string) {
      this.id = id;
      this.name = name;
    }
  }

  it("should can have properties", () => {
    const costumer: Costumer = new Costumer("J040423163", "Ilham");
    costumer.age = 21;

    console.info(costumer);
    console.info(costumer.id);
    console.info(costumer.name);
    console.info(costumer.age);
  });
});
