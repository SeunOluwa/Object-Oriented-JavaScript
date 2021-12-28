// Method Chaining
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login() {
        console.log(this.email, 'just logged in');
        return this;
    }
    logout() {
        console.log(this.email, 'just logged out');
        return this;
    }
    updateScore() {
        this.score++;
        console.log(this.email, 'score is now', this.score);
        return this;
    }
}

var userOne = new User('seun@gmail.com', 'Seun');
var userTwo = new User('seyi@gmail.com', 'Seyi');

userOne.login().updateScore().updateScore().logout();
