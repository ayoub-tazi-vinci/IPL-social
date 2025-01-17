import { App } from "../src/app.js";

describe("Password checker for function passwordCheck", function () {

  const app = new App();

  it("passwordCheck should return true if passwordLenght >=8", function () {
    const result = app.passwordCheck("12345678");

    expect(result).toBe(true);
  });
  });