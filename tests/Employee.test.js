const Employee = require('../lib/Employee.js');




test('creates new employee', () => {
    const employee = new Employee();

    expect(employee).toBeInstanceOf(Employee);


});



