/* eslint-disable linebreak-style */
/* eslint-disable quotes */
const hamburger = document.querySelector(".hamburger");
const navLists = document.querySelector(".nav-lists");
const singerContentContainer = document.querySelector(
  ".singer-content-container",
);

hamburger.addEventListener("click", (e) => {
  e.preventDefault();
  hamburger.classList.toggle("active");
  navLists.classList.toggle("active");
});
document.querySelectorAll(".nav-link").forEach((nav) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  nav.addEventListener("click", (e) => {
    e.preventDefault();
    hamburger.classList.remove("active");
    navLists.classList.remove("active");
  }));

const displaySingers = ({
  name, about, paragraph, image,
}) => {
  const div = document.createElement("div");
  div.className = "singer-content-content";
  div.innerHTML = `
    <div class="singer-content-image">
    <img src="${image}" alt="${name}">
</div>
<div class="side-singer-content">
    <h3 class="singer-title">${name}</h3>
    <p class="about-singer">${about}</p>
    <hr>
    <p class="singer-paragraph">${paragraph}</p>
</div>
    `;
  return div;
};

const getSingers = async () => {
  const response = await fetch("./singers.json");

  try {
    const data = await response.json();

    data.forEach((singer) => {
      singerContentContainer.append(displaySingers(singer));
    });
  } catch (error) {
    // console.log(error);
  }
};
getSingers();
