function doSomethingAsync(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hallo Welt');
    }, 1000);
  });
}
(async function () {
  try {
    const result = await doSomethingAsync();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
})();

async function doSomethingReallyAsync(): Promise<string> {
  const result = doSomethingAsync();

  // do something creative

  return result;
}
