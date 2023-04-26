const videos = domcument.querySelector(".videos");
const getVideos = async () => {
  const response = await fetch(
    `https://services.brid.tv/services/get/latest/26456/0/1/25/0.json`
  );
};

const data = await response.json();
data.Video.forEach((video) => {
  const videoItem = document.createElement("div");
  videoItem.className = "video-item";
  const slikaVidea = document.createElement("img");
  slikaVidea.src = video.snapshots.sd;

  const naslov = document.createElement(`h1`);
  naslov.textContent = video.name;

  const trajanje = document.createElement("span");

  const link = document.createElement("a");
  link.className = "linkovi";
  link.href = video.source.hd;

  link.appendChild(slikaVidea);
  link.appendChild(naslov);
  link.appendChild(trajanje);
  link.appendChild(videoItem);

  function trajanjeVidea(vreme) {
    const sati = Math.floor(vreme / 3600);
    const minuti = Math.floor(vreme % 3600) / 60;
    const sekunde = Math.floor(vreme % 60);

    return `${sati.toString().padStart(2, "0")}:${minuti
      .toString()
      .padStart(2, "0")} : ${sekunde.toString().padStart(2, "0")}`;
  }
  trajanje.textContent = trajanjeVidea(+video.duration);
});

getVideos();
