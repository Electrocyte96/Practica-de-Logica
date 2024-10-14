function setAlarm() {
    let seconds = parseInt(prompt("Enter the number of seconds until the alarm goes off:"));

    let message = prompt("Enter the message to show after the time is up:");

    if (!isNaN(seconds) && seconds > 0) {
        console.log(`The alarm will trigger in ${seconds} seconds...`);

        setTimeout(() => {
            console.log(`Time for: ${message} after ${seconds} seconds`);
        }, seconds * 1000);  // Convert seconds to milliseconds
    } else {
        console.log("Please enter a valid number of seconds.");
    }
}

setAlarm();
