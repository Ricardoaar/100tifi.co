import getData from '../utils/getData.js'
import getHash from "../utils/getHash";

async function character() {
    const hash = getHash();
    const charData = await getData(hash);
    // noinspection JSUnresolvedVariable
    return `
        <div class="character">
            <article class="characters-card">
                <img src="${charData.image}" alt="">
                
            </article>
            <article class="characters-card">
                <h3>Episodes:
                ${charData.episode.length}</h3>
                </h3>    
                <h3>Status:
                    ${charData.status}

                </h3>
                <h3>Species:
                    ${charData.species}
                </h3>
                <h3>Gender:
                        ${charData.gender}

                </h3>
                <h3>Origin:
                    ${charData.origin.name}
                </h3>
                <h3>Last Location:
                    ${charData.location.name}
                </h3>
            </article>            
        </div>
    
    `
}

export default character;