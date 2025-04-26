window.onload = function () {
    let seconds = 0;
    let miliSeconds = 0;
    let interval;
    let isRunning = false;

    const addSeconds = document.querySelector(".seconds");
    const addMilliSeconds = document.querySelector(".milli");

    const startBtn = document.querySelector(".start");
    const stopBtn = document.querySelector(".stop");
    const resetBtn = document.querySelector(".reset");

    startBtn.onclick = function () {
        if (!isRunning) {
            interval = setInterval(startTimer, 10);
            isRunning = true;
        }
    };

    stopBtn.onclick = function () {
        clearInterval(interval);
        isRunning = false;
    };

    resetBtn.onclick = function () {
        clearInterval(interval);
        isRunning = false;
        seconds = 0;
        miliSeconds = 0;
        addSeconds.innerHTML = "00";
        addMilliSeconds.innerHTML = "00";
    };

    function startTimer() {
        miliSeconds++;

        if (miliSeconds < 10) {
            addMilliSeconds.innerHTML = "0" + miliSeconds;
        } else {
            addMilliSeconds.innerHTML = miliSeconds;
        }

        if (miliSeconds > 99) {
            seconds++;
            addSeconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;
            miliSeconds = 0;
            addMilliSeconds.innerHTML = "00";
        }
    }
};
