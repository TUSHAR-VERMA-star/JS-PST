var arr=[
    {
        'name':'Tushar Verma',
        'amt':50000
    },
    {
        'name':'Parth Gandhi',
        'amt':60000
    },
    {
        'name':'Smriti ',
        'amt':600000
    },
    {
        'name':'shreya ',
        'amt':800000
    },
]
var idx = 1
var add_user = document.getElementById('add_user')
var double_money = document.getElementById('double_money')
var sortt = document.getElementById('sort')
var show_name = document.getElementById('show_name')
var show_amount = document.getElementById('show_amount')
var arr2=[
    {
        'name':'Tushar Verma',
        'amt':50000
    },
    {
        'name':'Parth Gandhi',
        'amt':60000
    },
]

add_user.addEventListener('click', e => {
    arr2=[]
    show_amount.innerHTML=` `
    show_name.innerHTML=` `
    idx+=1;
    var tempVar=0;
    arr.forEach(function(ele){
        if(tempVar<=idx)
        {
            arr2.push(ele)
            show_name.innerHTML+=`<li> ${ele.name} </li>`
            show_amount.innerHTML+=`<li> ${ele.amt} </li>`
            tempVar+=1;
        }
    })
})
double_money.addEventListener('click', e => {
    arr2=[]
    show_amount.innerHTML=` `
    show_name.innerHTML=` `
    var tempVar=0;
    arr.forEach(function(ele){
        if(tempVar<=idx)
        {
            show_name.innerHTML+=`<li> ${ele.name} </li>`
            ele.amt=ele.amt*2
            show_amount.innerHTML+=`<li> ${ele.amt} </li>`
            tempVar+=1;
            arr2.push(ele)
        }
    })
})
sortt.addEventListener('click', e => {
    arr2.sort()
    arr2.reverse()
    show_amount.innerHTML=` `
    show_name.innerHTML=` `
    var tempVar=0;
    arr2.forEach(function(ele){
        if(tempVar<=idx)
        {
            show_name.innerHTML+=`<li> ${ele.name} </li>`
            show_amount.innerHTML+=`<li> ${ele.amt} </li>`
            tempVar+=1;
        }
    })
})