setInterval(() => {
    var date = new Date();

    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var meridiem = "AM";

    /* Clock */
    const html_time = document.querySelector("#time");
    if (hours > 12) {
        hours = hours - 12;
        meridiem = "PM";
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    html_time.textContent = hours + ":" + minutes + ":" + seconds + " " + meridiem;
});
