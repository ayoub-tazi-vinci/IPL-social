import { App } from "../src/app.js";

describe("Password checker for function passwordChecklenht", function () {

  const app = new App();

  it("passwordCheck should return true if passwordLenght >=8", function () {
    const result = app.passwordCheckLenght("12345678");

    expect(result).toBe(true);
  });

    it("passwordCheck should return false if passwordLenght <8", function () {
        const result = app.passwordCheckLenght("1234567");
    
        expect(result).toBe(false);
        });

    

  });

  describe("Password checker for function passwordcheckSpecial", function () {

    const app = new App();

    it("passwordCheck should return true if password has special characters", function () {
      const result = app.passwordCheckSpecial("@");
      expect(result).toBe(true);
  });

    it("passwordCheck should return false if password does not have special characters", function () {
        const result = app.passwordCheckSpecial("12345678");
        expect(result).toBe(false);
});
});

describe("Password checker for function passwordCheckNumber", function () {
    const app = new App();
    it("passwordCheck should return true if password has numbers", function () {
      const result = app.passwordCheckNumber("12345678");
      expect(result).toBe(true);
    });

    it("passwordCheck should return false if password does not have numbers", function () {
        const result = app.passwordCheckNumber("abcdefgh");
        expect(result).toBe(false);
    });
});

describe("Password checker for function passwordCheckNoIpl", function () {
    const app = new App();

    it("passwordCheck should return true if password does not have ipl", function () {
        const result = app.passwordCheckNoIpl("12345678");
        expect(result).toBe(true);
        }
    );

    it("passwordCheck should return false if password has ipl", function () {
        const result = app.passwordCheckNoIpl("ipl12345678");
        expect(result).toBe(false);
    });
 it("passwordCheck should return false if password has IPL", function () {
    const result = app.passwordCheckNoIpl("IPL12345678");
    expect(result).toBe(false);
    });



});

