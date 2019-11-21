import { loadJSON } from './modules/loaders.js';
import { getObjProp } from './modules/objects.js';
import { isArr } from './modules/arrays.js';

(() => {
  const textEl = document.getElementById('text');
  const transcriptionEl = document.getElementById('transcription');
  const prevEl = document.getElementById('prev');
  const nextEl = document.getElementById('next');
  const playEl = document.getElementById('play');

  loadJSON('data/catalog.json').then((data) => {
    const twisters = getObjProp(data, ['twisters']);
    const twisterName = window.location.search.substr(1);
    let twister;
    let audio;

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

      const index = twisters.indexOf(twister);

      if (prevEl) {
        if (index !== -1 && index !== 0) {
          prevEl.classList.remove('hide');
          prevEl.href = `?${getObjProp(twisters, [index - 1, 'name'])}`;
        }
      }

      if (nextEl) {
        if (index !== -1 && index !== twisters.length - 1) {
          nextEl.classList.remove('hide');
          nextEl.href = `?${getObjProp(twisters, [index + 1, 'name'])}`;
        }
      }

      if (twister.audio) {
        if (playEl) {
          playEl.classList.remove('hide');

          playEl.addEventListener('click', () => {
            if (!audio) {
              audio = document.createElement('audio');
            }

            audio.src = `data/${twister.audio}`;
            audio.currentTime = 0;
            audio.play();
          });
        }
      }
    }
  });
})();
