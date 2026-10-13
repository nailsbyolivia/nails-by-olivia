let designs = JSON.parse(
    localStorage.getItem("oliviaDesigns")
) || [];
let editIndex = -1;
const saveBtn = document.getElementById("saveBtn");
const designList = document.getElementById("designList");
const fotoInput = document.getElementById("foto");
const preview = document.getElementById("preview");

function saveDesigns() {
    localStorage.setItem(
        "oliviaDesigns",
        JSON.stringify(designs)
    );
}

if (fotoInput) {

    fotoInput.addEventListener("change", function (e) {

        const file = e.target.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onload = function (event) {

            preview.src = event.target.result;

            preview.style.display = "block";

        };

        reader.readAsDataURL(file);

    });

}

function renderDesigns() {

    designList.innerHTML = "";

    designs.forEach(function (design, index) {

        designList.innerHTML += `
            <div class="design-card">

                <img
                    src="${design.foto}"
                    style="
                        width:100%;
                        height:180px;
                        object-fit:cover;
                        border-radius:15px;
                    ">

                <h3>${design.titel}</h3>

                <p>${design.beschrijving}</p>

                <button onclick="editDesign(${index})">
                    Edit
                </button>

                <button onclick="deleteDesign(${index})">
                    Delete
                </button>

            </div>
        `;

    });

}

function deleteDesign(index) {

    designs.splice(index, 1);

    saveDesigns();

    renderDesigns();

}

function editDesign(index) {

    editIndex = index;

    document.getElementById("titel").value =
        designs[index].titel;

    document.getElementById("beschrijving").value =
        designs[index].beschrijving;

    preview.src =
        designs[index].foto;

    preview.style.display =
        "block";

}

if (saveBtn) {

    saveBtn.addEventListener("click", function () {

        const titel =
            document.getElementById("titel").value;

        const beschrijving =
            document.getElementById("beschrijving").value;

        if (!titel || !preview.src) {

            alert(
                "Vul een titel in en kies een foto!"
            );

            return;

        }

if (editIndex > -1) {

    designs[editIndex] = {

        titel: titel,

        beschrijving: beschrijving,

        foto: preview.src

    };

    editIndex = -1;

} else {

    designs.push({

        titel: titel,

        beschrijving: beschrijving,

        foto: preview.src

    });

}

        saveDesigns();

        renderDesigns();

    });

}

renderDesigns();