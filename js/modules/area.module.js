import { Data } from "./data.module.js";
import { Box } from "./box.module.js";

export class Area {
  constructor() {
    this.data = new Data();
    this.box = new Box();
    this.area();
  }
  area() {
    document.getElementById("area").addEventListener("click", async () => {
      document.getElementById("instructions").classList.add("d-none");
      document.getElementById("homePage").classList.remove("d-none");
      let api = `https://www.themealdb.com/api/json/v1/1/list.php?a=list`;
      document.querySelector(".loading").classList.remove("d-none");
      let arry = await this.data.gitData(api);
      this.box.areaBox(arry);
    });
  }
  areaData() {
    document.querySelectorAll(".area").forEach((area) => {
      area.addEventListener("click", () => {
        let api = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area.dataset.area}`;
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
