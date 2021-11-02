const API = "https://rickandmortyapi.com/api/character/";


async function getData(id) {
    const apiUrl = id ? `${API}${id}` : API;
    console.log(apiUrl);
    try {
        const response = await fetch(apiUrl);
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}


export default getData;