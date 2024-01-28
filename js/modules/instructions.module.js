import { Data } from "./data.module.js";
export class Instructions {
  constructor(id) {
    this.getDetails(id);
  }
  async getDetails(id) {
    let api = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    this.data = new Data();
    document.querySelector(".loading").classList.remove("d-none");
    let arry = await this.data.gitData(api);
    const Ingredient = [
      arry[0].strIngredient1,
      arry[0].strIngredient2,
      arry[0].strIngredient3,
      arry[0].strIngredient4,
      arry[0].strIngredient5,
      arry[0].strIngredient6,
      arry[0].strIngredient7,
      arry[0].strIngredient8,
      arry[0].strIngredient9,
      arry[0].strIngredient10,
      arry[0].strIngredient11,
      arry[0].strIngredient12,
      arry[0].strIngredient13,
      arry[0].strIngredient14,
      arry[0].strIngredient15,
      arry[0].strIngredient16,
      arry[0].strIngredient17,
      arry[0].strIngredient18,
      arry[0].strIngredient19,
      arry[0].strIngredient20,
    ];
    const Measure = [
      arry[0].strMeasure1,
      arry[0].strMeasure2,
      arry[0].strMeasure3,
      arry[0].strMeasure4,
      arry[0].strMeasure5,
      arry[0].strMeasure6,
      arry[0].strMeasure7,
      arry[0].strMeasure8,
      arry[0].strMeasure9,
      arry[0].strMeasure10,
      arry[0].strMeasure11,
      arry[0].strMeasure12,
      arry[0].strMeasure13,
      arry[0].strMeasure14,
      arry[0].strMeasure15,
      arry[0].strMeasure16,
      arry[0].strMeasure17,
      arry[0].strMeasure18,
      arry[0].strMeasure19,
      arry[0].strMeasure20,
    ];
    let recipes = ``;
    for (let i = 0; i < 19; i++) {
      const x = Ingredient[i];
      const y = Measure[i];
      if (x.length > 1 && y.length > 1) {
        recipes += `
        <li class="alert alert-info m-2 p-1">${y} ${x}</li>
        `;
      }
    }
    let stTags = arry[0].strTags;
    let tags = ``;
    if (stTags) {
      if (stTags.includes(",")) {
        let arryTags = stTags.split(",");
        for (let i = 0; i < arryTags.length; i++) {
          const x = arryTags[i];
          tags += `
      <span class="alert alert-danger m-2 p-1">${x}</span>
      `;
        }
      } else {
        tags = `
      <span class="alert alert-danger m-2 p-1">${stTags}</span>
      `;
      }
    }
    document.getElementById("details").innerHTML = `
      <div class="col-md-4">
        <div class="position-sticky top-0 start-0">
          <img src="${arry[0].strMealThumb}" class="rounded-2 w-100" />
          <h2 class="text-white py-2">${arry[0].strMeal}</h2>
        </div>
      </div>
      <div class="col-md-8">
        <div class="text-white">
          <div class="d-flex justify-content-between align-items-center">
            <h2>Instructions</h2>
            <i class="btnClose fa-solid fa-xmark fa-2xl"></i>
          </div>
          <p>${arry[0].strInstructions}</p>
          <h2 class="py-2 fw-bold">Area : <span>${arry[0].strArea}</span></h2>
          <h3 class="fw-bold">Category : <span>${arry[0].strCategory}</span></h3>
          <h3 class="fw-bold">Recipes :</h3>
          <ul class="list-unstyled d-flex g-3 flex-wrap">${recipes}</ul>
          <h3>Tags :</h3>
          <p class="my-3">${tags}</p>
          <a href="${arry[0].strSource}" target="_blank" class="btn btn-success">Source</a>
          <a href="${arry[0].strYoutube}" target="_blank" class="btn btn-danger">Youtube</a>
        </div>
      </div>
    `;
    document.querySelector(".btnClose").addEventListener("click", function () {
      document.getElementById("home").classList.remove("d-none");
      document.getElementById("instructions").classList.add("d-none");
    });
    document.getElementById("instructions").classList.remove("d-none");
    document.querySelector(".loading").classList.add("d-none");
  }
}
