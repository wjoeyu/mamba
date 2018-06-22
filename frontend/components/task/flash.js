export const flashCompletion = (completedStatus, id) => {
    const flash = document.getElementsByClassName(`flash ${id}`)[0];
    const circle = document.getElementsByClassName(`check-circle ${id}`)[0];
    const checkedCircle = document.getElementsByClassName(`checked-circle ${id}`)[0];
    const flashText = document.getElementsByClassName(`task-index-row-name-inputs ${id}`)[0];
    if (!completedStatus) {
        const check = circle.children[0];
        flash.style.opacity = "1";
        flash.style.width = "100%";
        circle.style.background = "white";
        circle.style.borderColor = "#25e8c8";
        check.style.fill = "#25e8c8";
        flashText.style.color = "white";
        setTimeout(() => {
            flash.style.opacity = "0";
            circle.style.background = "";
            circle.style.borderColor = "";
            check.style.fill = "";
            flashText.style.color = "";
        },1000);
        setTimeout(() => {
            flash.style.width = "0";
        },1360);
    } else {
        const checked = checkedCircle.children[0];
        checked.style.fill = "";
        checkedCircle.style.background = "";
        checkedCircle.style.borderColor = "";
    }
}
