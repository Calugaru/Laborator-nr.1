var firstCol = document.getElementById('coloane1');
var secondCol = document.getElementById('coloane2');
var thirdCol = document.getElementById('coloane3');
var container = document.getElementById('abc');
var imagineFirst = document.getElementById('imgunu');
var imagineTwo = document.getElementById('imgdoi');
var imagineThird = document.getElementById('imgtrei');


function getColor() {
    const colors = ['00', '0F', '5F', 'AF', 'FF'];
    const red = colors[getActiveIndex(firstCol)];
    const green = colors[getActiveIndex(secondCol)];
    const blue = colors[getActiveIndex(thirdCol)];
    return `#${red}${green}${blue}`;
}

function resetColors() {
    firstCol.style.borderColor = 'transparent';
    secondCol.style.borderColor = 'transparent';
    thirdCol.style.borderColor = 'transparent';
}

function getActiveIndex(element) {
    let i = 0;
    const inputs = element.getElementsByTagName('input');
    for (; i < 5; i++) {
        if (inputs.item(i).checked) {
            return i;
        }
    }

    return i < 5 ? i : 0;
}

firstCol.addEventListener('click', () => {
    resetColors();
    firstCol.style.borderColor = getColor();
});
secondCol.addEventListener('click', () => {
    resetColors();
    secondCol.style.borderColor = getColor();
});
thirdCol.addEventListener('click', () => {
    resetColors();
    thirdCol.style.borderColor = getColor();
});

function getImagin(index) {

    let element = imagineFirst;
    if (index === 1) {
        element = imagineTwo;
    }

    if (index === 2) {
        element = imagineThird;
    }

    const obj = {
        firstCol: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/400px-Flag_of_South_Korea.svg.png",
            "https://cdn.pixabay.com/photo/2020/04/04/11/45/flag-5001937_1280.jpg",
            "https://cdn.britannica.com/38/4038-004-111388C2/Flag-Thailand.jpg",
            "https://img5.goodfon.com/wallpaper/nbig/b/e8/japan-flag-flag-of-japan-japanese-flag-japan-large-flag.jpg",
            "https://media.istockphoto.com/photos/plain-colored-print-of-the-vietnam-flag-picture-id462395835?k=20&m=462395835&s=612x612&w=0&h=rXsGKbYUW4b3wIad6OYZxDWQAxdvFSEERIR4M9xMneM=",
        ],
        secondCol: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/2560px-Flag_of_Argentina.svg.png",
            "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_Guyana.svg",
            "https://seekflag.com/app/uploads/2021/12/Uruguay-01.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Flag_of_Ecuador_%281900%E2%80%932009%29.svg/1280px-Flag_of_Ecuador_%281900%E2%80%932009%29.svg.png",
        ],
        thirdCol: [
            "https://flagpedia.net/data/flags/w1600/bb.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_El_Salvador.svg/640px-Flag_of_El_Salvador.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/a/ab/Flag_of_Panama.svg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Sint_Maarten.svg/1024px-Flag_of_Sint_Maarten.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Flag_of_Puerto_Rico.svg/255px-Flag_of_Puerto_Rico.svg.png",
        ],
    };
    const key = Object.keys(obj)[index];

    element.src = obj[key][getActiveIndex(window[key])];
}

function getNume(index) {
    const obj = {
        firstCol: [
            "Coreea de Sud",
            "China",
            "Thailanda",
            "Japonia",
            "Vietam",
        ],
        secondCol: [
            "Argentina",
            "Brazilia",
            "Guyana",
            "Uruguay",
            "Ecuador",
        ],
        thirdCol: [
            "Barbados",
            "El Salvador",
            "Panama",
            "Sint Maarten (Regatul Țărilor de Jos)",
            "Puerto Rico",
        ],
    };
    const key = Object.keys(obj)[index];

    document.getElementById("titluFlag").innerHTML = obj[key][getActiveIndex(window[key])];
}

function al() {
    imagineFirst.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/2560px-Flag_of_Poland.svg.png";
    imagineTwo.src = "https://image.winudf.com/v2/image1/Y29tLmZsYWd3YWxscGFwZXIuZGVubWFya19zY3JlZW5fMV8xNTkyNjAyMjg4XzAxNA/screen-1.jpg?fakeurl=1&type=.jpg";
    imagineThird.src = "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png";
    firstCol.style.borderColor = 'transparent';
    secondCol.style.borderColor = 'transparent';
    thirdCol.style.borderColor = 'transparent';
    document.getElementById("titluFlag").innerHTML = "Flag";
    const inputs = firstCol.getElementsByTagName('input');
    inputs.item(0).checked = true;
    const inputss = secondCol.getElementsByTagName('input');
    inputss.item(0).checked = true;
    const inputsss = thirdCol.getElementsByTagName('input');
    inputsss.item(0).checked = true;
}