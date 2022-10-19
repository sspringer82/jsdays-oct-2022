fetch('/users')
  .then((response) => response.json())
  .then((data) => console.log(data));
