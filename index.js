import { getList } from "./services/api-calls/listFetch.js";
import { darkModeToggle } from "./component/ligthAndDarkMode.js";
import { searchFetch } from "./services/api-calls/searchFetch.js";
import { searchInput } from "./services/api-calls/searchFetch.js";
import { clickFavoriteButton } from "./component/favoriteButton.js";
import { openFavoriteContainer } from "./services/middleware/favoritsContainer.js";
import { stopLoader, runLoader } from "./component/loader.js";


runLoader();

if (searchInput.value === '') {
    getList();
    stopLoader();
} else {
    searchFetch();
}



//darkModeToggle
darkModeToggle();
clickFavoriteButton();
openFavoriteContainer();