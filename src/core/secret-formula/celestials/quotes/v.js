function i18nquote(quoteArray) {
  const returnArray = [];
  for (value in quoteArray) {
    returnArray.push(i18n("quotes", quoteArray[value]));
  }
  return quoteArray;
}

export const vQuotes = {
  initial: {
    id: 0,
    get lines() { return i18nquote(["v0q0"]); }
  },
  unlock: {
    id: 1,
    get lines() { return i18nquote(["v1q0", "v1q1", "v1q2", "v1q3"]); }
  },
  realityEnter: {
    id: 2,
    get lines() { return i18nquote(["v2q0", "v2q1", "v2q2"]); }
  },
  realityComplete: {
    id: 3,
    get lines() { return i18nquote(["v3q0", "v3q1", "v3q2", "v3q3"]); }
  },
  achievement1: {
    id: 4,
    requirement: () => V.spaceTheorems >= 1,
    get lines() { return i18nquote(["v4q0", "v4q1"]); }
  },
  achievement6: {
    id: 5,
    requirement: () => V.spaceTheorems >= 6,
    get lines() { return i18nquote(["v5q0", "v5q1"]); }
  },
  hex1: {
    id: 6,
    requirement: () => player.celestials.v.runUnlocks.filter(a => a === 6).length >= 1,
    get lines() { return i18nquote(["v6q0", "v6q1"]); }
  },
  achievement12: {
    id: 7,
    requirement: () => V.spaceTheorems >= 12,
    get lines() { return i18nquote(["v7q0", "v7q1", "v7q2"]); }
  },
  achievement24: {
    id: 8,
    requirement: () => V.spaceTheorems >= 24,
    get lines() { return i18nquote(["v8q0", "v8q1"]); }
  },
  hex3: {
    id: 9,
    requirement: () => player.celestials.v.runUnlocks.filter(a => a === 6).length >= 3,
    get lines() { return i18nquote(["v9q0", "v9q1"]); }
  },
  allAchievements: {
    id: 10,
    requirement: () => V.spaceTheorems >= 36,
    get lines() { return i18nquote(["v10q0", "v10q1", "v10q2", "v10q3", "v10q4"]); }
  }
};
