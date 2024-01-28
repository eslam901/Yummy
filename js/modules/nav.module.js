/// <reference types="../../@types/jquery" />

import { Search } from "./search.module.js";
import { Categories } from "./categories.module.js";
import { Area } from "./area.module.js";
import { Ingredients } from "./ingredient.module.js";
import { Contact } from "./contact.module.js";

export class Nav {
  constructor() {
    let widthSide = $(".side").outerWidth();
    let date = new Date();
    const currentYear = date.getFullYear();
    document.getElementById("year").innerHTML = currentYear;
    this.openNav(widthSide);
  }

  openNav(widthSide) {
    $(".menu").on("click", function (e) {
      $(".menu").hide();
      $("#nav").animate({ left: "0" }, 500);
      $(".close").show();

      for (let i = 0; i < 5; i++) {
        $(".links li")
          .eq(i)
          .animate(
            {
              top: 0,
            },
            (i + 5) * 100
          );
      }
    });
    this.closeNav(widthSide);
    this.navLinks();
  }
  closeNav(widthSide) {
    $(".close,.links li").on("click", function (e) {
      $(".close").hide();
      $("#nav").animate({ left: -widthSide + "px" }, 500);
      $(".menu").show();
      $(".links li").animate(
        {
          top: 300,
        },
        500
      );
    });
  }

  navLinks() {
    this.search = new Search();
    this.categories = new Categories();
    this.area = new Area();
    this.ingredients = new Ingredients();
    this.contact = new Contact();
  }
}
