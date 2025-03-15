import { Effarig } from "./effarig";
import { Enslaved } from "./enslaved";
import { Laitela } from "./laitela/laitela";
import { Pelle } from "./pelle/pelle";
import { Ra } from "./ra/ra";
import { Teresa } from "./teresa";
import { V } from "./V";

export const Celestials = {
  teresa: Teresa,
  effarig: Effarig,
  enslaved: Enslaved,
  v: V,
  ra: Ra,
  laitela: Laitela,
  pelle: Pelle
};

GameDatabase.celestials.descriptions = [
  {
    name: "Teresa",
    effects() { return i18n("chall", "teresa", [format(0.55, 2, 2)]); },
  },
  {
    name: "Effarig",
    effects() { return i18n("chall", "effarig", [formatInt(Effarig.glyphLevelCap)]); },
    description() { return i18n("chall", "effarigdesc"); },
  },
  {
    name: "The Nameless Ones",
    effects() { return i18n("chall", "enslaved", [formatInt(5000), formatInt(1), format(0.55, 2, 2)]); },
  },
  {
    name: "V",
    effects() { return i18n("chall", "vMain", [() => (Ra.unlocks.unlockGlyphAlchemy.canBeApplied ? i18n("chall", "vAdditional") : "")]); },
  },
  {
    name: "Ra",
    effects() { return i18n("chall", "ra", [formatInt(4), formatX(1.1245, 0, 3)]); },
  },
  {
    name: "Lai'tela",
    effects() {
      const disabledDims = i18n("chall", "laidisabled").split("$")[Laitela.difficultyTier];
      const disabledText = Laitela.difficultyTier === 0
        ? ""
        : i18n("chall", "laidisabledmain", [disabledDims]);

      return i18n("chall", "laiMain", [formatInt(1), formatInt(10), disabledText]);
    },
    description() { return i18n("chall", "laidesc", [formatPercents(1), formatInt(30), formatInt(8), formatX(8)]); },
  },

];
