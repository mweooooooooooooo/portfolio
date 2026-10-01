const footer = document.createElement("footer");

const licenseLink = document.createElement("a");
licenseLink.href = "./license.html";
licenseLink.textContent = "License";

const homeLink = document.createElement("a");
homeLink.href = "./index.html";
homeLink.textContent = "Home";

footer.append(licenseLink, " ", homeLink);
document.body.appendChild(footer);
