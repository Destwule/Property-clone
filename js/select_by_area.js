const area = {
    name: "sample",
    areas: ["area1", "area1", "area1", "area1"]
}

const states = [
    "Ondo State",
    "Ogun State",
    "Kwara State",
    "Oyo State",
    "Imo State",
    "Plateau State",
    "Enugu State"
]

const other_states = [
    "Niger State",
    "Delta State",
    "Akwa Ibom State",
    "Edo State",
    "Anambra State",
    "Osun State",
    "Abia State",
    "Kano State",
]

const areas = document.querySelector(".selection-by-area .areas");

for (let i = 0; i < 3; i++) {
    const area_section = document.createElement("div");
    area_section.classList.add("area-section");

    for (let j = 0; j < 3; j++) {
        const area_card = document.createElement("div");
        area_card.classList.add("area-card");
        area_section.append(area_card);
    
        const an_area = document.createElement("div");
        an_area.classList.add("an-area");
        area_card.appendChild(an_area);
    
        const area_title = document.createElement("h4");
        area_title.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 384 408"><path fill="currentColor" d="M256 195h128v213H0V109h128V67l64-64l64 64v128zM85 365v-42H43v42h42zm0-85v-43H43v43h42zm0-85v-43H43v43h42zm128 170v-42h-42v42h42zm0-85v-43h-42v43h42zm0-85v-43h-42v43h42zm0-86V67h-42v42h42zm128 256v-42h-42v42h42zm0-85v-43h-42v43h42z"/></svg> ${area.name}`;
        an_area.appendChild(area_title);
    
        const area_dropdown = document.createElement("div");
        area_dropdown.classList.add("area-dropdown");
        
        const area_click = document.createElement("a");
        area_click.classList.add("area-click");
        area_click.textContent = `View Location in ${area.name}`;
        area_dropdown.appendChild(area_click)
        
        const dropdown = document.createElement("div");
        dropdown.classList.add("dropdown");
        area_dropdown.appendChild(dropdown);

        area.areas.forEach(area_name => {
            const area_option = document.createElement("a");
            area_option.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 384 408"><path fill="currentColor" d="M256 195h128v213H0V109h128V67l64-64l64 64v128zM85 365v-42H43v42h42zm0-85v-43H43v43h42zm0-85v-43H43v43h42zm128 170v-42h-42v42h42zm0-85v-43h-42v43h42zm0-85v-43h-42v43h42zm0-86V67h-42v42h42zm128 256v-42h-42v42h42zm0-85v-43h-42v43h42z"/></svg> ${area_name}`;
            dropdown.appendChild(area_option);
            an_area.appendChild(area_dropdown);
        })
    }
    areas.appendChild(area_section)
}

const areas_click = document.querySelectorAll(".area-click");
areas_click.forEach(area_click => {
    area_click.addEventListener("click", (event) => {
        event.target.classList.toggle("rotate-after");
        const sibling = event.target.nextSibling;
        
        sibling.classList.toggle("show");
    })
})

const aside_content = document.querySelector(".aside .content");
states.forEach(area_name => {
    const area_tag = document.createElement("a");
    area_tag.textContent = area_name;

    aside_content.appendChild(area_tag);
})

const other_aside_content = document.querySelector(".aside .dropdown");
other_states.forEach(area_name => {
    const area_tag = document.createElement("a");
    area_tag.textContent = area_name;

    other_aside_content.appendChild(area_tag);
})

const aside_area_click = document.querySelector(".footing .area-click");
aside_area_click.addEventListener("click", (event) => {
    const dropdown = document.querySelector(".footing .dropdown");
    dropdown.classList.toggle("show");
}) 