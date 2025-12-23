import { build_navbar } from "./navbar.js";

build_navbar();

const headline_list = document.querySelectorAll(".headline");

headline_list.forEach(element => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    element.appendChild(wrapper);
})

// RESPONSIVE SECTION
const dropdown_headings = document.querySelectorAll(".dropdown-heading");
const nav_section = document.querySelector(".nav-section");
const hamburger = document.querySelector(".hamburger");
const close_icon = document.querySelector(".close-icon");
const tabletNavView = window.matchMedia("(max-width: 995px)").matches;

if (tabletNavView) {
    hamburger.addEventListener("click", () => {
        nav_section.classList.toggle('sidebar');
    })
    close_icon.addEventListener("click", () => {
        nav_section.classList.toggle('sidebar')
    })

    dropdown_headings.forEach(heading => {
        heading.addEventListener("click", () => {
            const currentDropdown = heading.parentElement.lastElementChild;

            dropdown_headings.forEach(h => {
                if (h !== heading) {
                    // this was only way to get it to run
                    h.parentElement.lastElementChild.classList.remove("block");
                }
            });

            currentDropdown.classList.toggle("block");
        });
    })
}