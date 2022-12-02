const Intern = require("../lib/Intern");

test("Can set up school"), () => {
    const testVal = "Harvard";
   const e = new Intern("Name", 100, "test@test.com", testVal);
   expect(e.school).toBe(testVal);
};



// TODO: ______ should return Engineer 
// const testVal = "engineer"
// const e = new Engineer("Name", 100, "test@test.com", GithubUsername);
// expect(e.functionName).toBe(testVal);


// TODO: test("Can get school via _____()") (functionName), () => {
const testVal = "Harvard";
   const e = new Intern("Name", 100, "test@test.com", testVal);
//    expect(e.FunctionName).toBe(testVal);

