import { hooks } from "../Data/hooks.js";
import { attitudes } from "../Data/attitudes.js";
import { determineBackgrounds } from "../Data/determineBackground.js";
import { obligations } from "../Data/obligation.js";




let obligationQuantity = 0;



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


const obligationInputForm = document.getElementById("obligationInputForm");
const newObligationButton = document.getElementById("newObligation");

newObligationButton.addEventListener("click", (event) => {
    obligationInputForm.innerHTML += `
                    <fieldset>
                        <legend>Obligation Nr.${obligationQuantity + 1}</legend>
                        <select id="obligationType${obligationQuantity + 1}">
                            <option value="">-SELECT OPTION-</option>
                        </select>
                        <p><strong>Description: </strong><span id="obligationTypeDescription${obligationQuantity + 1}"></span></p>
                        <p><strong>Sources: </strong><span id="obligationTypeSource${obligationQuantity + 1}"></span></p>
                        <label class="input">
                            <input class="inputField" id="obligationValue${obligationQuantity + 1}" type="text" placeholder=" " autocomplete="off" required/>
                            <span class="inputLabel">Obligation Value:</span>
                        </label>
                        <label class="input">
                            <textarea class="inputField" id="obligationDescription${obligationQuantity + 1}" type="text" placeholder=" " autocomplete="off" required rows="5" cols="50"></textarea>
                            <span class="inputLabel">Obligation Description:</span>
                        </label>
                    </fieldset> 
                    `;
    obligationQuantity ++;
});

