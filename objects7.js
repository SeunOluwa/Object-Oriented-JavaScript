// Constructors under the hood
function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
    this.login = function() {
        console.log(this.email, 'has logged in');
    }
}

var userOne = new User('seun@gmail.com', 'Seun');
var userTwo = new User('seyi@gmail.com', 'Seyi');

console.log(userOne);
userTwo.login();
