// Task#3
/*Зробити таймер який відраховує 60секунд і виводить розрахунок на сторінку, а потім відображає
alert('Ви дочикались знижок) Стилізування за бажанням
*/


let secondsFun = (seconds) => {

    const sb = document.getElementById('seconds');
    sb.querySelector('div ul li:nth-child(1)').innerHTML = seconds
    let s = 100 - ((100 / 60) * seconds)
    if (seconds === 0) s = 0
    sb.style.background = `conic-gradient(blueviolet 0 ${s}%, crimson ${s}% 100%)`;
}

let counter = 60;

function countSecond() {
    counter--;
    if (counter === 0) {
        clearInterval(myInterval)
        Swal.fire('Ваша знижка!', 'Вітаємо, Ви дочекались!', 'success')

    }
    secondsFun(counter)

}

let myInterval = setInterval(countSecond, 1000)