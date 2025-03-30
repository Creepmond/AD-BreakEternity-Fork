function i18nquote(quoteArray, showCelName = true) {
  const returnArray = [];
  for (let value = 0; value < quoteArray.length; value++) {
    returnArray.push(showCelName === false && value === 0 ? { text: i18n("quotes", quoteArray[value]), showCelestialName: showCelName } : i18n("quotes", quoteArray[value]));
  }
  return quoteArray;
}

export const effarigQuotes = {
  initial: {
    id: 0,
    lines: i18nquote(["effarig0q0", "effarig0q1", "effarig0q2", "effarig0q3", "effarig0q4"])
  },
  unlockWeights: {
    id: 1,
    lines: i18nquote(["effarig1q0"])
  },
  unlockGlyphFilter: {
    id: 2,
    lines: i18nquote(["effarig2q0"])
  },
  unlockSetSaves: {
    id: 3,
    lines: i18nquote(["effarig3q0"])
  },
  unlockRun: {
    id: 4,
    lines: i18nquote(["effarig4q0", "effarig4q1", "effarig4q2"])
  },
  completeInfinity: {
    id: 5,
    lines: i18nquote(["effarig5q0", "effarig5q1", "effarig5q2"], false)
  },
  completeEternity: {
    id: 6,
    lines: i18nquote(["effarig6q0", "effarig6q1", "effarig6q2", "effarig6q3"], false)
  },
  completeReality: {
    id: 7,
    lines: i18nquote(["effarig7q0", "effarig7q1", "effarig7q2", "effarig7q3", "effarig7q4"], false)
  }
};
