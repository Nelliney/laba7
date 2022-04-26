
// create the map and set the center of the map and its zoom setting
const map = L.map('map',{scrollWheelZoom:false}).setView([37.945705, -121.678230], 16);

//create a tile layer. Make sure to always include attribution
const streetView =  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'})

//initialize the map with the StreetView map tiles
streetView.addTo(map);

// create a set of custom map markers and add them to the map




const marker3 = L.marker([37.945291, -121.678297])
  .bindPopup('My Physical Office FO-152')
  .addTo(map);


// ----------------------------------
async function getFruit() {
  let url = 'users2.json';
  try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
}

async function renderFruit() {
  let fruits = await getFruit();
  let html = '';
  // "carbohydrates": 11.4, "protein": 0.3, "fat": 0.4, "calories": 52, "sugar": 10.3 
  //fruit.forEach(fruit => 
    for(var i = 0; i < 4; i++){
      let fruit = fruits[i];
      let htmlSegment = 
          `<div">
              <p>${fruit.name}</p>
              <div>
                  <div> carbohydrates: ${fruit.nutritions.carbohydrates} </div>
                  <div> protein: ${fruit.nutritions.protein}</div>
                  <div> fat: ${fruit.nutritions.fat}</div>
                  <div> calories: ${fruit.nutritions.calories}</div>
                  <div> sugar: ${fruit.nutritions.sugar}</div>
              </div>
          </div>`;

      html += htmlSegment;
  };

  let container = document.querySelector('.fruits');
  container.innerHTML = html;
}

renderFruit();
