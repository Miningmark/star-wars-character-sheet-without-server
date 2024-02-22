import { hooks } from "../Data/hooks.js";
import { attitudes } from "../Data/attitudes.js";
import { determineBackgrounds } from "../Data/determineBackground.js";


const determineBackgroundDropdown = document.getElementById("determineBackground");
const determineBackgroundDescription = document.getElementById("determineBackgroundDescription");
const determineBackgroundSource = document.getElementById("determineBackgroundSource");

determineBackgrounds.forEach((determineBackground) => {
    determineBackgroundDropdown.innerHTML += `<option value="${determineBackground.key}">${determineBackground.name}</option>`;
})

determineBackgroundDropdown.addEventListener("input", (event) => {
    const input = event.target.value;
    determineBackgroundDescription.textContent = determineBackgrounds.filter((determineBackground) => determineBackground.key === input).map((determineBackground) => determineBackground.description).join();
    determineBackgroundSource.textContent = determineBackgrounds.filter((determineBackground) => determineBackground.key === input).map((determineBackground) => determineBackground.source).join();
});


const attitudeToForceDropdown = document.getElementById("attitudeToForce");
const attitudeToForceDescription = document.getElementById("attitudeToForceDescription");
const attitudeToForceSource = document.getElementById("attitudeToForceSource");

attitudes.forEach((attitude) => {
    attitudeToForceDropdown.innerHTML += `<option value="${attitude.key}">${attitude.name}</option>`;
})

attitudeToForceDropdown.addEventListener("input", (event) => {
    const input = event.target.value;
    attitudeToForceDescription.textContent = attitudes.filter((attitude) => attitude.key === input).map((attitude) => attitude.description).join();
    attitudeToForceSource.textContent = attitudes.filter((attitude) => attitude.key === input).map((attitude) => attitude.source).join();
});


const adventureHookDropdown = document.getElementById("adventureHook");
const adventureHookDescription = document.getElementById("adventureHookDescription");
const adventureHookSource = document.getElementById("adventureHookSource");

hooks.forEach((hook) => {
    adventureHookDropdown.innerHTML += `<option value="${hook.key}">${hook.name}</option>`;
});

adventureHookDropdown.addEventListener("input", (event) => {
    const input = event.target.value;
    adventureHookDescription.textContent = hooks.filter((hook) => hook.key === input).map((hook) => hook.description).join();
    adventureHookSource.textContent = hooks.filter((hook) => hook.key === input).map((hook) => hook.source).join();
});