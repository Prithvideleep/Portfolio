function updateTimes() {
    const dubaiTime = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Dubai",
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    const indiaTime = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    document.getElementById('dubai-time').textContent = `Time: ${dubaiTime}`;
    document.getElementById('india-time').textContent = `Time: ${indiaTime}`;
}

updateTimes();
setInterval(updateTimes, 1000);
