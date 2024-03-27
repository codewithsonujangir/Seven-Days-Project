// My Project no. #11




document.addEventListener ("DOMContentLoaded", () => {
    // console.log("Ram Ji Ram");
    addTextToSpan ();
});





// this function for get february date from year (28 or 29)
function getFebruaryDate(year) {
    // February has 28 days by default
    let days_in_february = 28;
    // Check if the year is a leap year
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        // Leap year has 29 days in February
        days_in_february = 29; 
    }
    // Return the last day of February for the given year
    return days_in_february;
}





function addTextToSpan () {
    // get today's date
    const currentDate = new Date();
    // get year
    let year = currentDate.getFullYear();
    // get month
    let month = currentDate.getMonth(); // (0 to 11)
    // get date
    let date = currentDate.getDate();
    // get week-day
    const week_day = currentDate.getDay(); // (0 to 6)
    // create new date
    const newDate = new Date(currentDate);
    // get date of last sunday from subtracting week_day
    newDate.setDate(currentDate.getDate() - week_day);
    // again
    year = newDate.getFullYear();
    month = newDate.getMonth(); // (0 to 11) 
    date = newDate.getDate();
    // sunday date 
    let sunday_date = date;
    // get span elements by id using loop
    for (let day=0; day<7; day++) {
        // get span elements by id
        const span_el = document.getElementById(`day-${day}`);
        // add text
        span_el.innerText = sunday_date;
        // increase by one if possible
        sunday_date ++;
        if (month == 1) {
            const days_in_february = getFebruaryDate(year);
            if (sunday_date > days_in_february) {
                sunday_date = 1;
            }
        }else {
            const month_31 = [0, 2, 4, 6, 7, 9, 11];
            if (month_31.includes(month)) {
                // do for 31 days
                if (sunday_date > 31) {
                    sunday_date = 1;
                }
            }else {
                // do for 30 days
                if (sunday_date > 30) {
                    sunday_date = 1;
                }
            }
        }
    }
    // get span element by id
    const span_el = document.getElementById(`day-${week_day}`);
    // add highlight class
    span_el.classList.add("highlight-week-day");
}







// Hope you like this code




