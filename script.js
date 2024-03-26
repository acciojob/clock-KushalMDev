function displayCurrentDateTime() {
    let currentDate = new Date();
    let ptag = document.getElementById('timer')
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
    const day = currentDate.getDate();

    // Get the current time
    let hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    let gmt = 'AM'
    if (hours > 12) {
        hours = hours - 12
        gmt = 'PM'
    }
    // Format the date and time as needed
    const formattedDateTime = `${month}/${day}/${year}, ${hours}:${minutes}:${seconds} ${gmt}`;

    ptag.innerText = formattedDateTime
}
displayCurrentDateTime()
setInterval(displayCurrentDateTime, 1000)
