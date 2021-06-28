class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        if (!this.authorize) {
            throw new Error('Person supclass has no implementation of the authorize method.')
        }
    }

    get type() {
        return this._type;
    };

    set type(value) {
        this._type = value;
    };
};


class Student extends Person {
    constructor(firstName, lastName, age, academicId) {
        super(firstName, lastName, age);
        this.academicId = academicId;
    };

    authorize(id){
        return this.academicId === id;
    };
};

class Employee extends Person {
    constructor(firstName, lastName, age, employeeId) {
        super(firstName, lastName, age)
        this.employeeId = employeeId;
    };

    authorize(id){
        return this.employeeId === id;
    };
};
