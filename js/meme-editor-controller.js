'use strict';
let gCanvas;
let gCtx;

let currMeme=loadFromStorage(CURR_MEME);

function initMemeEditor() {
    gCanvas = document.querySelector('#canvas');
    gCtx = gCanvas.getContext('2d');
    gCtx.fillRect(0, 0, gCanvas.width, gCanvas.height);

    resizeCanvas();
    renderCanvas();
    
}

function resizeCanvas() {
    let elContainer = document.querySelector('.canvas-container');
    gCanvas.width = elContainer.offsetWidth;
    gCanvas.height = elContainer.offsetHeight;
}

function getTopText() {
    // let meme = getMeme();
    // console.log('meme', meme);
    let text = document.getElementById('top-txt').value;
    console.log('text',text);
    addTxt(text);
    drawTopTxt();
}
function getBottomText() {
    let meme = loadFromStorage(CURR_MEME);
    console.log('meme', meme);
    let text = document.getElementById('bottom-txt').value;
    addTxt(text);
    drawBottomTxt();
    
}



// ------render gMeme obj to canvas---------

function renderCanvas() {
    let meme=getMeme();
    console.log('meme',meme);
    
    // let imgId = loadFromStorage(IMG_ID_KEY)
    let imgObj = getMemeImg(meme.selectedImgId);
    console.log('imgObj', imgObj);
    var img = new Image();
    img.src = imgObj.url;
    img.onload = () => {
        gCanvas.width = img.width;
        gCanvas.height = img.height;
        gCtx.drawImage(img, 0, 0);
    }
}

// function drawCanvas(img) {
//     gCtx.drawImage(img, 0, 0);
//     var meme = getMeme();
//     console.log(meme);
//     meme.txts.forEach(function (txt) {
//         drawTxt(txt.line);
//     });
// }

function drawTopTxt() {
    let meme=getMeme();
    console.log('meme',meme);
    let topTxt=meme.txts[0].line;
    gCtx.fillStyle = 'white';
    gCtx.font = "30px Arial";
    gCtx.fillText(topTxt, 60, 40);
}

function drawBottomTxt() {
    let meme=getMeme();
    console.log('meme',meme);
    let bottomTxt=meme.txts[1].line;
    gCtx.fillStyle = 'white';
    gCtx.font = "30px Arial";
    gCtx.fillText(bottomTxt, 100, 100);
}





// ----increase/decrease font----

function onIncreaseFont() {

}

function onDecreaseFont() {

}























// function onLogin(ev) {
//     ev.preventDefault();
//     let nameVal = document.getElementById('name').value;
//     let passwordVal = document.getElementById('password').value;
//     let confirmPasswordVal = document.getElementById('confirmPassword').value;
//     let emailVal = document.getElementById('user-email').value;
//     let dobVal = document.getElementById('dob').value;

//     let userData = createUser(nameVal, passwordVal, confirmPasswordVal, emailVal, dobVal);
//     saveUserToStorage(userData);
// }



//---------toggleMenu in low screen res-----------

function onToggleMenu() {
    document.body.classList.toggle('open-menu');
}

