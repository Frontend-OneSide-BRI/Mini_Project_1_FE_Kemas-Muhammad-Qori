const category = [
    {
        id: 1,
        name: "Painting",
        subCategory: [
            {
                painterName: "Leonardo Da Vinci",
                image: "https://res.cloudinary.com/dgnbjxh5i/image/upload/v1685464781/oneArt/leonardo_hamfjk.png",
                creation: {
                    title: "Monalisa",
                    year: "1452 - 1519",
                    image: "https://res.cloudinary.com/dgnbjxh5i/image/upload/v1685464988/oneArt/monalisa_oyhpdp.webp",
                },
            },
            {
                painterName: "Raphael",
                image: "https://res.cloudinary.com/dgnbjxh5i/image/upload/v1685464780/oneArt/raphael_podq16.jpg",
                creation: {
                    title: "Madonna with the Fish",
                    year: "1483 - 1520",
                    image: "https://res.cloudinary.com/dgnbjxh5i/image/upload/v1685464989/oneArt/madonna_g8z3cf.jpg",
                },
            },
            {
                painterName: "Pablo Picasso",
                image: "https://res.cloudinary.com/dgnbjxh5i/image/upload/v1685464780/oneArt/picasso_ypzrpi.jpg",
                creation: {
                    title: "Les Demoiselles d`Avignon",
                    year: "1881 - 1973",
                    image: "https://res.cloudinary.com/dgnbjxh5i/image/upload/v1685464988/oneArt/les_lbxbqg.jpg",
                },
            },
            {
                painterName: "Edvard Munch",
                image: "https://res.cloudinary.com/dgnbjxh5i/image/upload/v1685464781/oneArt/edvard_wxjzy0.jpg",
                creation: {
                    title: "The Scream",
                    year: "1863 - 1944",
                    image: "https://res.cloudinary.com/dgnbjxh5i/image/upload/v1685464988/oneArt/scream_zfaf3a.jpg",
                },
            },
        ],
    },
    {
        id: 2,
        name: "Film",
        subCategory: [
            {
                directorName: "Quentin Tarantino",
                image: "https://res.cloudinary.com/dgnbjxh5i/image/upload/v1685468528/oneArt/quentin_fmyqec.jpg",
                creation: {
                    filmName: "Kill Bill",
                    year: "2003",
                    image: "https://res.cloudinary.com/dgnbjxh5i/image/upload/v1685476982/oneArt/Kill_Bill_Volume_1_gyv1hf.png",
                },
            },
            {
                directorName: "James Cameron",
                image: "https://res.cloudinary.com/dgnbjxh5i/image/upload/v1685468528/oneArt/cameron_cf12hq.webp",
                creation: {
                    filmName: "Avatar",
                    year: "2009",
                    image: "https://res.cloudinary.com/dgnbjxh5i/image/upload/v1685476917/oneArt/Avatar-2009_kwoi6e.jpg",
                },
            },
            {
                directorName: "Christopher Nolan",
                image: "https://res.cloudinary.com/dgnbjxh5i/image/upload/v1685468529/oneArt/nolan_y4yxb8.jpg",
                creation: {
                    filmName: "Interstellar",
                    year: "2014",
                    image: "https://res.cloudinary.com/dgnbjxh5i/image/upload/v1685476667/oneArt/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU_._V1__fca2fw.jpg",
                },
            },
            {
                directorName: "Steven Spielberg",
                image: "https://res.cloudinary.com/dgnbjxh5i/image/upload/v1685468530/oneArt/spielberg_lar4qu.jpg",
                creation: {
                    filmName: "Jurassic Park",
                    year: "1993",
                    image: "https://res.cloudinary.com/dgnbjxh5i/image/upload/v1685476844/oneArt/91PPR5VVHeL._AC_UF894_1000_QL80__awuuzd.jpg",
                },
            },
        ],
    },
];

const btnAll = document.getElementById("btnAll");
const btnPaint = document.getElementById("btnPaint");
const btnFilm = document.getElementById("btnFilm");
const contentCategoryPainter = document.getElementById(
    "contentCategoryPainter"
);
const contentCategoryFilm = document.getElementById("contentCategoryFilm");

btnAll.addEventListener("click", () => {
    category[0].subCategory.map(
        (d, i) =>
            (contentCategoryPainter.innerHTML += `
                <div class="col-6 col-sm-4 col-lg-3 mb-3">
                    <div class="card card-dom">
                        <img src="${d.creation.image}" class="card-img-top" alt="..." height="250">
                        <div class="card-body">
                            <p class="card-text fw-bold">${d.creation.title}</p>
                            <p class="card-text">${d.painterName}</p>
                            <small>${d.creation.year}</small>
                        </div>
                    </div>
                </div>
            `)
    );
    category[1].subCategory.map(
        (d, i) =>
            (contentCategoryFilm.innerHTML += `
                <div class="col-6 col-sm-4 col-lg-3 mb-3">
                    <div class="card card-dom">
                        <img src="${d.creation.image}" class="card-img-top" alt="..." height="250">
                        <div class="card-body">
                            <p class="card-text fw-bold">${d.creation.filmName}</p>
                            <p class="card-text">${d.directorName}</p>
                            <small>${d.creation.year}</small>
                        </div>
                    </div>
                </div>
            `)
    );
});

btnPaint.addEventListener("click", () => {
    // console.log(category[0].subCategory[0]);
    category[0].subCategory.map(
        (d, i) =>
            (contentCategoryPainter.innerHTML += `
                <div class="col-6 col-sm-4 col-lg-3 mb-3">
                    <div class="card card-dom">
                        <img src="${d.creation.image}" class="card-img-top" alt="..." height="250">
                        <div class="card-body">
                            <p class="card-text fw-bold">${d.creation.title}</p>
                            <p class="card-text">${d.painterName}</p>
                            <small>${d.creation.year}</small>
                        </div>
                    </div>
                </div>
            `)
    );
});
btnFilm.addEventListener("click", () => {
    // console.log(category[1].subCategory[0].creation.filmName);
    category[1].subCategory.map(
        (d, i) =>
            (contentCategoryFilm.innerHTML += `
                <div class="col-6 col-sm-4 col-lg-3 mb-3">
                    <div class="card card-dom">
                        <img src="${d.creation.image}" class="card-img-top" alt="..." height="250">
                        <div class="card-body">
                            <p class="card-text fw-bold">${d.creation.filmName}</p>
                            <p class="card-text">${d.directorName}</p>
                            <small>${d.creation.year}</small>
                        </div>
                    </div>
                </div>
            `)
    );
});
