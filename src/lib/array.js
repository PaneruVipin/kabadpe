export const filteredData = (data = [], filter = []) => {
  let newData = data;
  filter?.forEach(({ fn }) => {
    newData = newData?.filter(fn);
  });
  return newData;
};
