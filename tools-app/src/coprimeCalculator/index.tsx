import React, { useEffect, useState } from "react";
import "./index.css";
import "../App.css"
import { useInput } from "../myCustomHooks/useInput";

function CoprimeCalculator() {
    const inputOne = useInput("", true, 1);
    const inputTwo = useInput("", true);
    // const [isCoprime, setIsCoprime] = useState(false);
    const [answerText, setAnswerText] = useState("Enter two positive number");
    const [answerClassName, setAnswerClassName] = useState("normal-text");

    // check if the two numbers are coprime when they change
    useEffect(() => {
        if (inputOne.value === "" || inputTwo.value === "") return;

        const isNewCoprime: boolean = gcd(inputOne.value, inputTwo.value) === 1;

        const newAnswerText = `${inputOne.value} and ${inputTwo.value} is ${isNewCoprime ? "" : "NOT"} coprime numbers`;
        setAnswerText(newAnswerText);

        const newAnswerClassName = getCoprimeClassName(inputOne.value, inputTwo.value, isNewCoprime);
        setAnswerClassName(newAnswerClassName);
    }, [inputOne.value, inputTwo.value]);

    return (
        <div>
            <h1>Coprime Calculator</h1>
            <input type="number" className="input" {...inputOne}></input>
            <input type="number" className="input" {...inputTwo}></input>
            <h2 className={answerClassName}>{answerText}</h2>
        </div>
    );
}

function getCoprimeClassName(a: string | number, b: string | number, isCoprime: boolean) {
    if (a === "" || b === "") return "normal-text";

    return isCoprime ? "coprime" : "not-coprime";
}

// Function to return
// gcd of a and b
function gcd(a: number, b: number): number {
    if (a === 0) return b;
    return gcd(b % a, a);
}

// // A simple method to evaluate
// // Euler Totient Function
// function phi(n: number): number {
//     let result = 1;
//     for (let i = 2; i < n; i++) {
//         if (gcd(i, n) == 1) result++;
//     }
//     return result;
// }

export default CoprimeCalculator;
