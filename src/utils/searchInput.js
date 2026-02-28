export const searchInput = () => {
    const inputSearch = document.querySelector('#searchInput')
    const buttonSearch = document.querySelector('#searchButton');

    if (inputSearch) {
        inputSearch.addEventListener("keyup", (e) => {
            if (e.key === "Enter") {
                location.hash = `#/search/${e.target.value}`;
            }
        });
    } else{
        console.error("inputSearch:",inputSearch);        
    }
    if (buttonSearch) {
        buttonSearch.addEventListener("click", () => {
            // alert(inputSearch.value);
            location.hash = `#/search/${inputSearch.value}`;
        });
    } else{
        console.error("buttonSearch:",buttonSearch);
    }
}