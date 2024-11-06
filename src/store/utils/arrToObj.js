export function transformArrayToObject(array) {
  return array.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {});
}

export function mergeArrayToObject(oldData, newArray) {
  const newDataObject = transformArrayToObject(newArray);
  return { ...oldData, ...newDataObject };
}
