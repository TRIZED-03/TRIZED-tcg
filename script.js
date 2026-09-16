const products = [
  { name: "Snorlax", set: "Example Set • 051/100", type: "common", price: 15, icon: "●" },
  { name: "Pikachu", set: "Example Set • 025/100", type: "uncommon", price: 20, icon: "⚡" },
  { name: "Bulbasaur", set: "Example Set • 001/100", type: "common", price: 15, icon: "✦" },
  { name: "Charmander", set: "Example Set • 004/100", type: "common", price: 15, icon: "◆" },
  { name: "Squirtle", set: "Example Set • 007/100", type: "uncommon", price: 20, icon: "◇" },
  { name: "Mew", set: "Example Set • 151/100", type: "holo", price: 35, icon: "✧" },
  { name: "Eevee", set: "Example Set • 133/100", type: "uncommon", price: 20, icon: "●" },
  { name: "Meowth", set: "Example Set • 052/100", type: "common", price: 15, icon: "⌁" }
];

const grid = document.querySelector("#products");
const filter = document.querySelector("#filter");

function render() {
  const selected = filter.value;
  const shown = selected === "all" ? products : products.filter(p => p.type === selected);
  grid.innerHTML = shown.map(p => `
    <article class="product">
      <div class="product-image"><span>${p.icon}</span></div>
      <div class="product-meta">
        <div>
          <div class="product-name">${p.name}</div>
          <div class="product-info">${p.set}</div>
          <div class="product-info">${p.type.toUpperCase()}</div>
        </div>
        <div class="price">₱${p.price}</div>
      </div>
      <a class="buy" href="#" onclick="return false">VIEW ON SHOPEE ↗</a>
    </article>
  `).join("");
}
filter.addEventListener("change", render);
render();
