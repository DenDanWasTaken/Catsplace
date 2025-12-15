const breeds = [
    {
        name: "Абіссінська кішка",
        img: "images/cat-breeds/Abyssinian-breed.jpg",
        desc: "Елегантні кішки середнього розміру з сильним тілом і стрункими лапами.",
        link: "https://www.purina.ua/find-a-pet/cat-breeds/abyssinian"
    },
    {
        name: "Британська короткошерста",
        img: "images/cat-breeds/British-Shorthair-breed.jpg",
        desc: "Міцне тіло, кругла голова та густа шерсть.",
        link: "https://www.purina.ua/find-a-pet/cat-breeds/british-shorthair"
    },
    {
        name: "Сіамська кішка",
        img: "images/cat-breeds/Siamese-breed.jpg",
        desc: "Витончене тіло, великі вуха та яскраві блакитні очі.",
        link: "https://www.purina.ua/find-a-pet/cat-breeds/siamese"
    },
    {
        name: "Мейн-кун",
        img: "images/cat-breeds/Maine-Coon-breed.jpg",
        desc: "Великий розмір, пухнаста шерсть, дружелюбний характер.",
        link: "https://www.purina.ua/find-a-pet/cat-breeds/maine-coon"
    },
    {
        name: "Перська кішка",
        img: "images/cat-breeds/Persian-breed.jpg",
        desc: "Довга густа шерсть, коротка мордочка, спокійний характер.",
        link: "https://www.purina.ua/find-a-pet/cat-breeds/persian"
    },
    {
        name: "Російська блакитна",
        img: "images/cat-breeds/Russian-Blue-breed.jpg",
        desc: "Сіра оксамитова шерсть, зелено-блакитні очі, граційна постава.",
        link: "https://www.purina.ua/find-a-pet/cat-breeds/russian-blue"
    },
    {
        name: "Бенгальська",
        img: "images/cat-breeds/Bengal-breed.jpg",
        desc: "Яскрава плямиста або мармурова шерсть, активний та грайливий характер.",
        link: "https://www.purina.ua/find-a-pet/cat-breeds/bengal"
    },
    {
        name: "Сфінкс",
        img: "images/cat-breeds/Sphynx-breed.jpg",
        desc: "Безшерстий кіт, дуже соціальний та теплий на дотик.",
        link: "https://www.purina.ua/find-a-pet/cat-breeds/sphynx"
    },
    {
        name: "Рагдолл",
        img: "images/cat-breeds/Ragdoll-breed.jpg",
        desc: "Великі пухнасті кішки з блакитними очима, ніжний характер, люблять обійми.",
        link: "https://www.purina.ua/find-a-pet/cat-breeds/ragdoll"
    },
    {
        name: "Тойгер",
        img: "images/cat-breeds/Toyger-breed.jpg",
        desc: "Схожий на маленького тигра, активний та допитливий.",
        link: "https://www.purina.ua/find-a-pet/cat-breeds/toyger"
    }
];

// Генерує карти порід котів
const container = document.getElementById("breed-cards");
breeds.forEach(breed => {
    container.innerHTML += `
    <div class="col">
      <div class="card card-clickable h-100 text-center">
        <img src="${breed.img}" class="card-img-top" alt="${breed.name}">
        <div class="card-body">
          <h5 class="card-title" style="font-weight: 600; font-size: 1.5rem; margin-bottom: 0.5rem; !important">${breed.name}</h5>
          <p class="card-text" style="font-size: 1rem; color: #555;">${breed.desc}</p>
          <a href="${breed.link}" class="stretched-link"></a>
        </div>
      </div>
    </div>
  `;
});
