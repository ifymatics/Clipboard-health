const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the string value of partitionKey when given an object that contains a partitionKey", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: 123 });
    expect(trivialKey).toBe("123");
  });
  it("Returns a harsh string of constant length when given an object without a partitionKey", () => {
    const trivialKey = deterministicPartitionKey({ dowwel: "12" });
    const trivialKey1 = deterministicPartitionKey({});
    expect(trivialKey.length).toBe(trivialKey1.length);
  });
});
