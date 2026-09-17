/* =========================================
   PROJECT DATA
========================================= */

const projects = [

    {
        number: "PROJECT 01",

        title: "MyTugas",

        image: "MYTUGAS.png",

        description:
            "MyTugas adalah konsep aplikasi yang dibuat untuk membantu siswa mengingat, mengatur, dan menyelesaikan tugas sekolah. Aplikasi ini memiliki konsep kalender tugas, pengingat, dan pengelompokan berdasarkan mata pelajaran.",

        tech: [
            "Kotlin",
            "XML",
            "MySQL",
            "SQLite",
            "UI/UX"
        ]
    },


    {
        number: "PROJECT 02",

        title: "Mitigasi Bencana",

        image: "kebakaran.jpeg",

        description:
            "Project alat mitigasi bencana merupakan prototype perangkat yang dibuat untuk membantu memberikan informasi atau peringatan ketika terdapat kondisi tertentu yang berpotensi membahayakan.",

        tech: [
            "Arduino Uno",
            "Sensor",
            "C++",
            "Elektronika"
        ]
    },


    {
        number: "PROJECT 03",

        title: "Website",

        image: "website.png",

        description:
            "Project website merupakan salah satu project yang dibuat untuk mengembangkan kemampuan dalam HTML, CSS, JavaScript dan desain tampilan website.",

        tech: [
            "HTML",
            "CSS",
            "JavaScript",
            "UI/UX"
        ]
    },


    {
        number: "PROJECT 04",

        title: "Alat Otomatis",

        image: "penyiraman.jpeg",

        description:
            "Project alat otomatis dibuat menggunakan mikrokontroler dan sensor. Tujuannya adalah membuat sebuah sistem yang dapat bekerja secara otomatis berdasarkan kondisi yang terdeteksi.",

        tech: [
            "Arduino",
            "Sensor",
            "C++",
            "Hardware"
        ]
    }

];


/* =========================================
   PROJECT MODAL
========================================= */

function openProject(index) {

    const project = projects[index];

    document.getElementById("modalImage").src =
        project.image;

    document.getElementById("modalNumber").textContent =
        project.number;

    document.getElementById("modalTitle").textContent =
        project.title;

    document.getElementById("modalDescription").textContent =
        project.description;


    const techContainer =
        document.getElementById("modalTech");

    techContainer.innerHTML = "";


    project.tech.forEach(function(technology) {

        const tag = document.createElement("span");

        tag.textContent = technology;

        techContainer.appendChild(tag);

    });


    document
        .getElementById("projectModal")
        .classList.add("active");

    document.body.style.overflow = "hidden";
}


/* =========================================
   CLOSE PROJECT
========================================= */

function closeProject() {

    document
        .getElementById("projectModal")
        .classList.remove("active");

    document.body.style.overflow = "auto";
}


/* =========================================
   CLOSE MODAL WHEN CLICK OUTSIDE
========================================= */

document
    .getElementById("projectModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closeProject();

        }

    });


/* =========================================
   ESC TO CLOSE MODAL
========================================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeProject();

    }

});


/* =========================================
   MINI GAME
========================================= */

let score = 0;

let time = 20;

let gameRunning = false;

let timer;


/* ELEMENT */

const gameArea =
    document.getElementById("gameArea");

const gameDot =
    document.getElementById("gameDot");

const scoreText =
    document.getElementById("score");

const timeText =
    document.getElementById("time");

const gameStart =
    document.getElementById("gameStart");


/* =========================================
   START GAME
========================================= */

function startGame() {

    if (gameRunning) {
        return;
    }


    score = 0;

    time = 20;

    gameRunning = true;


    scoreText.textContent = score;

    timeText.textContent = time;

    gameStart.style.display = "none";

    gameDot.style.display = "block";


    moveDot();


    timer = setInterval(function() {

        time--;

        timeText.textContent = time;


        if (time <= 0) {

            endGame();

        }

    }, 1000);

}


/* =========================================
   MOVE DOT
========================================= */

function moveDot() {

    const areaWidth =
        gameArea.clientWidth;

    const areaHeight =
        gameArea.clientHeight;


    const dotSize = 35;


    const randomX =
        Math.random() *
        (areaWidth - dotSize);


    const randomY =
        Math.random() *
        (areaHeight - dotSize);


    gameDot.style.left =
        randomX + "px";

    gameDot.style.top =
        randomY + "px";

}


/* =========================================
   CLICK DOT
========================================= */

gameDot.addEventListener("click", function() {

    if (!gameRunning) {
        return;
    }


    score++;

    scoreText.textContent = score;


    moveDot();

});


/* =========================================
   END GAME
========================================= */

function endGame() {

    clearInterval(timer);

    gameRunning = false;

    gameDot.style.display = "none";

    gameStart.style.display = "flex";

    gameStart.textContent =
        "Game selesai! Score kamu: " + score;

}


/* =========================================
   CONTACT MESSAGE
========================================= */

function showMessage() {

    alert(
        "Silakan ganti link WhatsApp kamu di bagian index.html."
    );

}


/* =========================================
   SCROLL ANIMATION
========================================= */

const observer =
    new IntersectionObserver(

        function(entries) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


document
    .querySelectorAll(
        ".project-card, .info-card, .skill-item, .service-card"
    )
    .forEach(function(element) {

        element.classList.add("hidden");

        observer.observe(element);

    });