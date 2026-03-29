let currentQiraatIndex = 0;
let currentAyahIndex = 0;

let qiraatData = [
    {
        name: "Qaloon an Nafi'",
        text: [
            "بسم الله الرحمن الرحيم",
            "الحمد لله رب العالمين",
            "الرحمن الرحيم",
            "ملك يوم الدين",
            "إياك نعبد وإياك نستعين",
            "اهدنا الصراط المستقيم",
            "صراط الذين أنعمت عليهم غير المغضوب عليهم ولا الضالين"
        ]
    },
    {
        name: "Qunbul an Ibn Kathir",
        text: [
            "بسم الله الرحمن الرحيم",
            "الحمد لله رب العالمين",
            "الرحمن الرحيم",
            "ملك يوم الدين",
            "إياك نعبد وإياك نستعين",
            "اهدنا السراط المستقيم",
            "سراط الذين أنعمت عليهمو غير المغضوب عليهمو ولا الضالين"
        ]
    }
];

// ---------------- DISPLAY AYAH ----------------
function displayAyah() {
    let ayahDiv = document.getElementById("ayah-display");

    let qiraat = qiraatData[currentQiraatIndex];

    if (!qiraat || !qiraat.text[currentAyahIndex]) {
        ayahDiv.innerHTML = "No Ayah Found";
        return;
    }

    ayahDiv.innerHTML = qiraat.text[currentAyahIndex];
}

// ---------------- QIRAAT BUTTONS ----------------
function displayQiraatButtons() {
    let container = document.getElementById("qiraat-selector");
    container.innerHTML = ""; // prevents duplicates

    qiraatData.forEach((qiraat, index) => {
        let btn = document.createElement("button");
        btn.textContent = qiraat.name;

        btn.addEventListener("click", function () {
            currentQiraatIndex = index;
            currentAyahIndex = 0;
            displayAyah();
        });

        container.appendChild(btn);
    });
}

// ---------------- MAIN INIT ----------------
document.addEventListener("DOMContentLoaded", function () {

    // NEXT button
    document.getElementById("Next").addEventListener("click", function () {
        let qiraat = qiraatData[currentQiraatIndex];

        if (currentAyahIndex < qiraat.text.length - 1) {
            currentAyahIndex++;
            displayAyah();
        }
    });

    // PREVIOUS button
    document.getElementById("Previous").addEventListener("click", function () {
        if (currentAyahIndex > 0) {
            currentAyahIndex--;
            displayAyah();
        }
    });

    // INITIAL LOAD
    displayQiraatButtons();
    displayAyah();

});