import { linkedList } from "./linkedList.js";

const genshinCharacters = linkedList();

genshinCharacters.append("Paimon");
genshinCharacters.append("Aether");
genshinCharacters.append("Lumine");
genshinCharacters.append("Amber");
genshinCharacters.append("Venti");

console.log(genshinCharacters.toString());
