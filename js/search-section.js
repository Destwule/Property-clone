// app.js - Full JavaScript

const type = {
    title: "Type",
    name: "type",
    content: [
        "Shop", "Office Spaces", "Flats and Apartments", "Lands",
        "Semi Detached Bungalow", "Semi Detached Duplex",
        "Co-working Space", "Detached Bungalow", "Warehouse",
        "Shop In A Mall", "Self Contain", "Mini Flats", "Detached Duplex", "Houses",
        "Terraced Bungalow", "Commercial Properties", "Terraced Duplex"
    ]
};

const bedrooms = {
    title: "Bedrooms",
    name: "bedrooms",
    content: [],
};
for (let i = 1; i <= 10; i++) {
    bedrooms.content.push(`${i} bedroom`);
}

function format_num(num, billion = false) {
    let end = 0;
    num = num.toString();
    if (num.length == 5) {
        end = 2;
    } else if (num.length == 6) {
        end = 3;
    } else if (num.length <= 3) {
        let ending = "million";
        if (billion) {
            ending = "billion";
        }
        return `${num}${ending}`;
    }
    let new_num = `${num.slice(0, end)},${num.slice(end, num.length)}`;
    return new_num;
}

const hundred_bunch = [1, 2, 4, 6, 8, 10, 12, 14, 16, 18];
const min_price = {
    title: "Min. Price",
    name: "min",
    content: [],
};
hundred_bunch.forEach(num => {
    let base_price = 50000;
    let new_price = base_price * num;
    new_price = format_num(new_price);
    min_price.content.push(new_price);
});
const million_bunch = [1, 2, 3, 5, 10, 20, 30, 40, 50, 100];
million_bunch.forEach(num => {
    min_price.content.push(format_num(num));
});

const max_price = {
    title: "Max. Price",
    name: "max",
    content: [...min_price.content.slice(5, min_price.content.length)],
};
const billion_bunch = [1, 2, 5, 10];
billion_bunch.forEach(num => {
    max_price.content.push(format_num(num, true));
});
const buy = { title: "Buy", placeholder_text: "search sale" };
const rent = { title: "Rent", placeholder_text: "search for rent" };
const shortlet = { title: "Short Let", placeholder_text: "search shortlets" };
const land = { title: "Land", placeholder_text: "search land" };

const search_headings = [buy, rent, shortlet, land];
const search_tabs = document.querySelector(".search-tabs");
const search_bar = document.querySelector(".search");

// Object to store filter state for each tab
const tabStates = {
    Buy: { type: "", bedrooms: "", min: "", max: "" },
    Rent: { type: "", bedrooms: "", min: "", max: "" },
    "Short Let": { type: "", bedrooms: "", min: "", max: "" },
    Land: { type: "", bedrooms: "", min: "", max: "" }
};

let currentTab = "Buy"; // Default

// SEARCH TABS (unchanged)
search_headings.forEach((obj, index) => {
    const new_label = document.createElement("label");
    const new_input = document.createElement("input");
    new_label.textContent = obj.title;
    new_input.type = "radio";
    new_input.name = "property_type";
    new_input.id = obj.title;
    new_input.value = obj.title;
    if (index === 0) {
        new_input.checked = true;
        search_bar.placeholder = obj.placeholder_text;
    }
    new_label.appendChild(new_input);
    search_tabs.appendChild(new_label);
});

// SEARCH BAR PLACEHOLDER + TAB SWITCH LOGIC
document.querySelectorAll('input[name="property_type"]').forEach(radio => {
    radio.addEventListener("change", (event) => {
        const newTab = event.target.value;
        if (newTab !== currentTab) {
            // Save current tab state before switching
            saveCurrentTabState();

            // Update current tab
            currentTab = newTab;

            // Update placeholder
            const selected = search_headings.find(obj => obj.title === newTab);
            if (selected) {
                search_bar.placeholder = selected.placeholder_text;
            }

            // Restore state for the new tab
            restoreTabState(currentTab);
        }
    });
});

// Save current selections into tabStates
function saveCurrentTabState() {
    document.querySelectorAll('.custom-dropdown').forEach(dropdown => {
        const hiddenInput = dropdown.querySelector('input[type="hidden"]');
        const name = hiddenInput.name; // "type", "bedrooms", "min", "max"
        if (name) {
            tabStates[currentTab][name] = hiddenInput.value || "";
        }
    });
}

