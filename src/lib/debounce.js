let timeoutId;

export function debounceAsync(asyncFunc, delay) {
  return function() {
    const context = this;
    const args = arguments;
    
    clearTimeout(timeoutId);
    return new Promise((resolve, reject) => {
      timeoutId = setTimeout(async () => {
        try {
          await asyncFunc.apply(context, args);
          resolve();
        } catch (error) {
          reject(error);
        }
      }, delay);
    });
  };
}
