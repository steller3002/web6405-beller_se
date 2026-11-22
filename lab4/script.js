class Signup {
  constructor(name, email, agreement) {
    this.name = name;
    this.email = email;
    this.agreement = agreement;
  }

  print() {
    console.log(JSON.stringify(this, null, 2));
  }
}

const form = document.getElementById('signup-form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const agreement = document.getElementById('agreement').checked;

  const signup = new Signup(name, email, agreement);
  signup.print();
});
