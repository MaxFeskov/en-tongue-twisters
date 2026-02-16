const SpeechRecognition =
  globalThis.SpeechRecognition || globalThis.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

recognition.onnomatch = (event) => {
  console.log(event.error);
};

export default recognition;
