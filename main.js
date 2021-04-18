/* SELECT ITEMS */

const input = document.querySelector('#Input');
const form = document.querySelector('form');
const grams = document.querySelector('#gramsOutput');
const kg = document.querySelector('#kgOutput');
const oz = document.querySelector('#ozOutput');
const lbs = document.querySelector('#lbsOutput');
const cups = document.querySelector('#cupsOutput');
const spoons = document.querySelector('#spoonsOutput');
const teaspoons = document.querySelector('#teaspoonsOutput');
const output = document.querySelector('#output');
const section = document.querySelector('.section-center');
const select = document.querySelector('#select');

/* FUNCTIONS */

function pickUnit() {
    if (this.value === "lbs") {
        input.addEventListener('input', calcPounds);
    } else if (this.value === "kgs") {
        input.addEventListener('input', calcKilograms);
    } else if (this.value === "grams") {
        input.addEventListener('input', calcGrams);
    } else if (this.value === "oz") {
        input.addEventListener('input', calcOz);
    } else if (this.value === "cups") {
        input.addEventListener('input', calcCups);
    } else if (this.value === "spoons") {
        input.addEventListener('input', calcSpoons);
    } else if (this.value === "teaspoons") {
        input.addEventListener('input', calcTeaspoons);
    }

    output.style.visiblity = 'visible';
}

function calcPounds() {
    grams.innerHTML = (Number(this.value) / 0.0022046).toFixed(2);
    kg.innerHTML = (Number(this.value) / 2.2046).toFixed(2);
    oz.innerHTML = Number(this.value) * 16;
    lbs.innerHTML = this.value;
    cups.innerHTML = (Number(this.value) / 0.485).toFixed(2);
    spoons.innerHTML = (Number(this.value) * 34.3628).toFixed(2);
    teaspoons.innerHTML = (Number(this.value) * 102.95).toFixed(2);
}

function calcGrams() {
    grams.innerHTML = Number(this.value);
    kg.innerHTML = (Number(this.value) / 1000).toFixed(2);
    oz.innerHTML = (Number(this.value) * 0.035274).toFixed(2);
    lbs.innerHTML = (Number(this.value) / 500).toFixed(2);
    cups.innerHTML = (Number(this.value) / 220).toFixed(2);
    spoons.innerHTML = (Number(this.value) * 0.07576).toFixed(2);
    teaspoons.innerHTML = (Number(this.value) * 0.227).toFixed(2);
}

function calcOz() {
    grams.innerHTML = (Number(this.value) / 0.035274).toFixed(2);
    kg.innerHTML = (Number(this.value) / 35.274).toFixed(2);
    oz.innerHTML = Number(this.value);
    lbs.innerHTML = (Number(this.value) * 0.062500).toFixed(2);
    cups.innerHTML = (Number(this.value) / 7.76).toFixed(2);
    spoons.innerHTML = (Number(this.value) * 2.12).toFixed(2);
    teaspoons.innerHTML = (Number(this.value) * 6.36).toFixed(2);
}

function calcKilograms() {
    grams.innerHTML = Number(this.value) * 1000;
    kg.innerHTML = Number(this.value);
    oz.innerHTML = (Number(this.value) * 35.274).toFixed(2);
    lbs.innerHTML = (Number(this.value) * 2.2046).toFixed(2);
    cups.innerHTML = (Number(this.value) * 4.55).toFixed(2);
    spoons.innerHTML = (Number(this.value) * 75.76).toFixed(2);
    teaspoons.innerHTML = (Number(this.value) * 227.27).toFixed(2);
}

function calcCups() {
    grams.innerHTML = Number(this.value) * 220;
    kg.innerHTML = (Number(this.value) / 4.55).toFixed(2);
    oz.innerHTML = (Number(this.value) * 7.76).toFixed(2);
    lbs.innerHTML = (Number(this.value) * 2.2046).toFixed(2);
    cups.innerHTML = Number(this.value);
    spoons.innerHTML = (Number(this.value) * 16.67).toFixed(2);
    teaspoons.innerHTML = Number(this.value) * 50;
}

function calcSpoons() {
    grams.innerHTML = (Number(this.value) / 0.07576).toFixed(2);
    kg.innerHTML = (Number(this.value) / 75.76).toFixed(2);
    oz.innerHTML = (Number(this.value) * 7.76).toFixed(2);
    lbs.innerHTML = (Number(this.value) / 34.3628).toFixed(2);
    cups.innerHTML = (Number(this.value) / 16.67).toFixed(2);
    spoons.innerHTML = Number(this.value);
    teaspoons.innerHTML = Number(this.value) * 3;
}

function calcTeaspoons() {
    grams.innerHTML = (Number(this.value) / 0.227).toFixed(2);
    kg.innerHTML = (Number(this.value) / 227.27).toFixed(2);
    oz.innerHTML = (Number(this.value) / 6.36).toFixed(2);
    lbs.innerHTML = (Number(this.value) / 102.95).toFixed(2);
    cups.innerHTML = (Number(this.value) / 50).toFixed(2);
    spoons.innerHTML = (Number(this.value) / 3).toFixed(2);
    teaspoons.innerHTML = Number(this.value);
}

function refreshPage(){
    window.location.reload();
} 

/* EVENT LISTENERS */

input.addEventListener('input', function (e) {
    output.style.visibility = 'visible';
    section.style.height = 'auto';
}
);
input.addEventListener('input', calcPounds);
select.addEventListener('input', pickUnit);


form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('form submission submission cancelled')
});