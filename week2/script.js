function openLightbox(imageSrc, imageAlt) {

    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");

    lightbox.style.display = "flex";

    lightboxImage.src = imageSrc;
    lightboxImage.alt = imageAlt;
}


function closeLightbox() {

    const lightbox = document.getElementById("lightbox");

    lightbox.style.display = "none";
}