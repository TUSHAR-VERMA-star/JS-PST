var folder = document.getElementById("folder")
var s = "BYTES"

function calculateSize(sizee) {
    if (sizee >= 1000) {
        sizee = sizee / 1000
        s = "KB"
    }
    if (sizee >= 1000) {
        sizee = sizee / 1000
        s = "MB"
    }
    if (sizee >= 1000) {
        sizee = sizee / 1000
        s = "GB"
    }
    if (sizee >= 1000) {
        sizee = sizee / 1000
        s = "TB"
    }
    return sizee
}


function GetData(e) {
    var table = document.querySelector("table");
    var files = e.target.files;
    var Element = document.createElement("tr");

    table.innerHTML = `<br>`
    Element.innerHTML = `
        <td>FILE NAME</td>
        <td>FILE SIZE</td>`

    table.appendChild(Element);

    for (var i = 0; i < files.length; i++) {
        Element = document.createElement("tr");

        var Filesize = files[i].size;
        var sizee = calculateSize(Filesize)

        Element.innerHTML = `<td>${files[i].name}</td> 
                <td>${parseFloat(sizee).toFixed(2)} ${s}</td>`;

        table.appendChild(Element);
    }
}


folder.addEventListener("change", e => GetData(e))