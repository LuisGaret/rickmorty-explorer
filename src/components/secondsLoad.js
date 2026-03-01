export const secondsLoad = () =>{
    let seconds = 12

    const timeCount = setInterval(() => {
        seconds--;
        spanCount.textContent = seconds;
        
        if (seconds <= 0) {
            spanCount.textContent = "Resolved"
            clearInterval(timeCount)
        }
    }, 1000);

    return timeCount;
}

