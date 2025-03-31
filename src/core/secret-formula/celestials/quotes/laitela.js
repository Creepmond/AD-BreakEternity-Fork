function i18nquote(quoteArray) {
  const returnArray = [];
  for (let value = 0; value < quoteArray.length; value++) {
    returnArray.push(i18n("quotes", quoteArray[value]));
  }
  return quoteArray;
}

export const laitelaQuotes = {
  unlock: {
    id: 0,
    lines: i18nquote(["lai0q0", "lai0q1", "lai0q2", "lai0q3", "lai0q4", "lai0q5", "lai0q6", "lai0q7", "lai0q8", "lai0q9"])
  },
  // Note: This can be done immediately after unlocking Lai'tela
  firstDestabilize: {
    id: 1,
    requirement: () => player.celestials.laitela.difficultyTier >= 1,
    lines: i18nquote(["lai1q0", "lai1q1", "lai1q2", "lai1q3", "lai1q4", "lai1q5", "lai1q6"])
  },
  // Note: This happens about an hour or two before singularities
  secondDestabilize: {
    id: 2,
    requirement: () => player.celestials.laitela.difficultyTier >= 2,
    lines: i18nquote(["lai2q0", "lai2q1", "lai2q2", "lai2q3", "lai2q4", "lai2q5", "lai2q6"])
  },
  firstSingularity: {
    id: 3,
    requirement: () => Currency.singularities.gte(1),
    lines: i18nquote(["lai3q0", "lai3q1", "lai3q2", "lai3q3", "lai3q4", "lai3q5", "lai3q6", "lai3q7"])
  },
  // Note: Shown when unlocking DMD3 requirement is auto-condensing 20 singularities and it happens around ~200 total
  thirdDMD: {
    id: 5,
    lines: i18nquote(["lai5q0", "lai5q1", "lai5q2", "lai5q3", "lai5q4", "lai5q5"])
  },
  // Note: This happens around e10-e11 singularities
  annihilation: {
    id: 4,
    lines: i18nquote(["lai4q0", "lai4q1", "lai4q2", "lai4q3", "lai4q4", "lai4q5", "lai4q6", "lai4q7"])
  },
  // Note: This happens near e18 singularities
  halfDimensions: {
    id: 6,
    requirement: () => player.celestials.laitela.difficultyTier >= 4,
    lines: i18nquote(["lai6q0", "lai6q1", "lai6q2", "lai6q3", "lai6q4", "lai6q5", "lai6q6", "lai6q7"])
  },
  // Note: Shown when the first row 5 iM upgrade is purchased (~e26 singularities)
  finalRowIM: {
    id: 7,
    lines: i18nquote(["lai7q0", "lai7q1", "lai7q2", "lai7q3", "lai7q4", "lai7q5", "lai7q6", "lai7q7"])
  },
  // Note: This is around when all infinite milestones hit increased scaling
  increasedMilestoneScaling: {
    id: 8,
    requirement: () => Currency.singularities.gte(1e40),
    lines: i18nquote(["lai8q0", "lai8q1", "lai8q2", "lai8q3"])
  },
  fullDestabilize: {
    id: 9,
    requirement: () => player.celestials.laitela.difficultyTier >= 8,
    lines: i18nquote(["lai9q0", "lai9q1", "lai9q2", "lai9q3", "lai9q4", "lai9q5"])
  },
};