const skoContainer = document.getElementById("sko-container");

// Hardkodet skodata
const skoData = [
  {
    tittel: "Adidas Stan Smith",
    merke: "Adidas",
    pris: 999,
    bilde: "./img/addidas-stan-smith.jpg",
  },
  {
    tittel: "Nike Air Max 90",
    merke: "Nike",
    pris: 1299,
    bilde: "./img/nike-air-max-90.jpg",
  },
  {
    tittel: "Vans Old Skool",
    merke: "Vans",
    pris: 799,
    bilde: "./img/vans old skool.jpg",
  },
];

// Vis skoprodukter på siden
function visSko() {
  skoData.forEach((sko) => {
    const skoElement = document.createElement("div");
    skoElement.classList.add("sko");

    const bildeElement = document.createElement("img");
    bildeElement.src = sko.bilde;
    skoElement.appendChild(bildeElement);

    const tittelElement = document.createElement("h3");
    tittelElement.innerText = sko.tittel;
    skoElement.appendChild(tittelElement);

    const merkeElement = document.createElement("p");
    merkeElement.innerText = sko.merke;
    skoElement.appendChild(merkeElement);

    const prisElement = document.createElement("p");
    prisElement.innerText = `Pris: ${sko.pris} kr`;
    skoElement.appendChild(prisElement);

    const kjopKnapp = document.createElement("button");
    kjopKnapp.innerText = "Kjøp nå";
    skoElement.appendChild(kjopKnapp);

    skoContainer.appendChild(skoElement);
  });
}

visSko();

