const fieldsets = document.querySelectorAll('fieldset');

let pageCounter = 0;

fieldsets.forEach(element => {
    element.insertAdjacentHTML('beforeend', `
    <section class="buttons js-active">
        <button id="previous">Terug</button>
        <button id="next">Volgende</button>
    </section>
    `);
});

const previousBtn = document.querySelectorAll('#previous');
const nextBtn = document.querySelectorAll('#next');

previousBtn[0].remove();

nextBtn[7].id = 'submit';
nextBtn[7].innerHTML = 'Inleveren';

previousBtn.forEach(element => {
    element.addEventListener('click', (e) => {
        if (element.id !== 'submit') {
            console.log('previous');
            e.preventDefault();
            if (pageCounter > 0) {
                pageCounter--;
                console.log(pageCounter)
                formPages();
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
            }
        } else {
            console.log('submit');
        }
    });
});

function formPages() {
    fieldsets.forEach(element => {
        element.classList.remove('current');
    });
    fieldsets[pageCounter].classList.add('current');
}
