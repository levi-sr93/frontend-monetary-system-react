import { convertOperation } from "../../config/operations"
import { actionTypes } from "../actionTypes"

export const setCurrency = (currency) => {
  return {
    type: actionTypes.SET_CURRENCY,
    payload: currency
  }
}

export const makeDeposit = (amount) => {
  return {
    type: actionTypes.MAKE_DEPOSIT,
    payload: amount
  }
}

export const makeConvertion = (amount, selectedCurrencyBase, selectedCurrencyTarget) => {
  const value = convertOperation(amount, selectedCurrencyBase, selectedCurrencyTarget);

  return {
    type: actionTypes.MAKE_CONVERTION,
    payload: value
  }

}