'use strict';

let currIdx=0;
let gKeywords = { 'happy': 12, 'funny puk': 1 }
let gCurrMemeId;
const IMG_ID_KEY='imgId'

let gImgs = [
    { id: currIdx++, url: 'img/square-img/1.jpg', keywords: ['smiling'] },
    { id: currIdx++, url: 'img/square-img/2.jpg', keywords: ['smiling'] },
    { id: currIdx++, url: 'img/square-img/3.jpg', keywords: ['smiling'] },
    { id: currIdx++, url: 'img/square-img/4.jpg', keywords: ['smiling'] }
];

let gMeme = {
    selectedImgId: 0,
    selectedTxtIdx: 0,
    txts: [{line: ' ', size: 40, align: 'left', color: 'red'}, {line: ' ', size: 40, align: 'left', color: 'red'}]
}

function addTopTxt(txt){
    gMeme.txts[0].line=txt;
}
function addBottomTxt(txt){
    gMeme.txts[1].line=txt;
}

function getMemeImg(imgId){
    return gImgs[imgId];
}

function getMeme(){
    return gMeme;
}

function getImgs(){
    return gImgs;
}













