// Task#4
/*Створити кнопку, по натисканню на кнопку повино зявлятись модальне вікно, в модалці повинна бути кнопка закрити вікно.
Під модальним вікном повиний бути блок підкладка (на всю ширину сторінки) при кліку на який модальне вікно закривається.
За допомгою js задайте left i top щоб вікно було по центру, для цього використайте
window.innerWidth  і window.innerHeight а також визначте розміри блоку модального вікна
*/
let modal= document.getElementById('myModal');
let btn= document.getElementById("myBtn");
let span=document.getElementsByClassName("close")[0];
btn.onclick=function (){
    modal.style.display='block';
}
span.onclick= function (){
    modal.style.display="none";
}
window.onclick=function (event){
    if (event.target==modal){
        modal.style.display="none";
    }

}