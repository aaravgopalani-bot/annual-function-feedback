
// =====================================
// 1. STAR RATING FUNCTIONALITY
// =====================================

const ratingGroups = document.querySelectorAll(".stars");

ratingGroups.forEach((group) => {
    const stars = group.querySelectorAll("span");

    stars.forEach((star, index) => {
        star.addEventListener("click", () => {

            group.dataset.selected = index + 1;

            stars.forEach((s, i) => {
                if (i <= index) {
                    s.textContent = "★";
                    s.style.color = "gold";
                } else {
                    s.textContent = "☆";
                    s.style.color = "#B8860B";
                }
            });

        });
    });
});


// =====================================
// 2. RESET BUTTON
// =====================================

const form = document.querySelector("form");

form.addEventListener("reset", () => {

    document.querySelectorAll(".stars").forEach((group) => {
        delete group.dataset.selected;

        group.querySelectorAll("span").forEach((star) => {
            star.textContent = "☆";
            star.style.color = "#B8860B";
        });
    });

});


// =====================================
// 3. SUBMIT VALIDATION
// =====================================

form.addEventListener("submit", (event) => {

    const ratingGroups = document.querySelectorAll(".stars");
    let allRated = true;

    ratingGroups.forEach((group) => {
        if (!group.dataset.selected) {
            allRated = false;
        }
    });

    if (!allRated) {
        event.preventDefault();
        alert("Please rate all four categories before submitting!");
        return;
    }

    const liked = document.getElementById("liked").value.trim();
    const improvement = document.getElementById("improvement").value.trim();

    if (liked === "" || improvement === "") {
        event.preventDefault();
        alert("Please complete both review questions!");
        return;
    }

});


// =====================================
// 4. DIVISION DROPDOWN
// =====================================

const standard = document.getElementById("Standard");
const division = document.getElementById("Division");

standard.addEventListener("change", function () {

    division.innerHTML =
        '<option value="" disabled selected>Select Division</option>';

    let divisions = [];

    // Nursery, LKG, UKG, Jr. KG, Sr. KG and Classes 1–5

    if (
        standard.value === "Nursery" ||
        standard.value === "LKG" ||
        standard.value === "UKG" ||
        standard.value === "Jr. KG" ||
        standard.value === "Sr. KG" ||
        (Number(standard.value) >= 1 &&
         Number(standard.value) <= 5)
    ) {
        divisions = ["Star", "Sun", "Moon", "Venus"];
    }

    // Classes 6–10

    else if (
        Number(standard.value) >= 6 &&
        Number(standard.value) <= 10
    ) {
        divisions = ["A", "B", "C", "D", "E"];
    }

    // Classes 11 and 12

    else if (
        standard.value === "11" ||
        standard.value === "12"
    ) {
        divisions = [
            "Commerce A",
            "Commerce B",
            "Humanities",
            "Science"
        ];
    }

    divisions.forEach(function (item) {

        let option = document.createElement("option");
        option.value = item;
        option.textContent = item;

        division.appendChild(option);

    });

});
