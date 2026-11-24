const stars = document.querySelectorAll(".star-rating span");

stars.forEach((star, index) => {
    star.addEventListener("click", () => {

        stars.forEach((s, i) => {

            if (i <= index) {
                s.textContent = "★";
                s.style.color = "gold";
            } else {
                s.textContent = "☆";
                s.style.color = "lightgray";
            }

        });

    });
});
const ratingGroups = document.querySelectorAll(".stars");

ratingGroups.forEach((group) => {
    const stars = group.querySelectorAll("span");

    stars.forEach((star, index) => {
        star.addEventListener("click", () => {

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
// Reset all star ratings when Reset button is clicked
const form = document.querySelector("form");

form.addEventListener("reset", () => {
    document.querySelectorAll(".stars span").forEach((star) => {
        star.textContent = "☆";
        star.style.color = "#B8860B";
    });
});
form.addEventListener("submit", (event) => {

    const ratingGroups = document.querySelectorAll(".stars");
    let allRated = true;

    ratingGroups.forEach((group) => {
        const selectedStar = group.querySelector("span[style*='gold']");

        if (!selectedStar) {
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
    }

});
const standard = document.getElementById("Standard");
const division = document.getElementById("Division");

standard.addEventListener("change", function () {

    division.innerHTML = '<option value="" disabled selected>Select Division</option>';

    let divisions = [];

    if (standard.value >= 1 && standard.value <= 5) {
        divisions = ["Sun", "Moon", "Star"];
    }
    else if (standard.value >= 6 && standard.value <= 10) {
        divisions = ["A", "B", "C", "D", "E"];
    }
    else if (standard.value == 11 || standard.value == 12) {
    divisions = ["Commerce A", "Commerce B", "Science", "Humanities"];
}
    divisions.forEach(function (item) {
        let option = document.createElement("option");
        option.value = item;
        option.textContent = item;
        division.appendChild(option);
    });

});