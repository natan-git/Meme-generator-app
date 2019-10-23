'use strict';
let gCanvas;
let gCtx;

let gCurrMeme;

function initMemeEditor() {
    gMeme = loadFromStorage(CURR_MEME);
    console.log('gMeme', gMeme);

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
    let text = document.getElementById('top-txt').value;
    console.log('text', text);
    addTopTxt(text);
    renderCanvas();
    
}
function getBottomText() {
    let text = document.getElementById('bottom-txt').value;
    addBottomTxt(text);
    renderCanvas();
}



// ------render gMeme obj to canvas---------

function renderCanvas() {
    let meme = getMeme();
    // console.log('meme',meme);
    let imgObj = getMemeImg(meme.selectedImgId);
    
    var img = new Image();
    img.src = imgObj.url;
    img.onload = () => {
        gCanvas.width = img.width;
        gCanvas.height = img.height;
        gCtx.drawImage(img, 0, 0);
        drawTopTxt();
        drawBottomTxt();
        
    }
}



function drawTopTxt() {
    let meme = getMeme();
    
    let topTxt = meme.txts[0].line;

    let fontColor=meme.txts[0].color;
    gCtx.fillStyle = `${fontColor}`;

    let fontSize=meme.txts[0].size;
    
    gCtx.font = `${fontSize}px Arial`;
    
    gCtx.fillText(topTxt, 5, 30);
}


function drawBottomTxt() {
    let meme = getMeme();
    let bottomTxt = meme.txts[1].line;

    let fontColor=meme.txts[1].color;
    gCtx.fillStyle = `${fontColor}`;

    let fontSize=meme.txts[1].size;
    gCtx.font = `${fontSize}px Arial`;
    
    gCtx.fillText(bottomTxt, 5, 380);
}


// ----increase/decrease font----

function onIncreaseFont() {
    //should be in service
    gMeme.txts[0].size++;
    gMeme.txts[1].size++;
    

    renderCanvas();
}

function onDecreaseFont() {
    //should be in service
    gMeme.txts[0].size--;
    gMeme.txts[1].size--;
    
    renderCanvas();
}

function onDeleteFont(){
    //should be in service
    gMeme.txts[0].line='';
    gMeme.txts[1].line='';
    
    renderCanvas();
}

function onSwitchLine(){
    
}




// =====download Canvas====

function downloadCanvas() {
    var download = document.getElementById("download");
    var image = document.getElementById("canvas").toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
    download.setAttribute("href", image);
}





function onToggleMenu() {
    document.body.classList.toggle('open-menu');
}

