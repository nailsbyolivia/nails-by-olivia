const galleryContainer =
    document.getElementById("galleryContainer");

const designs =
    JSON.parse(
        localStorage.getItem("oliviaDesigns")
    ) || [];

if (galleryContainer) {

    designs.forEach(function(design){

        galleryContainer.innerHTML += `
            <div class="gallery-card">

                ${design.foto}

                <h3>${design.titel}</h3>

                <p>${design.beschrijving}</p>

            </div>
        `;

    });

}