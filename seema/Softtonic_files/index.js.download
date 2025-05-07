import { data } from "./data.mjs";

window.onload = () => {
  const newLaunch = data.find((prod) => prod.type === "newLaunch");
  const products = data
    .filter((prod) => prod.type === "product")
    .map((prod) => {
      if (prod.type === "product") return prod;
    });
  document.getElementById("newLaunchTitle").innerHTML = newLaunch.name;
  document.getElementById("originalPrice").innerHTML = `$${newLaunch.price}`;
  const disPrice = newLaunch.price - (newLaunch.price / 100) * 25;
  document.getElementById("discountePrice").innerHTML = `$${parseInt(
    disPrice
  )}`;
  var productsHTML = "";
  for (var i = 0; i < products.length; i++) {
    productsHTML =
      productsHTML +
      `<div class="productItems"><h3>${products[i].name}</h3><span>${products[i].specifications}</span></div>`;
  }
  document.getElementById("products").innerHTML = productsHTML;
  console.log(productsHTML);
};
