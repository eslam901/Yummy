import { Data } from "./data.module.js";

export class Box {
  constructor() {
    this.data = new Data();
  }
  dataBox(arry) {
    let showBox = ``;
    for (let i = 0; i < arry.length; i++) {
      const x = arry[i];
      showBox += `
        <div class="col-md-3">
          <div data-id="${x.idMeal}" class="rounded-2 overflow-hidden position-relative meal">
            <img src="${x.strMealThumb}" class="w-100"/>
            <div class="layer position-absolute d-flex align-items-center p-2">
              <h3>${x.strMeal}</h3>
            </div>
          </div>
        </div>
      `;
    }
    return showBox;
  }
  categorieBox(arry) {
    let showBox = ``;
    for (let i = 0; i < arry.length; i++) {
      const x = arry[i];
      showBox += `
          <div class="col-md-3">
            <div data-categorie="${
              x.strCategory
            }" class="position-relative overflow-hidden rounded-2 categorie">
              <img src="${x.strCategoryThumb}"/>
              <div class="layer position-absolute text-center p-2">
                <h3>${x.strCategory}</h3>
                <p>${x.strCategoryDescription
                  .split(" ")
                  .slice(0, 20)
                  .join(" ")}</p>
              </div>
            </div>
          </div>
      `;
    }
    this.data.showData(showBox);
  }
  areaBox(arry) {
    let showBox = ``;
    for (let i = 0; i < arry.length; i++) {
      const x = arry[i];
      showBox += `
          <div class="col-md-3 text-white text-center">
            <div data-area="${x.strArea}" class="area">
              <i class="fa-solid fa-house-laptop fa-4x"></i>
              <h3>${x.strArea}</h3>
            </div>
          </div>
      `;
    }
    this.data.showData(showBox);
  }
  ingredientsBox(arry) {
    let showBox = ``;
    for (let i = 0; i < 20; i++) {
      const x = arry[i];
      showBox += `
          <div class="col-md-3 text-white text-center">
            <div data-ingredient="${x.strIngredient}" class="ingredient">
              <i class="fa-solid fa-drumstick-bite fa-4x"></i>
              <h3>${x.strIngredient}</h3>
              <p>${x.strDescription.split(" ").slice(0, 20).join(" ")}</p>
            </div>
          </div>
      `;
    }
    this.data.showData(showBox);
  }
}
