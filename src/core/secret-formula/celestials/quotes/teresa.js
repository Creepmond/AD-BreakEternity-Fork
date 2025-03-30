function i18nquote(quoteArray) {
  const returnArray = [];
  for (let value = 0; value < quoteArray.length; value++) {
    returnArray.push(i18n("quotes", quoteArray[value]));
  }
  return quoteArray;
}

export const teresaQuotes = {
  initial: {
    id: 0,
    lines: i18nquote(["teresa0q0", "teresa0q1", "teresa0q2", "teresa0q3", "teresa0q4"])
  },
  unlockReality: {
    id: 1,
    lines: i18nquote(["teresa1q0"])
  },
  completeReality: {
    id: 2,
    lines: i18nquote(["teresa2q0"])
  },
  effarig: {
    id: 3,
    lines: i18nquote(["teresa3q0", "teres3q1"])
  }
};
