function i18nquote(quoteArray, showCelName = true) {
  const returnArray = [];
  for (value in quoteArray) {
    returnArray.push(showCelName === false && value === 2 ? { text: i18n("quotes", quoteArray[value]), showCelestialName: showCelName } : i18n("quotes", quoteArray[value]));
  }
  return quoteArray;
}

export const enslavedQuotes = {
  initial: {
    id: 0,
    get lines() { return i18nquote(["enslaved0q0", "enslaved0q1", "enslaved0q2", "enslaved0q3", "enslaved0q4", "enslaved0q5"]); }
  },
  unlockRun: {
    id: 1,
    get lines() { return i18nquote(["enslaved1q0", "enslaved1q1"]); }
  },
  startRun: {
    id: 2,
    get lines() { return i18nquote(["enslaved2q0", "enslaved2q1", "enslaved2q2"]); }
  },
  hintUnlock: {
    id: 3,
    get lines() { return i18nquote(["enslaved3q0", "enslaved3q1", "enslaved3q2"], false); }
  },
  ec6C10: {
    id: 4,
    get lines() { return i18nquote(["enslaved4q0"]); }
  },
  completeReality: {
    id: 5,
    get lines() { return i18nquote(["enslaved5q0", "enslaved5q1", "enslaved5q2"]); }
  },
};
