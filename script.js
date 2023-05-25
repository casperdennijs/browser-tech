const fieldsets = document.querySelectorAll('fieldset');
const button = document.querySelector('.buttons')
const progress = document.querySelector('.progress')

button.classList.add('hidden');

let pageCounter = 0;
let fieldsetCount = -1;

fieldsets.forEach(element => {
    fieldsetCount++

    element.insertAdjacentHTML('beforeend', `
    <section class="buttons js-active">
        <button id="previous">Terug</button>
        <button id="next">Volgende</button>
    </section>
    `);

    if (fieldsetCount > 0) {
        element.classList.add("hidden");
    }
});

const previousBtn = document.querySelectorAll('#previous');
const nextBtn = document.querySelectorAll('#next');

previousBtn[0].remove();

nextBtn[7].id = 'submit';
nextBtn[7].innerHTML = 'Inleveren';

const form = document.querySelector("form");
let isFormValid = form.checkValidity();
const lastFieldset = document.querySelector("fieldset:last-child")
let alreadyInvalid = 0;

nextBtn[7].addEventListener('click', () => {
    if (isFormValid) {
        console.log("Valid");
    } else {
        console.log("Invalid")
        if (alreadyInvalid == 0) {
            alreadyInvalid = 1;
            lastFieldset.insertAdjacentHTML('beforeend', `
            <p class="error">Je hebt niet alle opties ingevuld! Kijk alles nog een keer na!</p>
            `)
        }
    }
})

previousBtn.forEach(element => {
    element.addEventListener('click', (e) => {
        if (element.id !== 'submit') {
            console.log('previous');
            e.preventDefault();
            if (pageCounter > 0) {
                pageCounter--;
                console.log(pageCounter)
                formPages();
                checkProgress();
                saveOptions();
            }
        } else {
            console.log('submit');
        }
    });
});

nextBtn.forEach(element => {
    element.addEventListener('click', (e) => {
        if (element.id !== 'submit') {
            console.log('next');
            e.preventDefault();
            if (pageCounter < 7) {
                pageCounter++;
                console.log(pageCounter);
                formPages();
                checkProgress();
                saveOptions();
            }
        } else {
            console.log('submit');
        }
    });
});

function formPages() {
    fieldsets.forEach(element => {
        element.classList.remove('current');
        element.classList.add('hidden');
    });
    fieldsets[pageCounter].classList.add('current');
    fieldsets[pageCounter].classList.remove('hidden');
}

progress.insertAdjacentHTML('beforeend', `
<div class="step currently"></div>
<div class="step"></div>
<div class="step"></div>
<div class="step"></div>
<div class="step"></div>
<div class="step"></div>
<div class="step"></div>
<div class="step"></div>
`)

const steps = document.querySelectorAll(".step");

function checkProgress() {
    steps.forEach(element => {
        element.classList.remove("currently");
    });
    steps[pageCounter].classList.add("currently")
}

steps.forEach((element, index) => {
    element.addEventListener("click", () => {
        pageCounter = index;
        formPages();
        checkProgress();
    })
});

const sections = document.querySelectorAll("section.radio");

function saveOptions() {
    for (let index = 0; index < sections.length; index++) {
        const options = sections[index].querySelectorAll('input[type="radio"]');
        const key = `selectedOption${index + 1}`;

        for (let index2 = 0; index2 < options.length; index2++) {
            if (options[index2].checked) {
                const selectedValue = index2;
                localStorage.setItem(key, selectedValue);
            }
        }  
    }
}

function loadOptions() {
    for (let index = 0; index < sections.length; index++) {
        const options = sections[index].querySelectorAll('input[type="radio"]');
        const key = `selectedOption${index + 1}`;

        const selectedValue = localStorage.getItem(key);

        for (let index2 = 0; index2 < options.length; index2++) {
            if (index2 == selectedValue) {
                options[index2].checked = true;
            }
        }  
    }
    console.log("Previous options loaded")
}
loadOptions();
