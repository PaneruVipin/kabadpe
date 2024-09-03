export const generateCombinations = (attributes) => {
  let keys = Object.keys(attributes);
  keys = keys?.filter((k) => attributes?.[k]?.length);
  // Helper function to generate combinations recursively
  const combine = (attrIndex, currentCombination) => {
    if (attrIndex === keys?.length) {
      // Base case: if all attributes have been processed, add the combination
      combinations.push({ ...currentCombination });
      return;
    }

    const currentKey = keys?.[attrIndex];
    const currentAttr = attributes?.[currentKey];

    if (currentAttr?.length === 0) {
      // If the current attribute array is empty, move to the next attribute
      combine(attrIndex + 1, currentCombination);
    } else {
      // Iterate through the current attribute's values
      currentAttr?.forEach((value) => {
        combine(attrIndex + 1, { ...currentCombination, [currentKey]: value });
      });
    }
  };

  const combinations = [];
  combine(0, {});
  return { combinations: combinations?.length > 1 ? combinations : [], keys };
};
