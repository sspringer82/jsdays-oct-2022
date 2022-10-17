function myAsyncFunction(cb: (s: string) => void): void {
  const value = 'Hallo Welt';
  setTimeout(() => {
    cb(value);
  }, 1000);
}

function callback(value: string): void {
  console.log(value);
}

myAsyncFunction(callback);
