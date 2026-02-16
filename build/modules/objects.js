import { isArr } from "./arrays.js";

export function isObj(obj) {
  return obj ? obj === Object(obj) : false;
}
export function isEmptyObj(object) {
  return JSON.stringify(object) === "{}";
}
export function isEqualObj(obj1, obj2) {
  const aProps = Object.getOwnPropertyNames(obj1);
  const bProps = Object.getOwnPropertyNames(obj2);

  if (aProps.length !== bProps.length) return false;

  for (let i = 0; i < aProps.length; i++) {
    const propName = aProps[i];
    if (obj1[propName] !== obj2[propName]) return false;
  }

  return true;
}
export function isEqualObj2(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}
export function keyInObj(obj, arrProp) {
  if (obj && isArr(arrProp)) {
    let object = obj;

    for (let i = 0; i < arrProp.length; i++) {
      if (object[arrProp[i]]) {
        object = object[arrProp[i]];
      } else {
        return false;
      }
    }

    return true;
  }

  return false;
}
export function getObjProp(obj, arrProp) {
  if (obj && isArr(arrProp)) {
    let object = obj;

    for (let i = 0; i < arrProp.length; i++) {
      if (
        object != null &&
        typeof object === "object" &&
        object[arrProp[i]] !== undefined
      ) {
        object = object[arrProp[i]];
      } else {
        return undefined;
      }
    }

    return object;
  }

  return undefined;
}
export function copyObj(obj) {
  return JSON.parse(JSON.stringify(obj));
}
