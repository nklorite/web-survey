import { submitUserData } from './storage.js';

const submitUserDataButton = document.getElementById("submit-user-data-button");

async function submitUserDataHandler() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;

    await submitUserData(name, age, email);
}

submitUserDataButton.addEventListener("click", submitUserDataHandler);