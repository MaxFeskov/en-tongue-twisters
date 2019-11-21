import { loadJSON } from './modules/loaders.js';
import { getObjProp } from './modules/objects.js';
import { isArr } from './modules/arrays.js';

(() => {
  const textEl = document.getElementById('text');
  const transcriptionEl = document.getElementById('transcription');

  loadJSON('data/catalog.json').then((data) => {
    const twisters = getObjProp(data, ['twisters']);
    const twisterName = window.location.search.substr(1);
    let twister;

    if (isArr(twisters)) {
      const filterArr = twisters.filter(item => item.name === twisterName);

      if (filterArr.length) {
        [twister] = filterArr;
      } else {
        [twister] = twisters;

        if (twister && twister.name) {
          window.location.search = `?${twister.name}`;
        }
      }
    }

    if (twister) {
      if (textEl) {
        textEl.innerHTML = twister.text;
      }

      if (transcriptionEl) {
        transcriptionEl.innerHTML = twister.transcription;
      }
    }
  });
})();
