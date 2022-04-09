const element = document.querySelectorAll('.service__row');

for ( let i = 0; i <= element.length - 1; i++ ) {
    let num = i * 82;
    element[i].style.marginTop = num.toString() + 'px';
}

function check() {

    const check = document.getElementById('menu__toggle');
    const parent_nav = document.getElementById('header__response-menu');
    const icon = document.querySelector('.header__icon');

    if (check.checked) {
        console.log('Выбран');
        parent_nav.style.width = '100%';
        parent_nav.style.height = 'auto';
        parent_nav.style.paddingBottom = '300px';
        icon.style.display = 'none';
    } else {
        parent_nav.style.display = 'inline-block';
        parent_nav.style.width = '100px';
        parent_nav.style.borderBottomRightRadius = '50px';
        parent_nav.style.height = '100px';
        console.log('Не выбран');
        parent_nav.style.paddingBottom = '0px';
        icon.style.display = 'inline-block';
    }
}