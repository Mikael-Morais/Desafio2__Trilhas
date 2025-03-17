let containers = document.querySelectorAll('.container');
let lefts = document.querySelectorAll('.left');
let rights = document.querySelectorAll('.right');

function altern() {
    for (let i = 0; i < containers.length; i++) {
        const container = containers[i];
        container.classList.toggle('opacity');
        setTimeout(() => {
            container.classList.toggle('visible');
            setTimeout(() => {
                container.classList.toggle('color');
                setTimeout(() => {
                    container.classList.toggle('opacity');
                }, 200);
            }, 200);
        }, 200);
    }
}