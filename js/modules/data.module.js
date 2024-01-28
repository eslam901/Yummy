import { Instructions } from "./instructions.module.js";
import { Categories } from "./categories.module.js";
import { Area } from "./area.module.js";
import { Ingredients } from "./ingredient.module.js";

export class Data {
  async gitData(apis) {
    let response = await fetch(apis);
    let data = await response.json();
    let arry;
    if (data.meals) {
      arry = data.meals;
    } else if (data.categories) {
      arry = data.categories;
    }
    return arry;
  }
  showData(box) {
    document.getElementById("show").innerHTML = box;
    document.querySelector(".loading").classList.add("d-none");
    this.categories = new Categories();
    this.categories.categorieData();
    this.area = new Area();
    this.area.areaData();
    this.ingredients = new Ingredients();
    this.ingredients.ingredientData();
    this.showDetails();
  }
  showDetails() {
    document.querySelectorAll(".meal").forEach((meal) => {
      meal.addEventListener("click", () => {
        document.getElementById("home").classList.add("d-none");
        let id = meal.dataset.id;
        this.sendId(id);
      });
    });
  }
  sendId(id) {
    this.instructions = new Instructions(id);
  }
}
