const Engineer = require("../lib/Engineer");

test("Can set up Github account"), () => {
    const testVal = "GithubUsername";
   const e = new Engineer("Name", 100, "test@test.com", testVal);
   expect(e.github).toBe(testVal);
};

// TODO: ______ should return Engineer 
// const testVal = "engineer"
// const e = new Engineer("Name", 100, "test@test.com", GithubUsername);
// expect(e.functionName).toBe(testVal);


// TODO: Can get Github username via _____ (functionName)

