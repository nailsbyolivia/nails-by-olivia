/* =========================
   LOGIN
========================= */

const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {
    loginBtn.addEventListener("click", function () {

        const email =
            document.getElementById("email").value.trim().toLowerCase();

        const password =
            document.getElementById("password").value.trim();

        if (
            email === "nailsbyoliviagallardo@gmail.com" &&
            password === "RFOlivia7!@"
        ) {
            window.location.href = "admin.html";
        } else {
            alert("Verkeerde logingegevens");
        }

    });
}


/* =========================
   FOTO PREVIEW ADMIN
========================= */

const fotoInput = document.getElementById("foto");
const preview = document.getElementById("preview");

if (fotoInput && preview) {

    fotoInput.addEventListener("change", function (e) {

        const file = e.target.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onload = function(event) {

            preview.src = event.target.result;

            preview.style.display = "block";

            localStorage.setItem(
                "oliviaFoto",
                event.target.result
            );

        };

        reader.readAsDataURL(file);

    });

}


/* =========================
   OPSLAAN ONTWERP
========================= */

const saveBtn = document.getElementById("saveBtn");

if (saveBtn) {

    saveBtn.addEventListener("click", function () {

        const titel =
            document.getElementById("titel").value;

        const beschrijving =
            document.getElementById("beschrijving").value;

        localStorage.setItem(
            "oliviaTitel",
            titel
        );

        localStorage.setItem(
            "oliviaBeschrijving",
            beschrijving
        );

        if (preview && preview.src) {

            localStorage.setItem(
                "oliviaFoto",
                preview.src
            );

        }

        alert(
            "Ontwerp succesvol opgeslagen!"
        );

    });

}


/* =========================
   MENU ADMIN
========================= */

const galleryBtn =
    document.getElementById("galleryBtn");


const gallerySection =
    document.getElementById("gallerySection");

const aboutSection =
    document.getElementById("aboutSection");

if (
    galleryBtn &&
    aboutBtn &&
    gallerySection &&
    aboutSection
) {

galleryBtn.addEventListener(
    "click",
    function () {

        gallerySection.style.display =
            "block";

        aboutSection.style.display =
            "none";

        addDesignForm.style.display =
            "none";

    }
);

}


/* =========================
   ABOUT OPSLAAN
========================= */

const saveAboutBtn =
    document.getElementById("saveAboutBtn");

if (saveAboutBtn) {

    const opgeslagenAbout =
        localStorage.getItem("aboutOlivia");

    if (
        opgeslagenAbout &&
        document.getElementById("aboutText")
    ) {

        document.getElementById(
            "aboutText"
        ).value =
            opgeslagenAbout;

    }

    saveAboutBtn.addEventListener(
        "click",
        function () {

            const tekst =
                document.getElementById("aboutText").value;

            localStorage.setItem(
                "aboutOlivia",
                tekst
            );

            alert(
                "About succesvol opgeslagen!"
            );

        }
    );

}


/* =========================
   ABOUT OP HOMEPAGE TONEN
========================= */

const aboutContent =
    document.getElementById("aboutContent");

if (aboutContent) {

    const opgeslagenAbout =
        localStorage.getItem("aboutOlivia");

    if (opgeslagenAbout) {

        aboutContent.innerText =
            opgeslagenAbout;

    }

}
/* =========================
   ADD NEW DESIGN
========================= */

const addDesignBtn =
    document.getElementById("addDesignBtn");

const addDesignForm =
    document.getElementById("addDesignForm");

if (addDesignBtn && addDesignForm) {

    addDesignBtn.addEventListener(
        "click",
        function () {

            addDesignForm.style.display =
                "block";

        }
    );

}

