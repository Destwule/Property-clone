const sponsors_section = document.querySelector(".sponsors")

for (let i=1; i <= 4; i++)  {
    const sponsor = document.createElement("div");
    sponsor.classList.add("sponsor");
    sponsor.textContent = `Sponsor ${i}`;

    sponsors_section.appendChild(sponsor);
}