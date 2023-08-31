//index.js
import {createRouter} from "../core/core";
import Home from "./Home";
import Gallery from "./Gallery";
import Important from "./Important";

export default createRouter([
  {path: '#/', component: Home},
  {path: '#/gallery', component: Gallery},
  {path: '#/important', component: Important}
])