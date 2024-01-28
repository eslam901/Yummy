/// <reference types="../../@types/jquery" />

import { Nav } from "./nav.module.js";
import { Data } from "./data.module.js";
import { Box } from "./box.module.js";

export class Home {
  constructor() {
    this.defultData();
  }
  async defultData() {
    this.nav = new Nav();
    let api = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
    this.data = new Data();
    this.box = new Box();
    document.querySelector(".loading").classList.remove("d-none");
    let arry = await this.data.gitData(api);
    let showBox = this.box.dataBox(arry);
    this.data.showData(showBox);
  }
}
