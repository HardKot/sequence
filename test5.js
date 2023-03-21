function test() {
  function log(text) {
    console.log(`${this.name}: ${text}`);
  }

  const regulatedFunc = regulator(log, 100, { name: "me" });

  setTimeout(() => regulatedFunc("a"), 0);
  setTimeout(() => regulatedFunc("b"), 56);
  setTimeout(() => regulatedFunc("c"), 98);
  setTimeout(() => regulatedFunc("d"), 107);
  setTimeout(() => regulatedFunc("e"), 115);
  //   0ms: me logged a
  // 100ms: me logged c
  // 200ms: me logged e
}

function regulator(func, interval, context) {
  const startFun = async () => {
    func.bind(context)(...this.lastArgs);
  };

  const start = () => {
    startFun();
    this.intervalId = setInterval(() => {
      if (this.lastArgs === undefined) {
        clearInterval(this.lastArgs);
      } else {
        startFun();
        this.lastArgs = undefined;
      }
    }, interval);
  };

  return (...args) => {
    this.lastArgs = args;

    if (this.intervalId === undefined) start();
  };
}

test();
