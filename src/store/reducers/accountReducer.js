
import {  convertOperation } from "../../config/operations";
import { actionTypes } from "../actionTypes";

const initialState = {
  balance: 0,
  convertedBalance: null,
  balanceCurrency: null,
  currencySymbol: 'R$',
  currency: "real",
  historic: [],
}
const accountReducer = (state = initialState, action) => {
  const {payload, type} = action;

  switch(type) {
    case actionTypes.MAKE_DEPOSIT:
      {
        const newOperationHistory = {
          id: Math.random().toString(16).substring(1),
          date: new Date().toLocaleDateString("pt-BR"),
          operation: 'deposit',
          value: payload
        }
        
        return {
          ...state,
          balance: parseFloat(state.balance) + parseFloat(payload),
          historic: [
            ...state.historic,
            newOperationHistory
          ]
        }
      }
    case actionTypes.SET_CURRENCY:
      {
        const currencyType = payload.split('-')[0];
        const currencyTypeSymbol = payload.split('-')[1];
        const targetCurrency = payload.split('-')[2];
        
        
        
        if(targetCurrency === 'BRLCotation'){
          return {
            ...state,
            currencySymbol: currencyTypeSymbol,
            currency: currencyType,
            balanceCurrency: null  
          }
        }
        const result = convertOperation(state.balance, 'BRLCotation',targetCurrency);

        return {
          ...state,
          currencySymbol: currencyTypeSymbol,
          currency: currencyType,
          balanceCurrency: result.amount
        }
      }

      case actionTypes.MAKE_CONVERTION:
        {
          const newOperationHistory = {
            id: Math.random().toString(16).substring(1),
            date: new Date().toLocaleDateString("pt-BR"),
            operation: 'convertion',
            value: parseFloat(payload.amount),
            iof: payload.iof,
            spread: payload.spread
          }
          return {
            ...state,
            convertedBalance: payload,
            historic: [
              ...state.historic,
              newOperationHistory
            ]
          }
        }
    default:
      return state;
  }
}

export default accountReducer;