//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  episodeList.forEach(createACard);
}

function padNumber(n) {
  return n.toString().padStart(2, "0");
}

function makeEpisodeNumber(episode) {
  return `S${padNumber(episode.season)}E${padNumber(episode.number)}`;
}

function createACard(episode) {
  
  let card = document.createElement("div");
  let root = document.querySelector("#root");
  root.appendChild(card);

  let episodeCode = makeEpisodeNumber(episode);
  let h1 = document.createElement("h1");
  h1.innerHTML = `${episode.name} - ${episodeCode}`;
  

  let cardSummary = document.createElement("span");
  cardSummary.innerHTML = episode.summary;
 

  let episodeImage = document.createElement("img");
  episodeImage.src = episode.image.medium;
  episodeImage.alt = "";

  card.appendChild(h1);
  card.appendChild(episodeImage);
  card.appendChild(cardSummary);
  return card;
}
// let credits = document.createElement("span");                       
// let creditText = document.createTextNode("This site was created using data from TV Maze");  
// let creditLink = document.createElement("a");

// credits.appendChild(creditText); 
// creditText.appendChild(creditLink);                                       
// document.body.appendChild(credits);     

// function layoutOneCard() {
// let h1 = document.createElement("episodeHeader");

// }

window.onload = setup;

