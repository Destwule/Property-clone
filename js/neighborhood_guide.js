const neighbothood_guide = [
    {
        title: "Abuja",
        first_text: ` 9° 4' 35.3244" N `,
        last_text: ` 7° 23' 54.8664" E `,
        image: "img/abuja.png",
    },
    {
        title: "Lagos",
        first_text: ` 6° 27' 4.104" N `,
        last_text: ` 3° 23' 18.24" E `,
        image: "img/lagos.png",

    },
    {
        title: "Port Harcourt",
        first_text: ` 4° 46' 17.364" N `,
        last_text: ` 7° 29' 1.776" E `,
        image: "img/port_harcourt.png",
    },
    {
        title: "Delta",
        first_text: ` 6° 11' 7.18" N `,
        last_text: ` 6° 43' 46.95" E `,
        image: "img/delta.png",
    },
    {
        title: "Ibadan",
        first_text: ` 7° 20' 55.329" N `,
        last_text: ` 3° 52' 45.444" E `,
        image: "img/ibadan.png",
    }
]

const guide_section = document.querySelector(".places");

function build_neighborhood_guide(element, list) {
    list.forEach(obj => {
        const neighborhood_card = document.createElement("div");
        neighborhood_card.classList.add("card");
        neighborhood_card.classList.add(obj.title.toLowerCase().replace(" ", "-"));

        const image_container = document.createElement("div");
        image_container.classList.add("image-container")
        
        const neighborhood_image = document.createElement("img");
        neighborhood_image.src = obj.image;
        image_container.appendChild(neighborhood_image);
        neighborhood_card.appendChild(image_container);

        const info_section = document.createElement("div");
        info_section.classList.add("info-section");

        const neighborhood_name = document.createElement("h3");
        neighborhood_name.textContent = obj.title;
        info_section.appendChild(neighborhood_name);

        const neighborhood_location = document.createElement("div");
        neighborhood_location.classList.add("location");
        neighborhood_location.innerHTML = `
        ${obj.first_text}
        <br>
        ${obj.last_text}
        `;

        info_section.appendChild(neighborhood_location);
        neighborhood_card.appendChild(info_section)
        element.appendChild(neighborhood_card);
    });
}

build_neighborhood_guide(guide_section, neighbothood_guide);