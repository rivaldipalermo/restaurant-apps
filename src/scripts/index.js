import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import data from "../public/DATA.json";

document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector("#menu");
  const drawer = document.querySelector(".nav");
  const hero = document.querySelector(".hero");

  menu.addEventListener("click", event => {
    drawer.classList.toggle("open");
    event.stopPropagation();
  });
  
  hero.addEventListener("click", event => {
    drawer.classList.remove("open");
    event.stopPropagation();
  });
  
  let list_restaurant = "";
  data.restaurants.forEach((restaurant) => {
    list_restaurant += `
      <article class="restaurant-item">
        <div class="restaurant-item__location">
          <p>${restaurant.city}</p>
        </div>
        <div class="restaurant-item_content">
          <img class="restaurant-item__thumbnail" src="${restaurant.pictureId}" alt="${restaurant.name}">
          <div class="restaurant-item__content">
            <h3 class="restaurant-item__rating">Rating : ${restaurant.rating}</h3>
            <a href="#" class="restaurant-item__name">${restaurant.name}</a>
            <p class="restaurant-item__description">${restaurant.description}</p>
          </div>
        </div>
      </article>
    `;
  });
  document.getElementById("list-restaurant").innerHTML = list_restaurant;
});
