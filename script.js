const products = [
  {
    url: "images/perfume1.png",
    description: "Premium Quality Perfume",
    title: "N5 Chanel",
  },
  {
    url: "images/perfume2.png",
    description: "Premium Quality Perfume",
    title: "N5 Chanel",
  },
  {
    url: "images/perfume3.png",
    description: "Premium Quality Perfume",
    title: "N5 Chanel",
  },
];

// Sélectionner le div qui va contenir tous les cards
const productsContainer = document.querySelector(".products");

// Fonction pour générer un card pour chaque produit
function createProductCard(product) {
  // Créer le div du card
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  // Ajouter le contenu de la carte (image, titre, description)
  cardDiv.innerHTML = `
          <div class="img">
            <img src="${product.url}" alt="" />
          </div>
          <div class="text">
            <h6>${product.description}</h6>
            <h4>${product.title}</h4>
          </div>
          <a href="#">Get This</a>
  `;

  return cardDiv;
}

// Boucler sur chaque produit et créer une carte pour chacun d'eux
products.forEach((product) => {
  const productCard = createProductCard(product); // Générer le card pour le produit
  productsContainer.appendChild(productCard); // Ajouter la carte au container
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".logo", {
    duration: 1,
    opacity: 0,
    y: -100,
  });
  gsap.from("nav ul li", {
    duration: 1,
    opacity: 0,
    y: -100,
    stagger: 0.2,
  });
  gsap.from(".content .text > *", {
    duration: 1,
    opacity: 0,
    y: 100,
    stagger: 0.6,
    delay: 1.6,
  });
  gsap.from(".products .card", {
    duration: 1,
    opacity: 0,
    y: 100,
    stagger: 0.6,
    delay: 2,
  });
  gsap.from(".content .img", {
    duration: 3,
    opacity: 0,
    x: 300,
    // stagger: 0.6,
    delay: 3,
  });
});
