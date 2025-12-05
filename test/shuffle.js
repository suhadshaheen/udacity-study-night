import { expect } from "chai";
import { shuffle } from "../starter/src/shuffle.js";

// eslint-disable-next-line no-undef
describe("Shuffle Function", () => {
  // eslint-disable-next-line no-undef
  it("should rearrange array items", () => {
    const original = [1, 2, 3, 4, 5];
    const shuffled = shuffle(original);

    expect(shuffled).to.not.deep.equal(original);

    expect(shuffled).to.have.members(original);
  });
});
