import {useState} from 'react';
import Row from './Row';
import History from './History';
import {ITileProps} from './Tile';
import {IRowProps, RowBuilder } from './Row';

function App() {
    const [guess, setGuess] = useState<string>('');
    const [words, setWords] = useState<IRowProps>([]);
    const ans = "TESTE";

    function handleInput(event: React.FormEvent<HTMLInputElement>): void {
        if (guess.length <= 5)
            setGuess(event.currentTarget.value)
    }

    function addGuess(guess: string): void {
        const markedGuess: IRowProps = {
            letters: guess.split("").map(
                (letter: string, index: number) => {
                    let color;
                    if (letter === ans[index])
                        color = "green";
                    else if (ans.includes(letter))
                        color = "yellow";
                    else
                        color = "red";

                    return {
                        "value": letter,
                        "color": color
                    }
                }
            )
        }
        setWords([...words, markedGuess]);
    }

    function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            if (guess.length == 5) {
                addGuess(guess);
            }
            else {
                window.alert("Valor inválido!");
            }
        }
    }
    
    return (
        <div className="app">
            <Row letters={RowBuilder("PLVRA")} />
            <History words={words}/>
            <input className="guessInput" onInput={handleInput} onKeyDown={handleKeyDown}/>
        </div>
    );
}

export default App;
