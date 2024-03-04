export const filteredData = (data = [], filter = []) => {
  let newData = data;
  filter?.forEach(({ fn }) => {
    newData = newData?.filter(fn);
  });
  return newData;
};

export const search = (dataList, searchValue, keys = []) => {
  const results = [];
  // let newList;
  // if (keys?.length) {
  //   newList = dataList?.map((l) => {
  //     let v = {};
  //     keys?.forEach((k) => {
  //       v[k] = l[k];
  //     });
  //     return v;
  //   });
  // }
  dataList?.forEach((item) => {
    for (const value of Object?.values(item)) {
      if (
        typeof value !== "object" &&
        String(value)
          ?.toLowerCase()
          ?.includes(String(searchValue)?.toLowerCase())
      ) {
        results?.push(item);
        break;
      }
    }
  });
  return results;
};

export const sort = (dataList, keysPriority, sortOrder = "ascending") => {
  return dataList?.sort((a, b) => {
    const compareValues = (keyA, keyB) => {
      if (keyA === keyB) return 0;
      return sortOrder === "ascending"
        ? keyA < keyB
          ? -1
          : 1
        : keyA > keyB
        ? -1
        : 1;
    };

    for (let key of keysPriority) {
      const comparison = compareValues(a[key], b[key]);
      if (comparison !== 0) return comparison;
    }
    return 0;
  });
};
