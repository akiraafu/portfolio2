// select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// set initial state of menu
let showMenu = false;
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add("close");
        menu.classList.add("show");
        menuNav.classList.add("show");
        menuBranding.classList.add("show");
        navItems.forEach((item) => item.classList.add("show"));
        // set menu state

        showMenu = true;
    } else {
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        menuNav.classList.remove("show");
        menuBranding.classList.remove("show");
        navItems.forEach((item) => item.classList.remove("show"));
        // set menu state

        showMenu = false;
    }
}

// contact form email.js

// const name = document.getElementsByName("name");
// const email = document.getElementsByName("email");
// const message = document.getElementsByName("message");
const btn = document.querySelector(".btn-contact");
const myform = document.getElementById("myform");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (myform.checkValidity() === true) {
        sendMail();
    } else {
        alert("Error: empty input(s)");
    }
});

function sendMail(params) {
    let tempParams = {
        name: document.getElementsByName("name").value,
        email: document.getElementsByName("email").value,
        message: document.getElementsByName("message").value,
    };
    console.log(tempParams);
    emailjs.sendForm("service_t5oaxze", "template_6m6rrsl", myform, "R321p3jpE6qwXirhc").then(
        function (response) {
            console.log("SUCCESS!", response.status, response.text);
            alert("Message sent! ヽ(〃＾∇＾)ﾉ I'll get in touch with you soon!");
        },
        function (error) {
            console.log("FAILED...", error);
        }
    );
}
