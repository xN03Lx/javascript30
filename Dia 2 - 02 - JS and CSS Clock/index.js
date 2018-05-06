const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegress = ((seconds / 60) * 360 + 90);
    console.log(secondsDegress  );
    secondHand.style.transform = `rotate(${secondsDegress}deg)`;

    const minutes = now.getMinutes();
    const minutesDegress = ((minutes / 60) * 360 + 90);
    minsHand.style.transform = `rotate(${minutesDegress}deg)`;

    const hour = now.getHours();
    const hoursDegress = ((hour / 12) * 360 + 90);
    hourHand.style.transform = `rotate(${hoursDegress}deg)`;

}

setInterval(setDate, 1000);
