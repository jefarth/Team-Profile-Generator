const Employee = require('../lib/Employee');
// The first class is an `Employee` parent class
describe('Employee', () => {
    // Testing the function being called with the "new" operator
    describe('Initialization', () => {
        it('should create an object with a name, id, and email if provided valid arguments', () => {
            const employee = new Employee('Gilbert', 101, 'gilbert.company@email.com');
           
            // Expecting the name to equal 'Gilbert'
            expect(employee.name).toEqual('Gilbert');
            // Expecting the id to equal '101'
            expect(employee.id).toEqual(101);
            // Expecting the email to be 'gilbert.company@email.com'
            expect(employee.email).toEqual(`gilbert.company@email.com`);
        });

        it('should throw an error if provided no arguments', () => {
            // Wrap the object initialization in a callback function that Jest will run
            const cb = () => new Employee();

            // expecting the callback function to throw an error
            expect(cb).toThrow();
        });

        it('should throw an error if not provided an id', () => {
            const cb = () => new Employee('Gilbert');
            
            // Creating the error message that toThrowError is supposed to get
            const err = new Error("Expected parameter 'id' to be a non-negative number");
            // Expecting the cb function to throw the specific error on line 33
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'name' is not a string", () => {
            const cb = () => new Employee(24, 101);
            const err = new Error("Expected parameter 'name' to be a non-empty string");
      
            expect(cb).toThrowError(err);
        });
      
        it("should throw an error if 'id' is not a number", () => {
            const cb = () => new Employee('Gilbert', '101');
            const err = new Error("Expected parameter 'id' to be a non-negative number");
      
            expect(cb).toThrowError(err);
        });
      
        it("should throw an error if 'id' is less than 0", () => {
            const cb = () => new Employee('Gilbert', -1);
            const err = new Error("Expected parameter 'id' to be a non-negative number");
      
            expect(cb).toThrowError(err);
        });
    });
});