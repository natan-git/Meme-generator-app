'use strict';
let gCanvas;
let gCtx;

// let gCurrMeme;

const DATA_URL_KEY = "dataUrl";

function initMemeEditor() {
    gMeme = loadFromStorage(CURR_MEME);
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
    console.log('meme', meme);
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

    let fontColor = meme.txts[0].color;
    gCtx.fillStyle = `${fontColor}`;

    let fontSize = meme.txts[0].size;
    gCtx.font = `${fontSize}px Impact`;

    let stroke = meme.txts[0].stroke;
    gCtx.strokeStyle = stroke;
    gCtx.lineWidth = 2;

    let pos = meme.txts[0].align
    switch (pos) {
        case pos = 'left':
            gCtx.fillText(topTxt, 5, 40);
            gCtx.strokeText(topTxt, 5, 40);
            break;
        case pos = 'center':
            gCtx.fillText(topTxt, 150, 40);
            gCtx.strokeText(topTxt, 150, 40);
            break;
        case pos = 'right':
            gCtx.fillText(topTxt, 300, 40);
            gCtx.strokeText(topTxt, 300, 40);
            break;

        default:
            gCtx.fillText(topTxt, 5, 40);
            gCtx.strokeText(topTxt, 5, 40);
    }
}


function drawBottomTxt() {
    let meme = getMeme();
    let bottomTxt = meme.txts[1].line;

    let fontColor = meme.txts[1].color;
    gCtx.fillStyle = `${fontColor}`;

    let fontSize = meme.txts[1].size;
    gCtx.font = `${fontSize}px Impact`;

    let stroke = meme.txts[1].stroke;
    gCtx.strokeStyle = stroke;
    gCtx.lineWidth = 2;

    let pos = meme.txts[1].align
    switch (pos) {
        case pos = 'left':
            gCtx.fillText(bottomTxt, 5, 380);
            gCtx.strokeText(bottomTxt, 5, 380);
            break;
        case pos = 'center':
            gCtx.fillText(bottomTxt, 100, 380);
            gCtx.strokeText(bottomTxt, 100, 380);
            break;
        case pos = 'right':
            gCtx.fillText(bottomTxt, 300, 380);
            gCtx.strokeText(bottomTxt, 300, 380);
            break;

        default:
            gCtx.fillText(bottomTxt, 5, 380);
            gCtx.strokeText(bottomTxt, 5, 380);
    }
}


// ----increase/decrease font----

function onIncreaseFont() {
    let meme = getMeme();
    meme.txts[0].size++;
    meme.txts[1].size++;
    renderCanvas();
}

function onDecreaseFont() {
    let meme = getMeme();
    meme.txts[0].size--;
    meme.txts[1].size--;
    renderCanvas();
}

// --------delete text------------

function onDeleteFont() {
    let meme = getMeme();
    meme.txts[0].line = '';
    meme.txts[1].line = '';
    renderCanvas();
}

// -------align text-------------

function onAlignLeft() {
    let meme = getMeme();
    meme.txts[0].align = 'left';
    meme.txts[1].align = 'left';
    renderCanvas();
}

function onAlignCenter() {
    let meme = getMeme();
    meme.txts[0].align = 'center';
    meme.txts[1].align = 'center';
    renderCanvas();
}

function onAlignRight() {
    let meme = getMeme();
    meme.txts[0].align = 'right';
    meme.txts[1].align = 'right';
    renderCanvas();
}

// ------change font color-----

function onChangeColor() {
    let meme = getMeme();
    let fontColor = document.querySelector('#color').value;
    console.log('fontColor', fontColor);
    meme.txts[0].color = fontColor;
    meme.txts[1].color = fontColor;
}

// ------stroke------

function onStrokeChange() {
    let meme = getMeme();
    let strokeColor = document.querySelector('#stroke-color').value;
    console.log('strokeColor', strokeColor);
    meme.txts[0].stroke = strokeColor;
    meme.txts[1].stroke = strokeColor;
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


// ---------render saved imgs to gallery and adding download attribut -----------
function renderSavedCanvasImgs() {
    var imgs = loadFromStorage(DATA_URL_KEY);
    console.log('imgs', imgs);
    var strHTMLs = imgs.map(function(img, idx) {
        return `<a href =${imgs[idx]} download > <img id="${img.id}" src=${imgs[idx]} alt="" onclick="downloadImg(this.src)"></img> </a>`;
    });
    var elImgList = document.querySelector('.image-gallery');
    elImgList.innerHTML = strHTMLs.join('');
}

// -----saving canvas as url to new page-------

function onSaveCanvas() {
    let imgsData = [];
    let dataUrl;
    if (loadFromStorage(DATA_URL_KEY)) {
        imgsData = loadFromStorage(DATA_URL_KEY);
        dataUrl = gCanvas.toDataURL();
        imgsData.push(dataUrl);
        saveToStorage(DATA_URL_KEY, imgsData);
    } else {

        dataUrl = gCanvas.toDataURL();
        imgsData.push(dataUrl);
        saveToStorage(DATA_URL_KEY, imgsData);
    }
    // window.open("Mems.html", "_self");
    window.open("Mems.html");
}


// ------upload--------

// on submit call to this function
function uploadImg(elForm, ev) {
    ev.preventDefault();
    document.getElementById('imgData').value = canvas.toDataURL("image/jpeg");

    // A function to be called if request succeeds
    function onSuccess(uploadedImgUrl) {
        uploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        document.querySelector('.share-container').innerHTML = `
        <a class="btn" href="https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
           Share   
        </a>`
    }

    doUploadImg(elForm, onSuccess);
}

function doUploadImg(elForm, onSuccess) {
    var formData = new FormData(elForm);

    fetch('http://ca-upload.com/here/upload.php', {
            method: 'POST',
            body: formData
        })
        .then(function(response) {
            return response.text()
        })

    .then(onSuccess)
        .catch(function(error) {
            console.error(error)
        })
}




// facebook api
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = 'https://connect.facebook.net/he_IL/sdk.js#xfbml=1&version=v3.0&appId=807866106076694&autoLogAppEvents=1';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));



// ===========download Img==============
function downloadImg(elLink) {
    var imgContent = canvas.toDataURL('image/jpeg');
    elLink.href = imgContent
}