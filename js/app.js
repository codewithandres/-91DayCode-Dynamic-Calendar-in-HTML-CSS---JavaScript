const daysContainer = document.querySelector('.days'),
    mooth = document.querySelector('.month'),
    nexButton = document.querySelector('[data-nextButton]'),
    prevButton = document.querySelector('[data-prevButton]');

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// GET CURRENT DATE
const date = new Date();

let currentMoonth = date.getMonth(),
    currentYear = date.getFullYear();

// funtion Render days
const renderDays = () => {
    date.setDate(1);

    const firstDay = new Date(currentYear, currentMoonth, 1),
        lastDay = new Date(currentYear, currentMoonth + 1, 0),
        lastDayIndex = lastDay.getDay(),
        lastDayDate = lastDay.getDate(),
        prevLastDay = new Date(currentYear, currentMoonth, 0),
        prevLastDayDate = prevLastDay.getDate(),
        nextDays = 7 - lastDayIndex - 1;

    // update current month and year
    mooth.innerHTML = `${months[currentMoonth]} ${currentYear}`;

    // update days html
    let days = '';
    // prev days html
    for (let x = firstDay.getDay(); x > 0; x--) {
        days += `
            <div class="day  today-prev">
                ${prevLastDayDate - x + 1}
            </div>`;
    }
    // current month days
    for (let i = 1; i <= lastDayDate; i++) {
        // cheke if its days  then add class
        if (
            i === new Date().getDate() &&
            currentMoonth === new Date().getMonth() &&
            currentYear === new Date().getFullYear()
        ) {
            days += `<div class="day today-active">${i}</div>`;
        } else {
            days += `<div class="day">${i}</div>`;
        }
    }

    // next moonth days
    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="day today-next">${j}</div>`;
    }

    // render days
    daysContainer.innerHTML = days;
};

renderDays();
