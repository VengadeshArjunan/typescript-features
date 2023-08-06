function Person(name) {
    this.name = name;
    this.greet = function() {
        return "hi";
    };
}

var emp = new Person("venki");
console.log(emp.name);
console.log(emp.greet());