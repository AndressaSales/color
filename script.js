function red(){
    const screen = document.querySelector('.cont');
    screen.style.background = 'pink';
    
    setTimeout(() => {
        screen.style.background = 'red';
    }, 2500);
}
function orange(){
    const screen02 = document.querySelector('.cont');
    screen02.style.background = 'purple';

    setInterval(() => {
        screen02.style.background = 'orange';
    }, 2500)
}
function green(){
    const screen03 = document.querySelector('.cont');
    screen03.style.background = 'blue';

    setInterval(() => {
        screen03.style.background = 'green';
    }, 2000);

    setTimeout(() => {
        screen03.style.background = 'yellow';
    }, 2000);
}