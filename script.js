const buttons = document.querySelectorAll('.buttons');
const previousBtn = document.querySelectorAll('#previous');
const nextBtn = document.querySelectorAll('#next');

let pageCounter = 0;

buttons.forEach(element => {
   element.classList.add('js-active'); 
});

previousBtn.forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        if (pageCounter > 0) {
            pageCounter--;
            console.log(pageCounter);
        }
    });
});

nextBtn.forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        if (pageCounter < 6) {
            pageCounter++;
            console.log(pageCounter);
        }
    });
});