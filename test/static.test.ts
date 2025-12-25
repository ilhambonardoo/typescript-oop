describe("static", () => {
  class Configuration {
    static NAME: String = "Typescript OOP";
    static VERSION: number = 1.0;
    static AUTHOR: string = "Ilham Bonardo Marpaung";
  }

  class MathUtil {
    static sum(...values: number[]) {
      let total = 0;
      for (let value of values) {
        total += value;
      }

      return total;
    }
  }

  it("should support", () => {
    console.info(Configuration.NAME);
    console.info(Configuration.VERSION);
    console.info(Configuration.AUTHOR);
  });

  it("should support static method", () => {
    console.info(MathUtil.sum(1, 2, 3, 4, 5));
  });
});
