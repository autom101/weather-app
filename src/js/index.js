//import img

//Import css
import "../css/reset.css";
import "../css/styles.css";

//Import js
import createDom from "./dom";
import createProgramLogic from "./program-logic";

onload = () => {
  createDom();
  createProgramLogic();
};
