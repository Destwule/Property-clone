const area = {
    name: "sample",
    areas: ["area1", "area1", "area1", "area1"]
}

const areas = document.querySelector(".selection-by-area .areas");

for (let i = 0; i < 3; i++) {
    const area_card = document.createElement("div");
    area_card.classList.add("area-card");
}