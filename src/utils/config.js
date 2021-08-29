export const handleInputMaskAndPlaceholder = (language) => {
  const inputDatepickerMaskAndPlaceholder = {
      'pt-BR': {
          mask: 'dd/MM/yyyy',
          maskWithTime: 'dd/MM/yyyy | HH:mm  ',
          placeholder: 'DD/MM/AAAA',
          placeholderWithTime: 'DD/MM/AAAA | HH:mm',

      },
      'es-ES': {
          mask: 'dd/MM/yyyy',
          maskWithTime: 'dd/MM/yyyy | HH:mm',
          placeholder: 'DD/MM/AAAA',
          placeholderWithTime: 'DD/MM/AAAA | HH:mm',
      },
      'en-US': {
          mask: 'MM/dd/yyyy',
          maskWithTime: 'MM/dd/yyyy | HH:mm',
          placeholder: 'MM/DD/YYYY',
          placeholderWithTime: 'MM/DD/YYYY | HH:mm',

      },
  };

  if (language) {
      return inputDatepickerMaskAndPlaceholder[language];
  }

  return {
      mask: 'dd/MM/yyyy',
      maskWithTime: 'dd/MM/yyyy | HH:mm  ',
      placeholder: 'DD/MM/AAAA',
      placeholderWithTime: 'DD/MM/AAAA | HH:mm',
  };
};