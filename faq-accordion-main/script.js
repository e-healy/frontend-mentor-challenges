const accordionItems = document.getElementsByClassName("accordion-item");

for (let i = 0; i < accordionItems.length; i++) {
    const accordionBtn = accordionItems[i].getElementsByClassName("accordion-btn")[0];
    const accordionQ = accordionItems[i].getElementsByClassName("accordion-question")[0];
    const accordionA = accordionItems[i].getElementsByClassName("accordion-answer")[0];
    accordionA.style.display = "none";

    accordionBtn.addEventListener("click", function () {
        if (accordionA.style.display === "none") {
            accordionA.style.display = "block";
            accordionItems[i].classList.add("open");
        } else {
            accordionA.style.display = "none";
            accordionItems[i].classList.remove("open");
        };
    })
}
