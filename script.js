AOS.init({
  duration: 1000,
  once: false,
  easing: 'ease-in-out'
});

// ==== Hero Image Switchers ====

function setupImageSwitcher(id, imageArray) {
  let index = 0;
  const imageEl = document.getElementById(id);

  imageEl.addEventListener('click', () => {
    index = (index + 1) % imageArray.length;
    imageEl.classList.add('fade-out');

    setTimeout(() => {
      imageEl.src = imageArray[index];
      imageEl.classList.remove('fade-out');
    }, 300);
  });
}

// Fade animation via CSS
const style = document.createElement('style');
style.innerHTML = `
  .fade-out {
    opacity: 0.3;
    transition: opacity 0.3s ease;
  }
`;
document.head.appendChild(style);

// Setup for each section
setupImageSwitcher("culture-hero", [
  "https://superlive.id/storage/superadventure/2019/10/25/a9556270ec4b.jpg",
  "https://superlive.id/storage/superadventure/2019/10/25/dcedb0c1210d.jpg",
  "https://gdb.voanews.com/096e0000-0a00-0242-1bcf-08da4c97d97d_w1080_h608_s.jpg"
]);

setupImageSwitcher("nature-hero", [
  "https://images.tokopedia.net/img/KRMmCm/2023/12/21/fa5a2db9-21ff-42a5-abd2-3a40b03af1df.png",
  "https://travelwisataindonesia.com/wp-content/uploads/destinasi-wisata-alam-Bali-murah.jpg",
  "https://wisatasumba.co.id/wp-content/uploads/2024/06/Wisata-Alam-Bali-Yang-Manarik-Dikunjungi-Facebook.jpg"
]);

setupImageSwitcher("food-hero", [
  "https://www.unileverfoodsolutions.co.id/id/inspirasi-chef/kuliner-autentik-indonesia/10-makanan-khas-bali-yang-jadi-favorit-pelanggan/jcr:content/parsys/set1/row3/span8/textimage_127293196/image.transform/jpeg-optimized/image.1715084164691.jpg",
  "https://cdn-1.timesmedia.co.id/images/2023/04/19/Ayam-betutu.jpg",
  "https://images.ctfassets.net/dsbipkqphva2/72JUsAlJ4IMn0Lsi7vpvEz/36de9180b101d808630599eadce4f40c/best-babi-guling-bali-lead.jpg?fm=webp&w=800"
]);

setupImageSwitcher("gallery-hero", [
  "https://asset.kompas.com/crops/4pAjogG18k7W_yeHcKnYDkmC5cM=/14x0:583x380/1200x800/data/photo/2023/03/15/641155367b7fa.jpg",
  "https://www.kintamani.id/wp-content/uploads/kebiasaan-unik-orang-Bali-1.jpg",
  "https://www.weddingku.id/wp-content/uploads/2021/06/unnamed-file.jpg"
]);

window.addEventListener("scroll", () => {
  const scrollProgress = document.getElementById("scroll-indicator");
  const totalHeight = document.body.scrollHeight - window.innerHeight;
  const progress = (window.scrollY / totalHeight) * 100;
  scrollProgress.style.width = `${progress}%`;
});
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
