const querystring = document.location.search;
const params = new URLSearchParams(querystring);
const exhibitionName = params.get('name');
const new_URL = `https://spooky-flock.flywheelsites.com//wp-json/wc/store/products${name}`;
const exhibitionDetails = document.querySelector('.exhibitions-details');
async function getDetail() {
  try {
    const responseDetail = await fetch(new_URL);
    const responseDetailJSON = await responseDetail.json();

    for (let i = 0; i < responseDetailJSON.length; i++) {
      const detailName = responseDetailJSON[i].name;
      const detailInfo = responseDetailJSON[i].description;
      const img = responseDetailJSON[i].images[0].src;
      const altText = responseDetailJSON[i].images[0].alt;
      exhibitionDetails.innerHTML = `
      <div class="exhibiton-container"
      <div class="description"><span>${detailName}</span>${detailInfo}</div>
      <img class="exhibtion-img" src="${img}" alt="${altText}">`;
    }
  } catch (error) {
    console.log(error);
  }
}
getDetail();
