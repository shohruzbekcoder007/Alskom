import { action, observable, toJS } from "mobx";

export const globalState = observable({
  language: "ru",
  contract_number: '',
  customer: 'fiz',
});

export const setLanguage = action((language) => {
  globalState.language = language;
});

export const setContractNumber = action((number) => {
  globalState.contract_number = number;
});

export const setCustomer = action((customer) => {
  globalState.customer = customer;
});