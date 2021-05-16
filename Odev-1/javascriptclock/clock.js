let isim = prompt("Adınız Nedir?");
document.getElementById("myName").innerHTML = isim;


function showTime(){
    
    let today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    let day = today.getDay();

    if(day==1){
        day = 'Pazatesi';
    }else if(day==2){
        day = 'Salı';
    }else if(day==3){
        day = 'Çarşamba';
    }else if(day==4){
        day = 'Perşembe';
    }else if(day==5){
        day = 'Cuma';
    }else if(day==6){
        day = 'Cumartesi';
    }else if(day==0){
        day = 'Pazar';
    }

    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    let dateTime = hour + ":" + minute + ":" + second + " " + day;
    document.getElementById("myClock").innerHTML = dateTime;


    setTimeout(showTime, 1000);
}

showTime();