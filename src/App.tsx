import  {letters} from './helpers/letters'
import './App.css'
import { HangImage } from './components/HangImage'
import { useEffect, useState } from 'react'
import { getRandomWord } from './helpers/getRandomWord';


function App() {

const [ word, setWord ] = useState(getRandomWord); 
const [ hiddenWord, setHiddenWord ]  = useState('- ' .repeat( word.length ) );
const [ attempts, setAttempts ] =  useState(0)
const[ lose, setLose ] = useState( false );
const [ won, setWon ] = useState( false );

// Determinar si la persona perdió
useEffect( ()  => {
  if ( attempts >= 9 ) {
    setLose( true );
  }
}, [ attempts ]  );

// Determinar si la persona ganó
useEffect( () => {
  // Elimina los espacios para comparar correctamente
  const currentHiddenWord = hiddenWord.replace(/\s/g, '');
  if ( currentHiddenWord === word ) {
    setWon( true );
  }
}, [ hiddenWord, word ] );

const checkLetter = ( letter: string )  => {
if ( lose ) return;
if ( won ) return;

  // Verificar si la letra ya fue seleccionada
  if ( hiddenWord.includes(letter) ) {
    return;
  }

  // Verificar si la letra está en la palabra
  
if ( !word.includes(letter) ) {
   setAttempts( Math.min (attempts +1, 9) );  
  return;
}    

const hiddenWordArray = hiddenWord.split(' ');


  for ( let i = 0; i < word.length; i++ ) {
    if ( word[i] === letter ) {
      hiddenWordArray[i] = letter;
    
    }

  setHiddenWord( hiddenWordArray.join(' ') );
  }
 }

 // Reiniciar juego
const resetGame = () => {
const newWord = getRandomWord();

  setWord(newWord);
  setHiddenWord('- '.repeat(newWord.length));
  setAttempts(0);
  setLose(false);
  setWon(false);
}

  return (
    <div className="App">
        
        {/* Imagenes */}
        <HangImage imageNumber={ attempts } />

        {/* Palabra oculta */}
        <h3> { hiddenWord }</h3>

        {/* Contador de intentos */}
        <h3>Intentos: { attempts }</h3>
       
        {/* Mensaje si perdio */}
        {( lose ) 
        ? <h2>Perdió, La palabra era { word } </h2>
        : ' '
        }
        
        {/* Mensaje si ganó */}
        {( won ) 
        ? <h2>Felicidades; usted ganó!! </h2>
        : ' '
        }

        {/* Botones de letras */}
        {
          letters.map( (letter) => (
            <button 
            onClick={ () => checkLetter(letter) }
            key={ letter }>
                 {letter}
            </button>
          ))
        }

        {/* Botón de reiniciar juego */}
        <button  onClick= { resetGame } >Reiniciar Juego</button>
    </div>
  )
}

export default App
