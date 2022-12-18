const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

test("Can set up Github account", () => {
    const testVal = "GithubUsername";
   const e = new Engineer("Name", 100, "test@test.com", testVal);
   expect(e.github).toBe(testVal);
});

test("getRole() can return \"Intern\"", () => {
    const testVal = "Intern";
    const e = new Intern("Name", 100, "test@test.com", "Harvard");
    expect(e.getRole()).toBe(testVal);
});
// // TODO: ______ should return Engineer 
test("Can retrieve school through getSchool() function", () => {
    const testVal = "Harvard";
    const e = new Intern("Name", 100, "test@test.com", testVal);
    expect(e.getSchool()).toBe(testVal);
});