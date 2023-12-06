import fetch from 'node-fetch';
import fs from 'fs';
import FormData from 'form-data';

// Define variables for API key and video ID
const API_KEY = 'YOUR_API_KEY_HERE';
const VIDEO_ID = 'YOUR_VIDEO_ID_HERE';

// Read image file as binary data
const imageData = fs.readFileSync('a.jpg');

// Create FormData object to prepare form data for the request
const formData = new FormData();
formData.append('file', imageData, { filename: 'a.jpg' }); // Append the image data to the FormData object

// Set options for the HTTP request
const options = {
  method: 'POST', // Set the request method as POST
  headers: {
    accept: 'application/json', // Specify the type of response expected
    Authorization: API_KEY, // Add the authorization token or API key
    ...formData.getHeaders(), // Include the form data headers to specify multipart form data
  },
  body: formData, // Set the request body as the FormData object
};

// Send the POST request to the specified API endpoint
fetch(`https://api-v2.pandavideo.com.br/thumbs/${VIDEO_ID}?type=video`, options)
  .then(response => response.json()) // Parse the response body as JSON
  .then(response => console.log(response)) // Log the parsed JSON response
  .catch(err => console.error(err)); // Log any errors encountered during the request
