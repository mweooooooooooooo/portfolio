const params = new URLSearchParams(window.location.search);

const img = params.get("img");
const locationParam = params.get("location");

const width = Number(params.get("width"));
const height = Number(params.get("height"));
const scaleParam = Number(params.get("scale"));

const scale = scaleParam > 0 ? scaleParam : 1;

let imgpath;

if (locationParam === "pixels") {
  imgpath = `../pixels/${encodeURIComponent(img)}`;
} else if (locationParam === "assets") {
  imgpath = `../assets/${encodeURIComponent(img)}`;
} else if (locationParam === "other") {
  imgpath = `../other/${encodeURIComponent(img)}`;
}

if (imgpath) {
  const image = document.createElement("img");

  image.src = imgpath;
  image.alt = img || "";

  image.onload = () => {
    if (width > 0 && height > 0) {
      image.style.width = `${width * scale}px`;
      image.style.height = `${height * scale}px`;
    } else {
      image.style.width = `${image.naturalWidth * scale}px`;
      image.style.height = `${image.naturalHeight * scale}px`;
    }

    image.style.imageRendering = "pixelated";
  };

  image.onerror = () => {
    console.error("Image failed to load:", imgpath);
  };

  document.querySelector("#main").appendChild(image);
}
