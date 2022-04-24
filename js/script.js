const MyUrl =
  'https://spooky-flock.flywheelsites.com/wp-json/wc/store/products';
const exhibitonContainer = document.querySelector('.exhibitions');

async function fetchExhibitions() {
  try {
    const response = await fetch(MyUrl);
    const responseJson = await response.json();
    const myDetails = responseJson;
    console.log(response);
    for (let i = 0; i < myDetails.length; i++) {
      let exhibitionImg = myDetails[i].images[0].src;
      let altText = myDetails[i].images[0].alt;
      let descriptionInfo = myDetails[i].short_description;
      let readMore = myDetails[i].add_to_cart.text;
      let exhibitionsName = myDetails[i].name;
      exhibitonContainer.innerHTML += `
      <div class="exhibiton-container"
      <div class="description"><span>${exhibitionsName}</span>${descriptionInfo}</div>
      <img class="exhibtion-img" src="${exhibitionImg}" alt="${altText}">
     <div class="button-read-more"><a href=exhibitions-details.html?name=${exhibitionsName}"</a>${readMore}</div>
      </div>
      `;
    }
  } catch (error) {
    console.log(error);
  }
}
fetchExhibitions();
