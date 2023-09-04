 loadGallery = function (projectName, galleryId) {
    const url = 'project/images/' + projectName;
    $.ajax({
        url: url,
        success: function (images) {
            $.each(images, function (_,image) {
                const loc = '../images/projects/' + projectName + '/' + image;
                const anchor = document.createElement('a');
                anchor.href= loc;
                const img = new Image();
                img.src = loc;
                img.onload = function () {
                    anchor.appendChild(img);
                    anchor.classList.add('item', 'img-hover','mfp-gallery')
                    const gallery = document.getElementById(galleryId)
                    gallery.appendChild(anchor)
                }
            });
        }
    })
}
