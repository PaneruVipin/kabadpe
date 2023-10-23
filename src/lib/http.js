export const resolvePromise = (asyncFn) => {
  return (data) => {
    const promise = new Promise((resolve) => {
      asyncFn(data)
        .then((res) => resolve(res))
        .catch((e) =>
          resolve({
            error: true,
            errors: e?.response?.data?.errors || [
              {
                message: e?.message || `error in calling api ${asyncFn?.name}`,
              },
            ],
          })
        );
    });
    return promise;
  };
};
