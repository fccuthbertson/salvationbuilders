 loadGallery = function (projectName, images, galleryId) {
    const project = '../images/projects/' + projectName + '/';
    $.each(images, function (_,image) {
        const loc = project + image + '.jpg'
        const anchor = document.createElement('a');
        anchor.classList.add('item', 'img-hover','mfp-gallery')
        anchor.href= loc;
        const img = document.createElement('img');
        img.setAttribute('src', loc);
        anchor.appendChild(img);
        const gallery = document.getElementById(galleryId)
        gallery.appendChild(anchor)
    });
}
