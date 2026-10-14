const featuredList =
    document.getElementById("featuredList");

const saveBtn =
    document.getElementById("saveBtn");

const preview =
    document.getElementById("preview");

const fotoInput =
    document.getElementById("foto");

let fotoData = "";
let editId = null;
if (fotoInput) {

    fotoInput.addEventListener(
        "change",
        function (e) {

            const file =
                e.target.files[0];

            if (!file) return;

            const reader =
                new FileReader();

            reader.onload = function(event){

                fotoData =
                    event.target.result;

                preview.src =
                    fotoData;

                preview.style.display =
                    "block";

            };

            reader.readAsDataURL(file);

        }
    );

}
if (saveBtn) {

    saveBtn.addEventListener(
        "click",
        function () {

            const titel =
                document.getElementById("titel").value;

            const beschrijving =
                document.getElementById("beschrijving").value;

            if (!titel || !fotoData) {

                alert(
                    "Vul een titel in en kies een foto."
                );

                return;
            }

            const data = {

    titel: titel,

    beschrijving: beschrijving,

    foto: fotoData

};

if (editId) {

    db.collection("featuredDesigns")
    .doc(editId)
    .update(data)

    .then(() => {

        alert(
            "Featured Design bijgewerkt."
        );

        editId = null;

        location.reload();

    })

    .catch((error) => {

        console.error(error);

    });

} else {

    db.collection("featuredDesigns")
    .add(data)

    .then(() => {

        alert(
            "Featured Design opgeslagen."
        );

        location.reload();

    })

    .catch((error) => {

        console.error(error);

        alert(
            "Opslaan mislukt."
        );

    });

}

        }
    );

}
function loadFeaturedDesigns() {

    if (!featuredList) return;

    featuredList.innerHTML = "";

    db.collection("featuredDesigns")
    .get()
    .then((snapshot) => {

        snapshot.forEach((doc) => {

            const design = doc.data();

           featuredList.innerHTML += `
    <div class="design-card">

        <img
            src="${design.foto}"
            style="
                width:200px;
                height:150px;
                object-fit:cover;
                border-radius:15px;
            ">

        <h3>${design.titel}</h3>

        <p>${design.beschrijving}</p>

       <button onclick="editFeatured('${doc.id}')">
    EDIT
</button>

<button onclick="deleteFeatured('${doc.id}')">
    DELETE
</button>

    </div>
`;


        });

    });

}

loadFeaturedDesigns();
function editFeatured(id) {

    db.collection("featuredDesigns")
    .doc(id)
    .get()
    .then((doc) => {

        const design = doc.data();

        document.getElementById("titel").value =
            design.titel || "";

        document.getElementById("beschrijving").value =
            design.beschrijving || "";

        preview.src =
            design.foto || "";

        preview.style.display =
            "block";

        fotoData =
            design.foto || "";

        editId = id;

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

   function deleteFeatured(id) {

    if (!confirm("Design verwijderen?")) {
        return;
    }

    db.collection("featuredDesigns")
    .doc(id)
    .delete()
    .then(() => {

        loadFeaturedDesigns();

    })
    .catch((error) => {

        console.error(error);

    });

}