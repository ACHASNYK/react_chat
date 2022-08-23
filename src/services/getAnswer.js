import { postAnswer } from "./firebase";

export const getAnswer = async (id) => {

    const text = await fetch('https://api.chucknorris.io/jokes/random');
    let answer = await text.json();
            
    setTimeout(postAnswer, 5000, id, answer.value);
  
}