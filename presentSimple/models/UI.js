export class UI {
    
    constructor() {}

    /**
     * 
     * @param {string} text es la pregunta a renderizar
     */

    showQuestion(text){

        const questionTitle = document.getElementById('question')
        questionTitle.innerText = text;

    }

    /**
     * 
     * @param {string} choices pasamos las respuestas 
     */

    showChoices(choices, callback){
        const choicesContainer = document.getElementById('choices');
        choicesContainer.innerHTML = '';

        for (let i =0; i<  choices.length; i++){
            const button = document.createElement('button')
            button.innerText = choices[i];
            button.className = 'button';
            button.addEventListener('click', () => callback(choices[i]));

            choicesContainer.append(button);
        }

    }

    /**
     * 
     * @param {number} score es la puntuación 
     */

    showScores(score){

        const quizEndHTML = `
            <h1>Result</h1>
            <h2>Your hits: ${score}</h2>
            </br>
            <a class = "active" href="/index.html">Start</a>`;
        
        const element = document.getElementById("quiz");
        element.innerHTML = quizEndHTML; 

    }

    

    showProgress(currentIndex, total) {
        const element = document.getElementById('progreso');
        element.innerHTML = `Question ${currentIndex} of ${total}`

    }

    showProcen(score){
        const element = document.getElementById('porcentaje');
        element.innerHTML = `Acert ${score}`
    }


}