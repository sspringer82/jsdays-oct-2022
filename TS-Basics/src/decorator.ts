import { PerformanceObserver, performance } from 'node:perf_hooks';

const obs = new PerformanceObserver((items) => {
  console.log(items.getEntries()[0].duration);
  performance.clearMarks();
});
obs.observe({ type: 'measure' });

class User {
  @logFactory(true)
  save() {
    // save to database
    return new Promise((resolve) => {
      setTimeout(() => resolve(true), 2500);
    });
  }
}

const klaus = new User();
klaus.save();

function logFactory(doLog: boolean) {
  return (
    target: User,
    propertykey: string,
    descriptor: PropertyDescriptor
  ) => {
    if (doLog) {
      const original = descriptor.value;
      descriptor.value = async function (
        ...args: Parameters<typeof User.prototype.save>
      ) {
        performance.mark('save');
        const result = await original.apply(this, args);
        performance.measure('save duration', 'save');
        return result;
      };
    }
  };
}
