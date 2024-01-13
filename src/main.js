// import { example } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from ".dataset.js";

const rootElement = document.getElementById("root");
rootElement.appendChild(renderItems(data));
