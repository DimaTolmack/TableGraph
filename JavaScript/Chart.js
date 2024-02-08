const getRevenue = document.getElementById('revenue').getContext('2d');
const getCash = document.getElementById('cash').getContext('2d');
const getNoCash = document.getElementById('noCash').getContext('2d');
const getCreditCard = document.getElementById('card').getContext('2d');
const getCheck = document.getElementById('check').getContext('2d');
const getGuest = document.getElementById('guest').getContext('2d');
const getAfterPayment = document.getElementById('after_payment').getContext('2d');
const getBeforePayment = document.getElementById('before_payment').getContext('2d');
const getCountCheck = document.getElementById('count_check').getContext('2d');
const getCountGuest = document.getElementById('count_guest').getContext('2d');
const myRevenue = new Chart(getRevenue, {
    type: 'line',
    data: {
        labels: ['Вчера', 'Текущий день', 'День недели'],
        datasets: [
            {
                label:'Выручка',
                data: [480521, 500521, 4805121],
                borderWidth: 2,
            },
        ],
    }
});

const myCash = new Chart(getCash, {
    type: 'line',
    data: {
        labels: ['Вчера', 'Текущий день', 'День недели'],
        datasets: [
            {
                label:'Наличные',
                data: [300000, 300000, 300000],
                borderWidth: 2,
            },
        ],
    }
});

const myNonCash = new Chart(getNoCash, {
    type: 'line',
    data: {
        labels: ['Вчера', 'Текущий день', 'День недели'],
        datasets: [
            {
                label:'Безналичный расчет руб',
                data: [100000, 100000, 100000],
                borderWidth: 2,
            },
        ],
    }
});

const myCheck = new Chart(getCheck, {
    type: 'line',
    data: {
        labels: ['Вчера', 'Текущий день', 'День недели'],
        datasets: [
            {
                label:'Средний чек руб',
                data: [900 , 1300, 900],
                borderWidth: 2,
            },
        ],
    }
});

const myCreditCard = new Chart(getCreditCard, {
    type: 'line',
    data: {
        labels: ['Вчера', 'Текущий день', 'День недели'],
        datasets: [
            {
                label:'Кредитаня карта руб.',
                data: [100521, 100521, 100521],
                borderWidth: 2,
            },
        ],
    }
});

const myGuest = new Chart(getGuest, {
    type: 'line',
    data: {
        labels: ['Вчера', 'Текущий день', 'День недели'],
        datasets: [
            {
                label:'Средний гость руб.',
                data: [800 , 1200, 800],
                borderWidth: 2,
            },
        ],
    }
});

const myAfterPayment = new Chart(getAfterPayment, {
    type: 'line',
    data: {
        labels: ['Вчера', 'Текущий день', 'День недели'],
        datasets: [
            {
                label:'Удалаение из чека(после уплаты)',
                data: [1000 , 1100, 900],
                borderWidth: 2,
            },
        ],
    }
});

const myBeforePayment = new Chart(getBeforePayment, {
    type: 'line',
    data: {
        labels: ['Вчера', 'Текущий день', 'День недели'],
        datasets: [
            {
                label:'Удалаение из чека(до уплаты)',
                data: [1300 , 1300, 900],
                borderWidth: 2,
            },
        ],
    }
});

const myCountCheck = new Chart(getCountCheck, {
    type: 'line',
    data: {
        labels: ['Вчера', 'Текущий день', 'День недели'],
        datasets: [
            {
                label:'Количество чеков',
                data: [36 , 34, 34],
                borderWidth: 2,
            },
        ],
    }
});

const myCountGuest = new Chart(getCountGuest, {
    type: 'line',
    data: {
        labels: ['Вчера', 'Текущий день', 'День недели'],
        datasets: [
            {
                label:'Количество гостей',
                data: [36 , 34, 32],
                borderWidth: 2,
            },
        ],
    }
});