function greeting() {
  let username = "Oscar";

  function displayUserName() {
    return `Hello ${username}`;
  }

  return displayUserName;
}

const x = greeting();
console.log(x);
console.log(x());
