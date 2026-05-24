document.addEventListener("DOMContentLoaded", () => {
  let user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    alert("Please signup first");
  }

  loadProducts();
});

function loadProducts() {
  let container = document.getElementById("products");

  let products = [
    { name: "Mobile Deal", link: "#", img: "" },
    { name: "Laptop Offer", link: "#", img: "" }
  ];

  products.forEach(p => {
    let div = document.createElement("div");
    div.innerHTML = `
      <h3>${p.name}</h3>
      <a href="${p.link}" target="_blank">Buy Now</a>
    `;
    container.appendChild(div);
  });
}
