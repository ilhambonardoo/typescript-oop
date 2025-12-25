describe("Instance Of", () => {
  class Employee {}
  class Manager {}

  const budi = new Employee();
  const eko = new Manager();

  it("should have problem using typeof", () => {
    console.info(typeof eko);
    console.info(typeof budi);
  });

  it("should support instanceof", () => {
    expect(budi instanceof Employee).toBe(true);
    expect(eko instanceof Employee).toBe(false);

    expect(budi instanceof Manager).toBe(false);
    expect(eko instanceof Manager).toBe(true);
  });
});
