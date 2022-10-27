
//функція встановлює таймер
//функція визначає час різниці
//функція оновлює таймер

let days = document.querySelector('#days');
let hours = document.querySelector('#hours');
let minutes = document.querySelector('#minutes');
let second = document.querySelector('#seconds');

let date = document.querySelector('.input');
let btnSet = document.querySelector('.btn');

let resetBtn = document.querySelector('.reset-btn');

const addZero=(num)=>{
    if(num < 10){
        return `0${num}`
    }else{
        return num;
    }
}

btnSet.addEventListener('click',()=>{
    let deadline = date.value;

    const day = (days,hours,minutes,second) =>{
        let current = new Date();
        if(Date.parse(deadline) > Date.parse(current)){
            let result = Date.parse(deadline) - Date.parse(current);
            second.textContent = addZero(result/1000%60);//секунд
            minutes.textContent = addZero(Math.floor(result/1000/60)%60);//хвилин
            hours.textContent =  addZero(Math.floor(result/1000/60/60)%24);//годин
            days.textContent = addZero(Math.floor(result/1000/60/60/24));//днів
        
            let timerId = setInterval(()=>{
                day(days,hours,minutes,second)
            },1000);
            
            if(result < 0){
                clearInterval(timerId);
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                second.textContent = '00';
            }

            resetBtn.addEventListener('click',()=>{
                clearInterval(timerId);
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                second.textContent = '00';
                date.value = '';
            })

        }else{
            alert('Помилка');
            date.value = '';

        }
        
    }
    day(days,hours,minutes,second);
    
})










