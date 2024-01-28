import { Data } from "./data.module.js";
import { Box } from "./box.module.js";

export class Categories {
  constructor() {
    this.data = new Data();
    this.box = new Box();
    this.categories();
  }
  categories() {
    document
      .getElementById("categories")
      .addEventListener("click", async () => {
        document.getElementById("instructions").classList.add("d-none");
        document.getElementById("homePage").classList.remove("d-none");
        let api = `https://www.themealdb.com/api/json/v1/1/categories.php`;
        document.querySelector(".loading").classList.remove("d-none");
        let arry = await this.data.gitData(api);
        this.box.categorieBox(arry);
      });
  }
  categorieData() {
    document.querySelectorAll(".categorie").forEach((categorie) => {
      categorie.addEventListener("click", () => {
        let api = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categorie.dataset.categorie}`;
        document.querySelector(".loading").classList.remove("d-none");
        this.sendApi(api);
      });
    });
  }
  async sendApi(api) {
    let arry = await this.data.gitData(api);
    let showBox = this.box.dataBox(arry);
    this.data.showData(showBox);
  }
}
