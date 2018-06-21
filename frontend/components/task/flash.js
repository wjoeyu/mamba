export const flashCompletion = (completedStatus, id) => {
    const flash = document.getElementsByClassName(`flash ${id}`)[0];
    if (!completedStatus) {
        flash.style.opacity = "1";
        flash.style.width = "100%";
        setTimeout(() => {
            flash.style.opacity = "0";
        },1000);
        setTimeout(() => {
            flash.style.width = "0";
        },1360);
    }
}
