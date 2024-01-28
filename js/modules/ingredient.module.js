import { Data } from "./data.module.js";
import { Box } from "./box.module.js";
export class Ingredients {
  constructor() {
    this.data = new Data();
    this.box = new Box();
    this.ingredients();
  }
  ingredients() {
    document
      .getElementById("ingredients")
      .addEventListener("click", async () => {
        let api = `https://www.themealdb.com/api/json/v1/1/list.php?i=list`;
        document.querySelector(".loading").classList.remove("d-none");
        let arry = await this.data.gitData(api);
        this.box.ingredientsBox(arry);
      });
  }
  ingredientData() {
    document.querySelectorAll(".ingredient").forEach((ingredient) => {
      ingredient.addEventListener("click", () => {
        let api = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient.dataset.ingredient}`;
        console.log(api);
        document.querySelector(".loading").classList.remove("d-none");
        this.sendApi(api);
      });
    });
  }
  async sendApi(api) {
    let arry = await this.data.gitData(api);
    console.log(arry);
    let showBox = this.box.dataBox(arry);
    this.data.showData(showBox);
  }
}
