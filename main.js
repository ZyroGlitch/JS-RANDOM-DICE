const image = document.getElementById('image');
const rollBtn = document.getElementById('rollBtn');

rollBtn.onclick = function () {
    let random = Math.floor(Math.random() * 6) + 1;

    switch (random) {
        case 1:
            image.setAttribute('src', 'images/1.png');
            break;
        case 2:
            image.setAttribute('src', 'images/2.png');
            break;
        case 3:
            image.setAttribute('src', 'images/3.png');
            break;
        case 4:
            image.setAttribute('src', 'images/4.png');
            break;
        case 5:
            image.setAttribute('src', 'images/5.png');
            break;
        case 6:
            image.setAttribute('src', 'images/6.png');
            break;

    }
}