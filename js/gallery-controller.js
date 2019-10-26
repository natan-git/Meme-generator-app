// let CURR_MEME='cerrMeme';

function initGallery() {
    renderImgs();
    console.log('gMeme', gMeme);
}

// ---------render imgs to gallery-----------
function renderImgs() {
    var imgs = getImgs();
    var strHTMLs = imgs.map(function(img) {
        return `<img id="${img.id}" src=${img.url} alt="" onclick="addIdToStorage(${img.id})"></img>`;
    });
    var elImgList = document.querySelector('.image-gallery');
    elImgList.innerHTML = strHTMLs.join('');
}

// -----render new img to canvas-----
function addIdToStorage(imdId) {
    // let meme = getMeme();
    gMeme.selectedImgId = imdId;
    saveToStorage(CURR_MEME, gMeme);
    window.open("meme-editor.html", "_self");
}