import { parameters } from "./parameters";

export const convertOperation = (amount, currencyBase, currencyTarget) => {
    let resultValue = applyIof(amount);
    let value = applySpread(resultValue);

    let convertedResult= startConverting(value, currencyBase, currencyTarget)

    return convertedResult
}

const applyIof = (value) => {
    const parsedValue = parseFloat(value)

    const resultIOF = parsedValue * parseFloat(parameters.iof / 100);
    return {
        amount: parsedValue + resultIOF, 
        iof: resultIOF.toFixed(2)
    };
}

const applySpread = (value) => {
    
    const parsedValue = parseFloat(value.amount)

    const resultSpread = parsedValue * parseFloat(parameters.spread / 100);
    return {
        ...value,
        amount: parsedValue + resultSpread, 
        spread: resultSpread.toFixed(2)
    };
}

const startConverting = (value, currencyBase, currencyTarget) => {
    const convertedResult = value.amount * parameters[currencyBase][currencyBase] / parameters[currencyBase][currencyTarget];
    return {        
        ...value,
        amount: convertedResult.toFixed(2),
    }
}