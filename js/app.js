const daysContainer = document.querySelector('.days'),
    containerCanlenadar = document.querySelector('.calendar'),
    mooth = document.querySelector('.month'),
    nexButton = document.querySelector('[data-nextButton]'),
    prevButton = document.querySelector('[data-prevButton]'),
    todayButton = document.querySelector('.today');

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
const renderCalendar = () => {
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
            days += `<div class="day animate__animated">${i}</div>`;
        }
    }
    // next moonth days
    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="day today-next">${j}</div>`;
    }

    hidetodayButton();
    // render days
    daysContainer.innerHTML = days;
    document
        .querySelectorAll('.day')
        .forEach(element => element.classList.add('animate__swing'));
};

containerCanlenadar.addEventListener('click', event => {
    // next button
    if (event.target.closest('[data-nextButton]')) {
        // increase current month by one
        currentMoonth++;

        if (currentMoonth > 11) {
            // if month is greater than 11 make it 0 and increase year by one
            currentMoonth = 0;
            currentYear++;
        }
        renderCalendar();
        AnimationNextButton();
    }
    // prev button
    if (event.target.closest('[data-prevButton]')) {
        // increase current month by one
        currentMoonth--;

        if (currentMoonth < 0) {
            // if month is greater than 11 make it 0 and increase year by one
            currentMoonth = 11;
            currentYear--;
        }
        renderCalendar();
        AnimationPrevButton();
    }
    // go to day
    if (event.target.closest('.today')) {
        currentMoonth = date.getMonth();
        currentYear = date.getFullYear();
        renderCalendar();
    }
});

// lets hide today btn its already today
const hidetodayButton = () => {
    if (
        currentMoonth === new Date().getMonth() &&
        currentYear === new Date().getFullYear()
    ) {
        todayButton.style.display = 'none';
    } else {
        todayButton.style.display = 'flex';
    }
};

renderCalendar();

const AnimationNextButton = () => {
    mooth.classList.add('animate__fadeInDown');
    setTimeout(() => {
        mooth.classList.remove('animate__fadeInDown');
    }, 600);
};

const AnimationPrevButton = () => {
    mooth.classList.add('animate__fadeInUp');
    setTimeout(() => {
        mooth.classList.remove('animate__fadeInUp');
    }, 600);
};
