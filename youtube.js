async function fetchData() {
  var res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q=indian popular&type=video&part=snippet&key=AIzaSyB2qa_PsU1skE-6LwbkZCqRXyPbCV2IEyw`
  );

  var data = await res.json();

  data = data.items;

  localStorage.setItem("youtube", JSON.stringify(data));

  showData();
}

function showData() {
  box.innerHTML = "";
  var data = JSON.parse(localStorage.getItem("youtube"));

  data.forEach(function (video) {
    var card = document.createElement("div");

    var image = document.createElement("img");

    image.src = video.snippet.thumbnails.medium.url;

    var title = document.createElement("p");

    title.innerText = video.snippet.title;

    card.append(image, title);

    box.append(card);

    card.addEventListener("click", function () {
      var videoId = video.id.videoId;
      localStorage.setItem("videoId", JSON.stringify(videoId));
      window.open("play.html", "_blank").focus();
    });
  });

  console.log(data);
}

async function searchData() {
  event.preventDefault();

  var query = document.getElementById("input").value;

  var res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q=${query}&type=video&regionCode=IN&part=snippet&key=AIzaSyB2qa_PsU1skE-6LwbkZCqRXyPbCV2IEyw`
  );

  var data = await res.json();

  data = data.items;

  localStorage.setItem("youtube", JSON.stringify(data));

  showData();
}

var box = document.getElementById("content");

fetchData();
