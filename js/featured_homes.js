const homes = [
    {
        name: "house 1",
        img_url: "img/home_1.jpg",
        price: 270000000,
        location: "Lagos lekki phase 1"
    },
    {
        name: "house 2",
        img_url: "img/home_2.jpg",
        price: 679000000,
        location: "Nasarawa Egon"
    },
    {
        name: "house 3",
        img_url: "img/home_3.jpg",
        price: 70000000,
        location: "Abuja London Estate"
    }
]

const formatter = new Intl.NumberFormat("en-NG", {
    style: 'currency',
    currency: 'NGN',
});


const homes_section = document.querySelectorAll(".homes");

function populate_homes(element, list) {
    list.forEach(obj => {
        const home = document.createElement("div");
        home.classList.add("home");
        const info_section = document.createElement("div");
        info_section.classList.add("info-section")
        
        const home_img = document.createElement("img");
        home_img.classList.add("home-img");
        home_img.src = obj.img_url;
        home.appendChild(home_img)
        
        const home_name = document.createElement("p");
        home_name.classList.add("home-name");
        home_name.textContent = obj.name;
        info_section.appendChild(home_name);
        
        const home_price = document.createElement("p");
        home_price.classList.add("home-price");
        home_price.textContent = formatter.format(obj.price);
        info_section.appendChild(home_price);

        const home_description = document.createElement("p");
        home_description.classList.add("home-description");
        home_description.textContent = obj.location;
        info_section.appendChild(home_description);

        home.appendChild(info_section)
        element.append(home);
    })
}

homes_section.forEach(element => populate_homes(element, homes));