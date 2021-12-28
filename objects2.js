// Updating Properties
var userOne = {
    email: 'seun@gmail.com',
    name: 'Seun',
    login() {
        console.log(this.email, 'has logged in');
    },
    logout() {
        console.log(this.email, 'has logged out');
    }
}

userOne.name = 'Seyi';
