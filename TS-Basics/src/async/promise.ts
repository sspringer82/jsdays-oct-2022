function doSomethingAsync(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hallo Welt');
    }, 1000);
  });
}

doSomethingAsync().then((result: string) => {
  console.log(result);
});

Promise.all([doSomethingAsync(), doSomethingAsync(), doSomethingAsync()]).then(
  (values) => console.log(values)
);
Promise.race([doSomethingAsync(), doSomethingAsync(), doSomethingAsync()]).then(
  (values) => console.log(values)
);
Promise.allSettled([
  doSomethingAsync(),
  doSomethingAsync(),
  doSomethingAsync(),
]).then((values) => console.log(values));

doSomethingAsync()
  .then(() => {
    return doSomethingAsync();
  })
  .then((value) => {
    console.log(value);
  })
  .then(() => doSomethingAsync())
  .catch((error) => {
    console.error(error);
  });
