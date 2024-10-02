// boot Android
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    if (!localStorage.getItem('loadingShown')) {
        loadingScreen.style.display = 'flex';
        localStorage.setItem('loadingShown', 'true');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 14600); 
    } else {
        loadingScreen.style.display = 'none';
    }
});

// Live Time 

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('time').innerHTML = h + ":" + m;
    setTimeout(startTime, 60000); // Update every minute
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}
// camera 
