
 // =====================================
 // 1. STAR RATING FUNCTIONALITY
 // =====================================

const ratingGroups = document.querySelectorAll(".stars");

const ratingMessages = {
    1: "Not Good",
    2: "Needs Improvement",
    3: "Average",
    4: "Good",
    5: "Excellent! Thank you!"
};

ratingGroups.forEach((group) => {

    const stars = group.querySelectorAll("span");

    // Create feedback bubble
    const feedback = document.createElement("div");
    feedback.className = "rating-feedback";
    feedback.setAttribute("aria-live", "polite");

    group.insertAdjacentElement("afterend", feedback);

    stars.forEach((star, index) => {

        star.addEventListener("click", () => {

            const selectedRating = index + 1;

            group.dataset.selected = selectedRating;

            // Update star appearance
            stars.forEach((s, i) => {
                if (i <= index) {
                    s.textContent = "★";
                    s.style.color = "gold";
                } else {
                    s.textContent = "☆";
                    s.style.color = "#B8860B";
                }
            });

            // Display feedback
            feedback.textContent =
                selectedRating + " Stars — " +
                ratingMessages[selectedRating];

            feedback.classList.add("show");

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
    const selectedStandard = standard.value;
    const classNumber = Number(selectedStandard);

    // Nursery to Grade 3
    if (
        ["Nursery", "LKG", "UKG", "Jr. KG", "Sr. KG"].includes(selectedStandard) ||
        (classNumber >= 1 && classNumber <= 3)
    ) {
        divisions = [
            "Star",
            "Sun",
            "Moon",
            "Venus",
            "Ruby (CIE)",
            "Emerald (CIE)"
        ];
    }

    // Grade 4
    else if (classNumber === 4) {
        divisions = [
            "Star",
            "Sun",
            "Moon",
            "Venus"
        ];
    }

    // Grade 5
    else if (classNumber === 5) {
        divisions = [
            "Star",
            "Sun",
            "Moon",
            "Venus",
            "Ruby (CIE)",
            "Emerald (CIE)"
        ];
    }

    // Grades 6 to 10
    else if (classNumber >= 6 && classNumber <= 10) {
        divisions = [
            "A", "B", "C", "D", "E",
            "CIE"
        ];
    }

    // Grades 11 and 12
    else if (classNumber === 11 || classNumber === 12) {
        divisions = [
            "Commerce A",
            "Commerce B",
            "Humanities",
            "Science",
            "CIE"
        ];
    }

    divisions.forEach(function (item) {
        const option = document.createElement("option");
        option.value = item;
        option.textContent = item;
        division.appendChild(option);
    });

});
