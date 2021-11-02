import getData from '../utils/getData.js';

async function home() {
    const characters = await getData()
    console.log(characters);
    return `
    <div class="characters">
        ${characters.results.map((character) =>
        `  <article class="character-item">
                <a href="#/${character.id}/"><h2>  ${character.name}</h2></a>

                    <img src="${character.image}" alt="${character.name}">
                   
            </article>
        `).join('')}
    </div>`;
}


export default home;


