export function isArr(arr) {
  return Array.isArray(arr);
}
export function inArr(arr, item) {
  return isArr(arr) ? arr.indexOf(item) !== -1 : false;
}
export function copyArr(arr) {
  if (isArr(arr)) return arr.slice(0);
  return [];
}
export function clearArr(arr) {
  if (isArr(arr)) arr.splice(0, arr.length);
}
export function delFromArr(arr, item) {
  if (isArr(arr)) {
    const index = arr.indexOf(item);
    if (~index) arr.splice(index, 1);
  }
}
export function arrToObj(arr) {
  if (isArr(arr)) {
    const obj = {};

    arr.forEach((item, index) => {
      obj[Number(index)] = item;
    });

    return obj;
  }

  return {};
}
export function flatArr(arr) {
  if (isArr(arr)) return [].concat(...arr);
  return [];
}
