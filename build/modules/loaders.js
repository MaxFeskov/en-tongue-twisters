import { isArr } from './arrays.js';

export function loadJSON(url) {
  return fetch(url)
    .then(r => r.json())
    .catch(() => console.log(`Error loaded ${url}`));
}

export function loadJSONList(urlArr) {
  const resultArr = [];

  if (isArr(urlArr)) {
    urlArr.forEach((url) => {
      resultArr.push(loadJSON(url));
    });
  }

  return Promise.all(resultArr);
}
