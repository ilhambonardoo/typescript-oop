describe("Error handling", () => {
  class validationError extends Error {
    constructor(public message: string) {
      super(message);
    }
  }

  function doubleIt(value: number) {
    if (value < 0) {
      throw new validationError("Value can not be less then 0 ");
    }

    return value * 2;
  }

  it("should support error", () => {
    try {
      const result = doubleIt(-1);
      console.info(result);
    } catch (err) {
      if (err instanceof validationError) {
        console.info(err.message);
      }
    }
  });
});
