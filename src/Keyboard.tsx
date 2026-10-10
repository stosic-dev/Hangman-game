import style from './Keyboard.module.css'

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]

type KeyboardProps = {
    disabled?: boolean
    activeLetters: string[],
    inactiveLetters: string[],
    addGuessedLetter: (letter: string) => void
}

export function Keyboard({ activeLetters, inactiveLetters, addGuessedLetter, disabled=false }: KeyboardProps) {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
                gap: ".5rem"
            }}
        >
            {KEYS.map(key => {
                const isActive = activeLetters.includes(key)
                const isInActive = inactiveLetters.includes(key)
                return <button onClick={() => addGuessedLetter(key)} 
                className={`${style.btn} ${isActive ? style.active : ""} 
                            ${isInActive ? style.inactive : ""}`}
                disabled = {isInActive || isActive || disabled}
                key={key}>{key}</button>
            })}
        </div>
    )
}