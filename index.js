import { getList } from "./services/api-calls/listFetch.js";
import { darkModeToggle } from "./component/ligthAndDarkMode.js"; 
import { searchFetch } from "./services/api-calls/searchFetch.js";
import { searchInput } from "./services/api-calls/searchFetch.js";
import { clickFavoriteButton } from "./component/favoriteButton.js"; 
import { openFavoriteContainer } from "./services/middleware/favoritsContainer.js";
import { stopLoader , runLoader } from "./component/loader.js";


if(!getList()){
    runLoader(); 
} else{
    stopLoader();
}


if (searchInput) {
    searchFetch();     
} else { 
    getList(); 
}



//darkModeToggle
darkModeToggle(); 
clickFavoriteButton(); 

openFavoriteContainer();