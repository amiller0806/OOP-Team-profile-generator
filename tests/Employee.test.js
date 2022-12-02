// Format

const Employee = require('../lib/Employee.js');


// jest.mock('../lib/Potion.js');

test('creates new employee', () => {
    const employee = new Employee();

    expect(employee).toBeInstanceOf(Employee);

    //  expect(typeof(e)).toBe("object");

});

// TODO: Sets name of employee
// TODO: Sets ID 
//   const testValue = 100; EXAMPLE
// TODO: Sets email 
// TODO: Can get name 
// TODO: Can get ID
// TODO: Can get email
// TODO: Can set name 
// TODO: _____ function should return Employee 


