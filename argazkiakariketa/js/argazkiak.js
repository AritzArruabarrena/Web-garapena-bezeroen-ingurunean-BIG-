function irudiak() {
    const AddImgBtn = document.getElementById("AddImgBtn");
    const imageContainer = document.getElementById("imageContainer");


    const imagenes = [
        'img/saludo1.jpg',
        'img/saludo2.jpg',
        'img/saludo3.jpg',
        'img/saludo4.jpg'
    ];

    let imgIndex = 0;


    function addImage() {
        const currentImages = imageContainer.getElementsByTagName('img').length;

        if (currentImages < 4) {  
            const newImage = document.createElement("img");
            newImage.src = imagenes[imgIndex];
            newImage.alt = `Imagen ${imgIndex + 1}`;
            

            newImage.addEventListener('dblclick', function () {
                imageContainer.removeChild(newImage);
            });

            imageContainer.appendChild(newImage);

            imgIndex = (imgIndex + 1) % imagenes.length;
        } else {
            alert('4 argaki dagoz pantallan.');
        }
    }

    AddImgBtn.addEventListener('click', addImage);
}


window.onload = irudiak;

