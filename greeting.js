const greetingForm = document.querySelector(".js-greetingForm"),
    greetingInput = greetingForm.querySelector("input"),
    nameGreeting = document.querySelector(".js-nameGreeting"),
    nameReset = document.querySelector(".js-nameCg");

const USER_LS = "currentUser";
const SHOW_CN = "showing";

function handleSubmitName(event) {
    event.preventDefault();
    const user = greetingInput.value;
    saveName(user);
    greetingInput.value = "";
    getGreeting(user);
}

function saveName(user) {
    localStorage.setItem(USER_LS, user);
}

function askForName(event) {
    greetingForm.classList.add(SHOW_CN);
    greetingForm.addEventListener("submit", handleSubmitName);
}

function getGreeting(user) {
    greetingForm.classList.remove(SHOW_CN);
    nameGreeting.classList.add(SHOW_CN);
    nameGreeting.innerText = `Hello ${user}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
        askForName();
    }else {
        getGreeting(currentUser);
    }
}

function handleChange() {
    localStorage.removeItem(USER_LS);
    nameGreeting.classList.remove(SHOW_CN);
    loadName();
}

function nameChange() {
    nameReset.addEventListener("click", handleChange);
}

function init() {
    loadName();
    nameChange();
}

init();