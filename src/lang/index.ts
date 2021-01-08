import { Locales } from "./locales"

import en from "./locals/en.json"
import es from "./locals/es.json"

export const messages = {
  [Locales.EN]: en,
  [Locales.ES]: es
};


let selectIdiom = ''

if(localStorage.idiom){

  switch (localStorage.idiom) {
    case "en":
      selectIdiom = Locales.EN;
      break;
    case "es":
      selectIdiom = Locales.ES;
      break;
  
    default:
      break;
  }
  
} else {
  selectIdiom = Locales.EN;
}
export const defaultLocale = selectIdiom
