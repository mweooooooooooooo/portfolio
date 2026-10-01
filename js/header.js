const breadcrumb = document.querySelector("#header");

const path = window.location.pathname;
const parts = path.split("/").filter(Boolean);

const fileName = parts.at(-1) || "index.html";
const directory = parts.at(-2) || "Portfolio";

breadcrumb.innerHTML = `
  <a class="portfoliolink" href="./">~/${directory}</a>
  <a href="./${fileName}">/${fileName}</a>
`;
