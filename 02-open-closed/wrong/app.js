class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    };

    authorize(id) {
        if (this.type) {
            if (this.type === 'Student') {
                return this.academicId = id;
            }
            else if (this.type === 'Employee') {
                return this.employeeId = id;
            }
            else if (this.type === 'Professor') {
                return this.professorId = id;
            }
        }
        else {
            throw new Error('Type is not defined');
        }
    }

    get type() {
        return this._type;
    };

    set type(value) {
        this._type = value;
    }
}