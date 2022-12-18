const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number through constructor", () => {
    const testVal = 500; 
    const e = new Manager("Name", "email@email.com", 70, testVal);
    expect(e.officeNumber).toBe(testVal);
});

test("getRole() can return \"Manager\"", () => {
    const testVal = "Manager";
    const e = new Manager("Name", "email@email.com", 100, 401);
    expect(e.getRole()).toBe(testVal);
});


test("Can get office number through getOfficeNumber()", () => {
    const testVal = 401;
    const e =  new Manager("Name", "email@email.com", 70, testVal);
    expect(e.getOfficeNumber()).toBe(testVal);
});
