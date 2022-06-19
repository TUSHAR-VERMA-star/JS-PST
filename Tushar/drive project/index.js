var folder = document.getElementById("folder")
var s = "BYTES"
var count = 0

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

    if (files.length >= 1) {
        var path = files[0].webkitRelativePath.split('/');
        document.getElementById("FolderName").innerHTML = `Selected Files from <u style="color:yellow">${path[0].toUpperCase()}</u>`;
    }


    var Element = document.createElement("tr");

    table.innerHTML = `<br>`
    Element.innerHTML = `
        <td>SNO.</td>
        <td style="text-align:center; font-weight: bold;">FILE NAME</td>
        <td style="font-weight: bold;">FILE SIZE</td>`

    table.appendChild(Element);

    for (var i = 0; i < files.length; i++) {
        Element = document.createElement("tr");

        var Filesize = files[i].size;
        var sizee = calculateSize(Filesize)
        count += 1

        Element.innerHTML = `<td> ${count}. </td> <td>${files[i].webkitRelativePath}</td> 
                <td>${parseFloat(sizee).toFixed(2)} ${s}</td>`;

        table.appendChild(Element);
    }
    count = 0
}


folder.addEventListener("change", e => GetData(e))