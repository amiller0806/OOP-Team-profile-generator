const Intern = require("../lib/Intern");

test("Can set up school", () => {
    const testVal = "Harvard";
   const e = new Intern("Name", 100, "test@test.com", testVal);
   expect(e.school).toBe(testVal);
});


test("getRole() returns \"Intern\"" , () => {
    const testVal = "Intern";
   const e = new Intern("Name", 100, "test@test.com", "Harvard" );
   expect(e.getRole()).toBe(testVal);
});


test("getSchool() returns school", () => {
    const testVal = "Harvard";
   const e = new Intern("Name", 100, "test@test.com", testVal );
   expect(e.getSchool()).toBe(testVal);
});

