const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number through constructor", () => {
    const testVal = 50; 
    const m = new Manager("Name", 70, "test@test.com", testVal);
    expect(m.OfficeNumber()).toBe(testVal);
});

// TODO: test getRole should return Manager
// TODO: test can get get office number through getOfficeNumber function


