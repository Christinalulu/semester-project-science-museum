const querystring = document.location.search;
const params = new URLSearchParams(querystring);
const exhibtionDetails = params.get('name');
const details_URL = `http://127.0.0.1:5501/exhibitions-details.html?name=${exhibtionsName}`;

const exhibitionDetails = document.querySelector('.exhibitions-details');
