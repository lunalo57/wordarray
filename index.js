// const target = document.getElementById('target');
// let array = [" développeur", " créateur", " farceur", "futur acteur", " mec balèze"];
// let wordIndex = 0;
// let letterIndex = 0;

// const createLetter = () => {
//     const letter = document.createElement('span');
//     target.appendChild(letter);

//     letter.textContent = array[wordIndex][letterIndex];

//     setTimeout(() => {
//         letter.remove();
//     }, 2800);
// }
// const loop = () => {
//     setTimeout(() => {
//         if(wordIndex >= array.length){
//             wordIndex = 0;
//             letterIndex = 0;
//             loop();
//         }else if(letterIndex < array[wordIndex].length){
//             console.log(array[wordIndex]);
//             createLetter();
//             letterIndex++;
//             loop();
//         }else{
//             wordIndex++;
//             letterIndex = 0;
//             setTimeout(() => {
//                 loop();
//             }, 2800)
//         }
//     }, 60);
// }
// loop();

let target = document.getElementById('target');
let array = ['beau gosse', 'rebel', 'ti pitchoun'];
let letterIndex = 0;
let wordIndex = 0;

//on introduit la lettre dans le span que l'on a créé
const createLetter = () => {
    const letter = document.createElement('span');
    target.appendChild(letter);
    letter.textContent = array[wordIndex][letterIndex];
    setTimeout(() => {
        letter.remove();
    },2800);
}

//ensuite on écrit toute la logique et on utilise une fonction récursive
const loop = () => {
    //On va lui donner un délai
    setTimeout(() => {
        //d'abord les conditions générales
        if(wordIndex >= array.length){
            wordIndex = 0;
            letterIndex = 0;
            loop();
        //ensuite l'index de la lettre par rapport à la longueur du mot
        }else if(letterIndex < array[wordIndex].length){
            createLetter();
            letterIndex++;
            loop();
        //pour finir, on change de mot et on recommence
        }else{
            wordIndex++;
            letterIndex = 0;
            setTimeout(() => {
                loop();
            },2800);
        }
    },60);
}
loop();