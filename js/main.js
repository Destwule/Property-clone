import { build_navbar } from "./navbar.js";

build_navbar();

const headline_list = document.querySelectorAll(".headline");

headline_list.forEach(element => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    element.appendChild(wrapper);
})