const totalImages = 36; 
const container = document.getElementById("gallery-nested");

let imgIndices = Array.from({ length: totalImages }, (_, i) => i + 1);

// Перемішуємо індекси зображень
for (let i = imgIndices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [imgIndices[i], imgIndices[j]] = [imgIndices[j], imgIndices[i]];
}

imgIndices.forEach(i => {
    const imgPath = `images/gallery/gallery-cat-pic-${i}.jpg`;
    container.innerHTML += `
        <img alt="Кіт ${i}" src="${imgPath}" data-image="${imgPath}" class="gallery-img">
    `;
});
