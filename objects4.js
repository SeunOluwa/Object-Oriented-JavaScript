// Class Methods
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
    login() {
        console.log(this.email, 'just logged in');
    }
    logout() {
        console.log(this.email, 'just logged out');
    }
}

var userOne = new User('seun@gmail.com', 'Seun');
var userTwo = new User('seyi@gmail.com', 'Seyi');

userOne.login();
userOne.logout();
userTwo.login();
userTwo.logout();
