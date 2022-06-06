let show = document.getElementById('rules-btn')
let close = document.getElementById('close-btn')

show.addEventListener('click',function(){
    document.getElementById('rules').classList.add('show');
});

close.addEventListener('click',function(){
    document.getElementById('rules').classList.remove('show')
});
