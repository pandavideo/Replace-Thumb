import fetch from 'node-fetch';
import fs from 'fs';
import FormData from 'form-data';

const imageData = fs.readFileSync('a.jpg');

const formData = new FormData();
formData.append('file', imageData, { filename: 'a.jpg' });

const options = {
  method: 'POST',
  headers: {
    accept: 'application/json',
    Authorization: 'panda-e6bace2e8f14ca377b35f79caf14d56be70ad0dc7f55c1c50a5c6af127e13223',
    ...formData.getHeaders(), 
  },
  body: formData,
};

fetch('https://api-v2.pandavideo.com.br/thumbs/d82742f3-872e-44e7-ab89-33003396d2b8?type=video', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
