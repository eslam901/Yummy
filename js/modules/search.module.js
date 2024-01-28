import { Data } from "./data.module.js";
import { Box } from "./box.module.js";

export class Search {
  constructor() {
    this.data = new Data();
    this.box = new Box();
    this.search();
  }
  search() {
    document.getElementById("sreach").addEventListener("click", () => {
      let searchBox = `
        <div class="col-6">
          <div>
            <input id="searchName" type="text" class="form-control bg-transparent text-white search" placeholder=" search By Name" />
          </div>
        </div>
        <div class="col-6">
          <div>
            <input id="searchLetter" type="text" class="form-control bg-transparent text-white search" maxlength="1" placeholder=" search By First Letter" />
          </div>
        </div>
        <div class="col-12 position-relative">
          <div id="result" class="row g-4"></div>
          <div class="load d-none">
            <span class="loader"></span>
          </div>
        </div>
      `;
      this.showInputs(searchBox);
    });
  }
  showInputs(box) {
    document.getElementById("show").innerHTML = box;
    this.searchName();
    this.searchLetter();
  }
  searchName() {
    let search = document.getElementById("searchName");
    search.addEventListener("input", async () => {
      let searchValue = search.value;
      let api = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;
      document.querySelector(".load").classList.remove("d-none");
      let result = await this.data.gitData(api);
      this.showResult(this.box.dataBox(result));
    });
  }
  searchLetter() {
    let search = document.getElementById("searchLetter");
    search.addEventListener("input", async () => {
      let searchValue = search.value;
      if (searchValue) {
        let api = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchValue}`;
        document.querySelector(".load").classList.remove("d-none");
        let result = await this.data.gitData(api);
        this.showResult(this.box.dataBox(result));
      }
    });
  }
  showResult(box) {
    document.getElementById("result").innerHTML = box;
    document.querySelector(".load").classList.add("d-none");
    this.data.showDetails();
  }
}
