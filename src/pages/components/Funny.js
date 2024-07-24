import React, { useEffect } from 'react';
import '../styles/Funny.css';

const Funny = () => {
    useEffect(() => {
        const shuffleText = (selector, characters) => {
            const element = document.querySelector(selector);
            if (element) {
                setInterval(() => {
                    element.innerText = element.innerText.split("").map(letter => characters[Math.floor(Math.random() * characters.length)]).join("");
                }, 80);
            }
        };

        // Define character sets
        const uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        const lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '~', '`', '"', '\\', ';', ':', '{', '}', '<', '?', '.', ','];
        const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

        // Shuffle text for each category
        shuffleText(".uppercase", uppercaseLetters);
        shuffleText(".symb", symbols);
        shuffleText(".nums", numbers);
        shuffleText(".lowercase", lowercaseLetters);
        shuffleText(".uppercase1", uppercaseLetters);
        shuffleText(".symb1", symbols);
        shuffleText(".nums1", numbers);
        shuffleText(".lowercase1", lowercaseLetters);

    }, []);

    return (
        <div className="crack" id="crack">
            <div className="wordShuffeler">
                <h1 className="funnytexts">
                    Bruteforcing your <span>Passwords!!</span>
                </h1>
                <br/>
                <div className="crackingVisuals" id="crackinVisuals">
                    <p className="uppercase">AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
                    <p className="nums">AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
                    <p className="symb">AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
                    <p className="lowercase">AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
                    <p className="nums1">AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
                    <p className="symb1">AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
                    <p className="uppercase1">AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
                    <p className="lowercase1">AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
                </div>
            </div>
        </div>
    );
}

export default Funny;
