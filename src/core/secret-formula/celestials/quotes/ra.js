function i18nquote(quoteArray) {
  const returnArray = [];
  for (let value = 0; value < quoteArray.length; value++) {
    returnArray.push(i18n("quotes", quoteArray[value]));
  }
  return quoteArray;
}

export const raQuotes = {
  unlock: {
    id: 0,
    lines: i18nquote(["ra0q0", "ra0q1", "ra0q2", "ra0q3"])
  },
  realityEnter: {
    id: 1,
    lines: i18nquote(["ra1q0", "ra1q1", "ra1q2"])
  },
  teresaStart: {
    id: 2,
    requirement: () => Ra.pets.teresa.level >= 2,
    lines: i18nquote(["ra2q0", "ra2q1"])
  },
  teresaLate: {
    id: 3,
    requirement: () => Ra.pets.teresa.level >= 15,
    lines: i18nquote(["ra3q0", "ra3q1", "ra3q2"])
  },
  effarigStart: {
    id: 4,
    requirement: () => Ra.pets.effarig.level >= 2,
    lines: i18nquote(["ra4q0", "ra4q1"])
  },
  effarigLate: {
    id: 5,
    requirement: () => Ra.pets.effarig.level >= 15,
    lines: i18nquote(["ra5q0", "ra5q1", "ra5q2"])
  },
  enslavedStart: {
    id: 6,
    requirement: () => Ra.pets.enslaved.level >= 2,
    lines: i18nquote(["ra6q0"])
  },
  enslavedLate: {
    id: 7,
    requirement: () => Ra.pets.enslaved.level >= 15,
    lines: i18nquote(["ra7q0", "ra7q1", "ra7q2", "ra7q3"])
  },
  vStart: {
    id: 8,
    requirement: () => Ra.pets.v.level >= 2,
    lines: i18nquote(["ra8q0", "ra8q1"])
  },
  vLate: {
    id: 9,
    requirement: () => Ra.pets.v.level >= 15,
    lines: i18nquote(["ra9q0", "ra9q1"])
  },
  remembrance: {
    id: 10,
    requirement: () => Ra.remembrance.isUnlocked,
    lines: i18nquote(["ra10q0", "ra10q1", "ra10q2", "ra10q3"])
  },
  midMemories: {
    id: 11,
    requirement: () => Ra.totalPetLevel >= 50,
    lines: i18nquote(["ra11q0", "ra11q1", "ra11q2", "ra11q3"])
  },
  lateMemories: {
    id: 12,
    requirement: () => Ra.totalPetLevel >= 80,
    lines: i18nquote(["ra12q0", "ra12q1", "ra12q2", "ra12q3"])
  },
  maxLevels: {
    id: 13,
    requirement: () => Ra.totalPetLevel === Ra.maxTotalPetLevel,
    lines: i18nquote(["ra13q0", "ra13q1", "ra13q2", "ra13q3", "ra13q4", "ra13q5", "ra13q6", "ra13q7"])
  },
};