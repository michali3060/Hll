const videos1 = [
  "img/video1.mp4",
  "img/video2.mp4",
  "img/video3.mp4"
];

const videos2 = [
  
];


function createPlayer(playerId, videos) {
  let index = 0;
  const player = document.getElementById(playerId);

  function playVideo() {
    player.src = videos[index];
    player.play();
  }

  player.addEventListener("ended", () => {
    index++;

    if (index >= videos.length) {
      index = 0;
    }

    playVideo();
  });

  playVideo();
}


createPlayer("player1", videos1);
createPlayer("player2", videos2);


function toggleCard() {
  const content = document.getElementById("card1");
  content.classList.toggle("expanded");
}
