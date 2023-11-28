import { sum } from "./add";

describe("sum", () => {
  it("adds two numbers", () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
