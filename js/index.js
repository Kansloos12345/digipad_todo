function changeImage(imgElement) {
    var currentSrc = imgElement.src;
    var newSrc = (currentSrc.includes('krul.png')) ? './img/cross.png' : './img/krul.png';
    imgElement.src = newSrc;
}