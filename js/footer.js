const first_part = [
    {
    title: "Properties For Sale",
    content: [
        "Commercial Properties for sale",
        "Flat & Apartments for sale",
        "Houses for sale",
        "Block Of Flats for sale",
        "Detached Duplex for sale",
        "Semi Detached Duplex for sale",
        "Terraced Duplex for sale",
    ]
    },
    {
    title: "Properties For Rent",
    content: [
        "Commercial Properties for rent",
        "Flat & Apartments for rent",
        "Mini Flats for rent",
        "Self Contain for rent",
        "Shared Apartments for rent",
        "Studio Apartments for rent",
        "Houses for rent",
    ]
    },
    {
    title: "Popular Projects",
    content: [
        "Orange Residence",
        "Admiralty Waterfront Apartments",
        "The Venice Estate, Sangotedo",
        "Santo Domingo Residence",
        "The Goldmark Residence",
        "Obudu Villas",
        "7 Centrale Residences",
    ]
    },
    {
    title: "Short Lets Destination",
    content: [
        "Short Lets in Abuja",
        "Short Lets in Ikeja",
        "Short Lets in Ikoyi",
        "Short Lets in Lekki",
        "Short Lets in Victoria Island",
        "Short Lets in Surulere",
    ]
    },
    {
    title: "Agents",
    content: [
        "Real Estate Agents in Lagos",
        "Real Estate Agents in Abuja",
        "Real Estate Agents in Oyo",
        "Real Estate Agents in Ogun",
        "Real Estate Agents in Rivers",
    ]
    },
    {
    title: "Popular Estates",
    content: [
        "Parkview Estate, Ikoyi, Lagos",
        "Orchid Estate, Lekki",
        "Mojisola Onikoyi Estate, Ikoyi",
        "Shonibare Estate, Maryland",
        "Magodo Gra Phase 2, Kosofe Ikosi",
    ]
    },
    {
    title: "Tools & Resources",
    content: [
        "Advertise with Propertypro",
        "Neighbourhood Guide",
        "MoveMe",
        "Prestige Magazine",
        "Property Market Report",
    ]
    },
    {
    title: "Features",
    content: [
        "Serviced Properties for rent",
        "Furnished Properties for rent",
        "Newly Built Properties for rent",
        "Cheap Properties for rent",
        "Luxury Properties for rent",
        "Serviced Properties for sale",
        "Furnished Properties for sale",
        "Newly Built Properties for sale",
        "Cheap Properties for sale",
        "Luxury Properties for sale",
        "Property for Sale in Estate",
        "Property for Rent in Estate",
    ]
    },
]

const last_part = [
    {
        title: "Company",
        content: [
            "About Us",
            "Blog",
            "Terms And Conditions",
            "Privacy Policy",
            "PropertyPro Kenya",
            "PropertyPro Zimbabwe",
            "PropertyPro Uganda",
            "PropertyPro Africa",
        ]
    },
    {
        title: "Discover",
        content: [
            "Agent Pricing",
            "Developer Page",
            "Property Sold",
            "Property Rented",
            "Site Map",
        ]
    }
]

function construct_footer_elems(element, obj) {
    const footer_element = document.createElement("div");
    footer_element.classList.add("footer-element");
    element.appendChild(footer_element)

    const footer_heading = document.createElement("p");
    footer_heading.classList.add("footer-heading");
    footer_heading.textContent = obj.title;
    footer_element.appendChild(footer_heading);

    const list_container = document.createElement("div");
    list_container.classList.add("list-container");
    footer_element.appendChild(list_container);

    obj.content.forEach(item => {
        const list_item = document.createElement("a");
        list_item.classList.add("list-item");
        list_item.textContent = item;
        list_container.appendChild(list_item);
    })
}

function build_footer() {
    const footer_first_part = document.querySelector(".footer .first-part");
    const footer_last_part = document.querySelector(".footer .last-part .section-b");

    first_part.forEach(obj => construct_footer_elems(footer_first_part, obj));
    last_part.forEach(obj => construct_footer_elems(footer_last_part, obj));
}

build_footer();

const copyright = document.querySelector(".copyright");
const currentYear = new Date().getFullYear();
copyright.innerHTML = `PropertyPro \&copy; - ${currentYear}`;