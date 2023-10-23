window.addEventListener('scroll',function(){
    let nav = document.getElementById('nav-id');
    if(window.pageYOffset >=  240 ){
        nav.classList.add('sticky');
    }
    else{
        nav.classList.remove('sticky');
    }
})