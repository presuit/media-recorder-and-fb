import { addToStorage } from './firebase.js';

const player = document.getElementById('player');

const downloadLink = document.getElementById('download');
const stopButton = document.getElementById('stop');

const handleSuccess = (stream) => {
  const options = { mimeType: 'audio/webm' };
  const recordedChunks = [];

  const mediaRecorder = new MediaRecorder(stream, options);

  mediaRecorder.addEventListener('dataavailable', (e) => {
    if (e.data.size > 0) recordedChunks.push(e.data);
  });

  mediaRecorder.addEventListener('stop', async () => {
    const blob = new Blob(recordedChunks, { type: 'audio/mpeg' });

    await addToStorage(blob);
  });

  stopButton.addEventListener('click', () => {
    mediaRecorder.stop();
  });

  // if (window.URL) {
  //   player.srcObject = stream;
  // } else {
  //   player.src = stream;
  // }

  mediaRecorder.start();
};

navigator.mediaDevices
  .getUserMedia({ audio: true, video: false })
  .then(handleSuccess);
