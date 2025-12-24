describe("Visibilty", () => {
  class Counter {
    // private counter: number = 0;
    protected counter: number = 0;

    public increment(): void {
      this.counter++;
    }

    public getCounter(): number {
      return this.counter;
    }
  }

  class DoubleCounter extends Counter {
    public increment() {
      this.counter += 2;
    }
  }

  it("Should can support PRIVATE", () => {
    const counter = new Counter();
    // counter.counter = 2 --> ini bakalan error karena atribut counter itu disetnya private
    counter.increment();
    counter.increment();
    counter.increment();
    console.info(counter.getCounter());
  });

  it("Should can support PROTECTED", () => {
    const counter = new DoubleCounter();

    counter.increment();
    counter.increment();
    counter.increment();

    console.info(counter.getCounter());
  });
});
