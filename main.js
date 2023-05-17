
 const div = document.querySelector('.inner__block')
let positionX = 0;
let positionY = 0;
function moveBlock (){
    if(positionX <= 449 && positionY <= 0){
        positionX++
        div.style.left = `${positionX}px`
        setTimeout(moveBlock,1)
    } else if(positionX >= 449 && positionY <= 449){
        positionY++
        div.style.top = `${positionY}px`
        setTimeout(moveBlock,1)
    } else if(positionX >= 0 && positionY >= 449){
        positionX--
        div.style.left = `${positionX}px`
        setTimeout(moveBlock,1)
     } else if(positionX <=0 && positionY >= 0){
        positionY--
        div.style.top = `${positionY}px`
        setTimeout(moveBlock,1)
    }
}
moveBlock()

//todo 2) Отобразить на странице цифру 0 , создать 2 кнопки: stop и start. Если нажать на start то цифра начнет
// увеличиваться на единицу до того момента пока вы не нажмете на кнопку stop. Используйте методы которые мы прошли на уроке.
// Добавить кнопку resume, при нажатии она должна продолжить тот счет на котором остановился.
// Добавить кнопку clear при нажатии обнуляет счетчик.

const header = document.querySelector('h3')
const start = document.querySelector('.btn-start')
const stop = document.querySelector('.btn-stop')
const resume = document.querySelector('.btn-resume')
const clear = document.querySelector('.btn-clear')

let numCounter = 0
 let interval;

function counter(){
    numCounter++
    header.textContent = numCounter
}

start.addEventListener('click',()=>{
          interval = setInterval(counter,1000)
    })
 stop.addEventListener('click',()=>{
     clearInterval(interval)
 })

resume.addEventListener('click',()=>{
    interval = setInterval(counter,1000)
})

 clear.addEventListener('click',()=>{
     clearInterval(interval)
     numCounter = 0
     header.textContent = numCounter
 })






