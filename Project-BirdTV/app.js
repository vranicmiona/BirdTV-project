const videos = domcument.querySelector(".videos");
const getVideos = async () => {
  const response = await fetch(
    `https://services.brid.tv/services/get/latest/26456/0/1/25/0.json`
  );
};

const data = await response.json();
data.Video.forEach((video) => {
  const videoItems = document.createElement("div");
});
