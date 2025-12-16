// FIRST LIST BEGINS HERE
const buy = {
    title: "Buy",
    content: [
        "Flats & Apartments For Sale",
        "House For Sale",
        "Lands For Sale",
        "Commercial Property For Sale",
        "All Property For Sale",
    ],
};

const rent = {
    title: "Rent",
    content: [
        "Flats & Apartments For Rent",
        "House For Rent",
        "Office Space For Rent",
        "Land Lease"
    ],
};

const new_project = {
    title: "New Project",
    content: [
        "New Developments in Lagos Mainland",
        "New Developments in Lagos Island",
        "All Developments in Nigeria",
    ],
};

// SECOND LIST BEGINS HERE
const shortlet = {
    title: "Shortlet",
    content: [
        "Short Let in Lekki & Environs",
        "Short Let in Lagos",
        "Short Let in Abuja",
        "All Short Lets"
    ]
}

const services = {
    title: "Services",
    content: [
        "Property Verification",
    ]
}

const agents = {
    title: "Agents",
    content: [
        "Agents Pricing",
        "Real Estate Agents in Lagos",
        "Real Estate Agents in Abuja",
        "Real Estate Agents in Rivers",
        "All Real Estate Agents"
    ]
}

const area_guide = {
    title: "Area Guide",
    content: [
        "Explore Lagos",
        "Explore Abuja",
        "Explore Rivers",
        "Explore All Area Guides",
    ]
}

const insights = {
    title: "Insights",
    content: [
        "Nigeria Property Index",
        "Nigeria Search Trends",
        "Real Estate Report",
    ]
}

const blog = {
    title: "Blogs",
}






const first_list = [buy, rent, new_project];
const second_list = [shortlet, services, agents, area_guide, insights, blog];
const last_items = [buy, rent, new_project, shortlet, agents];

const logo = document.querySelector(".logo");
const first = document.querySelector(".first");
const second = document.querySelector(".second");

logo.addEventListener("click", () => {
    const url = logo.getAttribute("data-url");
    window.location.href = url;
});


export function construct_dropdown(element_tag, list){
    list.forEach((obj) => {
        const new_div = document.createElement("div");
        const new_anchor = document.createElement("a");
        
        new_div.classList.add("dropdown-elements");
        new_anchor.textContent = obj.title;
        new_div.appendChild(new_anchor);
        

        if (obj.content) {
            const new_ul = document.createElement("ul");
            new_ul.classList.add("dropdown-items");

            obj.content.forEach((element) => {
                const new_li = document.createElement("li");
                const new_anchor_2 = document.createElement("a");
                new_anchor_2.textContent = element;
                new_li.appendChild(new_anchor_2);
                new_ul.appendChild(new_li);
            });
            last_items.forEach(elem => {
                if (elem.title === obj.title) {
                    new_ul.lastElementChild.classList.add("top-Border");
                    new_ul.lastElementChild.style.position = "relative";
                }
            })
            new_div.appendChild(new_ul)
        }
        element_tag.appendChild(new_div);
    });
}

export function build_navbar() {
    construct_dropdown(first, first_list);
    construct_dropdown(second, second_list);
}

