let mainImg = document.querySelector(".slider img");
let imagesArray = ['img/mountains.jpg', 'img/mountains2.jpg', 'img/mountains3.jpg'];
let num = 0;


// Task#1
/*Створити массив шляхів до зображень і створити слайдер який переключає кожні 3 секунди картинку,
слайдер повинен бути зациклений, коли доходить до кінця массиву починає показувати зображення з початку.
Анімації і ефекти до слайдеру по бажанню
*/

setInterval(next, 3000)

// Task#2
/*Створити 2 кнопки які при кліку будуть перемикати зображення в слайдері, вперед назад
*/
function next() {
    num++;
    if (num >= imagesArray.length) {
        num = 0;
    }
    mainImg.src = imagesArray[num]

}

function back() {
    num--;
    if (num < 0) {
        num = imagesArray.length - 1;
    }
    mainImg.src = imagesArray[num];


}
