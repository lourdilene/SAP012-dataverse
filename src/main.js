// import { example } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/dataset.js";

const rootElement = document.getElementById("root");
rootElement.appendChild(renderItems(data));
