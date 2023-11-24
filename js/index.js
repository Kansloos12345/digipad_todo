function changeImage(imgElement) {
    const currentSrc = imgElement.style.backgroundImage;

    if (currentSrc.includes('krul.png')) {
        imgElement.style.backgroundImage = "url('img/cross.png')";
    } else {
        imgElement.style.backgroundImage = "url('img/krul.png')";
    }
}

function toggleDeleteButton(imgElement) {
    const deleteButton = document.getElementById(imgElement.id);

    if (imgElement.style.backgroundImage.includes('cross.png')) {
        deleteButton.style.display = 'none';
    } else {
        deleteButton.style.display = 'block';
        deleteButton.style.backgroundImage = "url('img/trash.png')";
        deleteButton.style.border = 'none';
        deleteButton.style.backgroundSize = 'contain';
    }
}
