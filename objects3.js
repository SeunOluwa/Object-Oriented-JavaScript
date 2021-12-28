// Classes and Class Constructors
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
}

var userOne = new User('seun@gmail.com', 'Seun');
var userTwo = new User('seyi@gmail.com', 'Seyi');

console.log(userOne);
console.log(userTwo);


// the 'new' keyword
// - creates a new empty object {}
// - sets the value of 'this' to be the new empty object
// - calls the constructor method
