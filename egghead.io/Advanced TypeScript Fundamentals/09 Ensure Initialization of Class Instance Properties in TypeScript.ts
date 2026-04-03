class User {
  username: string;

  constructor(username: string) {
    this.username = username;
  }
}

const user = new User("juanpavon");
const username = user.username.toLowerCase();
console.log(`Username: ${username}`);

