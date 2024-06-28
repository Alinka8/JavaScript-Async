const apiKey = "072d537317b67bc684ad7f2d1ccae091";
const apiUrl = `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=072d537317b67bc684ad7f2d1ccae091`;

async function fetchCharacters() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.data.results;
  } catch (error) {
    console.error("Error fetching characters:", error);
  }
}

async function displayCharacters() {
  const characters = await fetchCharacters();
  const charactersContainer = document.getElementById("charactersContainer");

  characters.forEach((character) => {
    const characterDiv = document.createElement("div");
    characterDiv.className = "character";

    characterDiv.innerHTML = `
            <h3>${character.name}</h3>
            <p>${character.description || "No description available"}</p>
            <img src="${character.thumbnail.path}.${
      character.thumbnail.extension
    }" alt="${character.name}" width="100%">
        `;

    charactersContainer.appendChild(characterDiv);
  });
}

window.onload = displayCharacters;
