'use strict';

let currIdx = 0;
let gKeywords = { 'happy': 12, 'funny puk': 1 }
let gCurrMemeId;
// const IMG_ID_KEY = 'imgId'
let CURR_MEME = 'cerrMeme';

let gImgs = [
    { id: currIdx++, url: 'img/square-img/1.jpg', keywords: ['smiling'] },
    { id: currIdx++, url: 'img/square-img/2.jpg', keywords: ['smiling'] },
    { id: currIdx++, url: 'img/square-img/3.jpg', keywords: ['smiling'] },
    { id: currIdx++, url: 'img/square-img/4.jpg', keywords: ['smiling'] },
    { id: currIdx++, url: 'img/square-img/5.jpg', keywords: ['smiling'] },
    { id: currIdx++, url: 'img/square-img/6.jpg', keywords: ['smiling'] },
    { id: currIdx++, url: 'img/square-img/7.jpg', keywords: ['smiling'] },
    { id: currIdx++, url: 'img/square-img/8.jpg', keywords: ['smiling'] },
    { id: currIdx++, url: 'img/square-img/9.jpg', keywords: ['smiling'] },
    { id: currIdx++, url: 'img/square-img/10.jpg', keywords: ['smiling'] },
    { id: currIdx++, url: 'img/square-img/11.jpg', keywords: ['smiling'] },
    { id: currIdx++, url: 'img/square-img/12.jpg', keywords: ['smiling'] },
    { id: currIdx++, url: 'img/square-img/13.jpg', keywords: ['smiling'] },
    { id: currIdx++, url: 'img/square-img/14.jpg', keywords: ['smiling'] },
    { id: currIdx++, url: 'img/square-img/15.jpg', keywords: ['smiling'] },
    { id: currIdx++, url: 'img/square-img/16.jpg', keywords: ['smiling'] },
    { id: currIdx++, url: 'img/square-img/17.jpg', keywords: ['smiling'] },
    { id: currIdx++, url: 'img/square-img/18.jpg', keywords: ['smiling'] },
    { id: currIdx++, url: 'img/square-img/19.jpg', keywords: ['smiling'] },
    { id: currIdx++, url: 'img/square-img/20.jpg', keywords: ['smiling'] },
    { id: currIdx++, url: 'img/square-img/21.jpg', keywords: ['smiling'] },
    { id: currIdx++, url: 'img/square-img/22.jpg', keywords: ['smiling'] },
    { id: currIdx++, url: 'img/square-img/23.jpg', keywords: ['smiling'] },
    { id: currIdx++, url: 'img/square-img/24.jpg', keywords: ['smiling'] },
    { id: currIdx++, url: 'img/square-img/25.jpg', keywords: ['smiling'] },
];

let gMeme = {
    selectedImgId: 0,
    selectedTxtIdx: 0,
    txts: [{ line: '', size: 40, align: 'left', color: 'white', stroke: 'black' },
        { line: '', size: 40, align: 'left', color: 'white', stroke: 'black' }
    ]
}


function addTopTxt(txt) {
    gMeme.txts[0].line = txt;
}

function addBottomTxt(txt) {
    gMeme.txts[1].line = txt;
}

function getMemeImg(imgId) {
    return gImgs[imgId];
}

function getMeme() {
    return gMeme;
}

function getImgs() {
    return gImgs;
}


// ------change font size-----


// ------change align pro-----

function addLeftPro(txt) {
    gMeme.txts[0].align = txt;
    gMeme.txts[1].align = txt;
    console.log('gMeme.txts[0].align.x', gMeme.txts[0].align);
    console.log('gMeme.txts[0].align.x', gMeme.txts[1].align);

}

function onAlignCenter(txt) {
    gMeme.txts[0].align = txt;
    gMeme.txts[1].align = txt;
    console.log('gMeme.txts[0].align.x', gMeme.txts[0].align);
    console.log('gMeme.txts[0].align.x', gMeme.txts[1].align);
}

function onAlignRight(txt) {
    gMeme.txts[0].align = txt;
    gMeme.txts[1].align = txt;
    console.log('gMeme.txts[0].align.x', gMeme.txts[0].align);
    console.log('gMeme.txts[0].align.x', gMeme.txts[1].align);
}