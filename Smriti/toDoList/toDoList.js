var workArr = []
function addWork() {
    workArr.push(document.getElementById("work_input").value)
    document.getElementById("work_input").value = ""
    console.log(workArr)
    display()
}

function display() {
    // for (let i = 0; i < workArr.length; i++) {
        document.getElementById("workList").textContent += "<li>" + workArr[i] + "</li>"
    // }
}