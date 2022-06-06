const $app = document.getElementById("app");


const Avatar = params => {

    const src= `${params.rute}`;

    return `
        <picture>
            <img src="${src}"/>
            <i>${params.name}</i>
        </picture>
    
    `;
};

$app.innerHTML += Avatar ({rute: "https://randomuser.me/api/portraits/men/13.jpg", name:"Rodolfo"});
$app.innerHTML += Avatar ({rute: "https://randomuser.me/api/portraits/men/8.jpg", name:"Juan"});
$app.querySelectorAll("img").forEach(img => {
    img.addEventListener("click", () =>{
        img.classList.toggle("disabled");
    });
});
