const carrossel = document.querySelector(".carrossel");
const dots = document.querySelectorAll(".dot");

carrossel.addEventListener("scroll", () => {
  const scrollPosition = carrossel.scrollLeft;
  const larguraCard = 174 + 10; // largura do card + gap
  const index = Math.round(scrollPosition / (larguraCard * 2));

  dots.forEach((dot) => dot.classList.remove("ativo"));
  if (dots[index]) {
    dots[index].classList.add("ativo");
  }
});
