import { formatter } from "./featured_homes.js";

const top_gainers = [
    {
        name: "Property A",
        performance: "152%",
        amount  : 150000000,
    },
    {
        name: "Property B",
        performance: "55%",
        amount  : 95000000,
    },
    {
        name: "Property C",
        performance: "300.2%",
        amount  : 150000000,
    },
    {
        name: "Property D",
        performance: "15614%",
        amount  : 5550000000,
    },
]

const top_losers = [
    {
        name: "Property L",
        performance: "-99.67%",
        amount  : 35000000,
    },
    {
        name: "Property M",
        performance: "-80%",
        amount  : 13000000,
    },
    {
        name: "Property N",
        performance: "-95.52%",
        amount  : 42000000,
    },
    {
        name: "Property O",
        performance: "-73.17%",
        amount  : 550000000,
    },
]

const gainers_elem = document.querySelector(".gainers");
const losers_elem = document.querySelector(".losers");

function make_table(element, list, heading_suffix) {
    const table_head = document.createElement("div");
    table_head.classList.add("table-head");
    
    const table_head_text = document.createElement("div");
    table_head_text.classList.add("head");

    const table_head_logo = document.createElement("div");
    table_head_logo.innerHTML = `<svg viewBox="0 0 18.188 11.126" width="1em" height="1em" color="#fff"> 
            <path d="m18.186.506-.362 3.491a.462.462 0 0 1-.781.278l-.856-.856-5.392 5.392a.925.925 0 0 1-1.273 0l-2.97-2.97-5.02 5.021a.9.9 0 0 1-1.27-1.273l5.653-5.653a.921.921 0 0 1 1.27 0l2.973 2.97 4.758-4.758-1-1a.459.459 0 0 1 .275-.781l3.487-.364a.458.458 0 0 1 .508.503z" fill="#fff"></path> 
           </svg>
           `;
    
    table_head_logo.classList.add("icon");
    table_head.appendChild(table_head_logo);

    const head_title = document.createElement("p");
    head_title.classList.add("title");
    head_title.textContent = `Top ${heading_suffix}`;
    table_head_text.appendChild(head_title);

    const head_date = document.createElement("p");
    head_date.classList.add("date");
    head_date.textContent = "12/2025";
    table_head_text.appendChild(head_date);

    table_head.appendChild(table_head_text);
    element.appendChild(table_head);
    list.forEach(obj => {
        const table_row = document.createElement("div");
        table_row.classList.add("table-row");
        
        Object.keys(obj).forEach(key => {
            if (key === "amount") {
                obj[key] = formatter.format(obj[key]);
            }
            const row_item = document.createElement("div");
            row_item.classList.add("row-item");
            row_item.classList.add(key);
            
            if (key === "performance") {
                const sign = obj[key].includes("-") ? "▼" : "▲";
                row_item.innerHTML = `${obj[key]} <span class="sign">${sign}</span>`;
            } else {
                row_item.textContent = obj[key];
            }

            table_row.appendChild(row_item);

            const click_here = document.createElement("div");
            click_here.classList.add("click-here");
            click_here.setAttribute('data-url', "#");
            table_row.appendChild(click_here);
        })
        element.appendChild(table_row);
        
    })
}

function build_market_overview() {
    make_table(gainers_elem, top_gainers, "Gainers");
    make_table(losers_elem, top_losers, "Losers");
}

build_market_overview();

const table_rows = document.querySelectorAll(".click-here");
table_rows.forEach(element => {
    element.addEventListener("click", () => {
        const url = element.getAttribute("data-url");
        console.log(`Navigating to ${url}`);
        // window.location.href = url;
    })
})