// Restore selections from tabStates
function restoreTabState(tab) {
    document.querySelectorAll('.custom-dropdown').forEach(dropdown => {
        const hiddenInput = dropdown.querySelector('input[type="hidden"]');
        const selectedText = dropdown.querySelector('.selected-text');
        const radios = dropdown.querySelectorAll('input[type="radio"]');
        const name = hiddenInput.name;

        const savedValue = tabStates[tab][name] || "";

        if (savedValue) {
            selectedText.textContent = savedValue;
            selectedText.classList.remove('placeholder');
            hiddenInput.value = savedValue;

            // Check the matching radio
            radios.forEach(radio => {
                radio.checked = (radio.value === savedValue);
            });
        } else {
            // Reset to default
            const originalTitle = dropdown.querySelector('.dropdown-btn').dataset.originalTitle;
            selectedText.textContent = originalTitle;
            selectedText.classList.add('placeholder');
            hiddenInput.value = "";
            radios.forEach(radio => radio.checked = false);
        }
    });
}

// CONSTRUCTION (with original title storage)
const search_footings = [type, bedrooms, min_price, max_price];
const search_footer = document.querySelector(".search-footer");

function construct_nav_footings(element, list) {
    list.forEach(obj => {
        const main_div = document.createElement("div");
        main_div.classList.add("custom-dropdown");

        const hidden_input = document.createElement("input");
        hidden_input.type = "hidden";
        hidden_input.name = obj.name;
        main_div.appendChild(hidden_input);

        const dropdown_btn = document.createElement("div");
        dropdown_btn.classList.add("dropdown-btn");
        dropdown_btn.dataset.originalTitle = obj.title; // For reset

        const span_text = document.createElement("span");
        span_text.classList.add("selected-text", "placeholder");
        span_text.textContent = obj.title;
        dropdown_btn.appendChild(span_text);
        main_div.appendChild(dropdown_btn);

        const inner_div = document.createElement("div");
        inner_div.classList.add("dropdown-list");

        obj.content.forEach(element => {
            const dropdown_option = document.createElement("div");
            dropdown_option.classList.add("dropdown_option");

            const label = document.createElement("label");
            const radio = document.createElement("input");

            label.textContent = element;
            radio.type = "radio";
            radio.value = element;
            radio.name = obj.name + "_radio";
            radio.style.display = "none"; // change if you want visible circles

            label.appendChild(radio);
            dropdown_option.appendChild(label);
            inner_div.appendChild(dropdown_option);
        });

        main_div.appendChild(inner_div);
        element.appendChild(main_div);
    });
}

construct_nav_footings(search_footer, search_footings);

// ===============================================
// CUSTOM DROPDOWN FUNCTIONALITY
// ===============================================

document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll('.custom-dropdown');

    dropdowns.forEach(dropdown => {
        const btn = dropdown.querySelector('.dropdown-btn');
        const list = dropdown.querySelector('.dropdown-list');
        const selectedText = dropdown.querySelector('.selected-text');
        const hiddenInput = dropdown.querySelector('input[type="hidden"]');
        const radios = dropdown.querySelectorAll('input[type="radio"]');

        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            document.querySelectorAll('.dropdown-list.show').forEach(openList => {
                if (openList !== list) openList.classList.remove('show');
            });
            list.classList.toggle('show');
        });

        radios.forEach(radio => {
            radio.addEventListener('change', () => {
                if (radio.checked) {
                    selectedText.textContent = radio.value;
                    selectedText.classList.remove('placeholder');
                    hiddenInput.value = radio.value;
                    list.classList.remove('show');

                    // Save immediately when user selects something
                    saveCurrentTabState();
                }
            });
        });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
        let inside = false;
        dropdowns.forEach(d => { if (d.contains(e.target)) inside = true; });
        if (!inside) {
            document.querySelectorAll('.dropdown-list.show').forEach(l => l.classList.remove('show'));
        }
    });

    // Form submission
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const filters = Object.fromEntries(formData);
            console.log(`Searching ${currentTab} with:`, filters);
            alert(`Searching ${currentTab}:\n${JSON.stringify(filters, null, 2)}`);
        });
    }
});


const mobileSearchView = window.matchMedia("(max-width: 766px)").matches;
const searchSection = document.querySelector(".search-section");
const searchbtn = document.querySelector(".search-btn");
if (mobileSearchView) {
    searchSection.appendChild(searchbtn);
    searchbtn.classList.add("mobile-search-btn")
}