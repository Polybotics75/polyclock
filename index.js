window.addEventListener('load', () => {
    createDateTabs();
    setTodayDate();
    
    
    //REFRESH PER SECOND
    setInterval(() => {
        showTime();
        setDayOnList();
    }, 1000);
});

function createDateTabs(){
    var todayIndex = getToday();
    
    //GET DATE DISPLAY BOX
    var dateBox = document.querySelector('.date-tab');
    
    //DAYS ARRAY
    var days = ['sun', 'mon', 'tue', 'wed', 'thur', 'fri', 'sat'];
    
    days.forEach((day, index) => {
        //CREATE DATE TAB
        var dateTab = document.createElement('div');
        dateTab.classList.add('date');
        
        //MAKE TODAY ACTIVE
        if(todayIndex == index){
            dateTab.classList.add('active');
        }
        
        dateTab.setAttribute('id',day);
        dateTab.innerHTML = day;
        
        dateBox.append(dateTab);
    });
}

function setTodayDate(){
    var date = new Date();

    var day = date.getDate();
    var monthArr = date.getMonth();
    var year = date.getFullYear();

    var months = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
    
    var month = months[monthArr];
    // This arrangement can be altered based on how we want the date's format to appear.
    var currentDate = `${day}th - ${month} - ${year}`;
    
    
    
    //GET DATE SHOW
    var dateShow = document.querySelector('.date-show');
    
    dateShow.innerHTML = currentDate;
}

function getCurTime(){
    var date = new Date();
    
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var ampm = h >= 12 ? "pm" : "am";

    h = h % 12; //reminder
    h = h ? h : 12;

    m = m.toString().padStart(2, "0");
    s = s.toString().padStart(2, "0");
    
    var formatedTimeString = h + ":" + m + ":" + s;
    
    return formatedTimeString;
}

function getAmPm(){
    var date = new Date();
    
    var h = date.getHours();

    var ampm = h >= 12 ? "pm" : "am";
    
    return ampm
}

function getToday(){
    var d = new Date();
    
    var today = d.getDay();
    
    return today;
}

function setDayOnList(){
    var todayIndex = getToday();
    
    //REMOVE ACTIVE AND CHOOSE NEW ONE
    var oldactive = document.querySelector('.date.active');
    var curDayID = oldactive.getAttribute('id');
    
    
    //DAYS ARRAY
    var days = ['sun', 'mon', 'tue', 'wed', 'thur', 'fri', 'sat'];

    //LOGIC FOR NEW DAY
    var dayID = days[`${todayIndex}`];
    
    //CHECK STILL SAME DAY
    if(curDayID != dayID){
        oldactive.classList.remove('active');
        var newActive = document.querySelector(`.date#${dayID}`);
        newActive.classList.add('active');
    }
    
    
}





function showTime(){
    var time = getCurTime();
    var era = getAmPm();
    
    //GET THE TABS
    var timeTab = document.querySelector('.time');
    var eraTab = document.querySelector('.era');
    
    timeTab.innerHTML = time;
    eraTab.innerHTML = era;
}


function switchTheme(){
    var body = document.querySelector('body');
    if(body.classList.contains('dark')){
        body.classList.remove('dark');
    }else{
        body.classList.add('dark');
    }
}

