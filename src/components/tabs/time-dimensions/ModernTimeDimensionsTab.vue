<script>
import NewTimeDimensionRow from "./ModernTimeDimensionRow";
import PrimaryButton from "@/components/PrimaryButton";

export default {
  name: "NewTimeDimensionsTab",
  components: {
    PrimaryButton,
    NewTimeDimensionRow
  },
  data() {
    return {
      totalUpgrades: new Decimal(0),
      multPerTickspeed: new Decimal(0),
      tickspeedSoftcap: new Decimal(0),
      timeShards: new Decimal(0),
      upgradeThreshold: new Decimal(0),
      shardsPerSecond: new Decimal(0),
      incomeType: "",
      areAutobuyersUnlocked: false,
      showLockedDimCostNote: true,
    };
  },
  computed: {
    costIncreases: () => TimeDimension(1).costIncreaseThresholds,
  },
  methods: {
    update() {
      this.showLockedDimCostNote = !TimeDimension(8).isUnlocked && player.realities.gte(1);
      this.totalUpgrades.copyFrom(player.tickspeed.gained);
      this.multPerTickspeed.copyFrom(FreeTickspeed.multToNext);
      this.tickspeedSoftcap.copyFrom(FreeTickspeed.softcap);
      this.timeShards.copyFrom(Currency.timeShards);
      this.upgradeThreshold.copyFrom(FreeTickspeed.fromShards(Currency.timeShards.value).nextShards);
      this.shardsPerSecond.copyFrom(TimeDimension(1).productionPerSecond);
      this.incomeType = i18n("eter", "income").split("$")[EternityChallenge(7).isRunning ? 0 : 1];
      this.areAutobuyersUnlocked = Autobuyer.timeDimension(1).isUnlocked;
    },
    maxAll() {
      tryUnlockTimeDimensions();
      maxAllTimeDimensions();
    },
    toggleAllAutobuyers() {
      toggleAllTimeDims();
    }
  }
};
</script>

<template>
  <div class="l-time-dim-tab l-centered-vertical-tab">
    <div class="c-subtab-option-container">
      <PrimaryButton
        class="o-primary-btn--subtab-option"
        @click="maxAll"
      >
        {{ i18n("eter", "maxall") }}
      </PrimaryButton>
      <PrimaryButton
        v-if="areAutobuyersUnlocked"
        class="o-primary-btn--subtab-option"
        @click="toggleAllAutobuyers"
      >
        {{ i18n("eter", "toggleauto") }}
      </PrimaryButton>
    </div>
    <div>
      <p>
        {{ i18n("eter", "youhavegained", [
          `<span class="c-time-dim-description__accent">${formatInt(totalUpgrades)}</span>`,
          `<span class="c-time-dim-description__accent">${format(timeShards, 2, 1)}</span>`
        ]) }}
      </p>
      <p>
        {{ i18n("eter", "nexttsupg", [
          `<span class="c-time-dim-description__accent">${format(upgradeThreshold, 2, 1)}</span>`,
          `<span class="c-time-dim-description__accent">${formatX(multPerTickspeed, 2, 2)}</span>`
        ]) }}
      </p>
    </div>
    <div>
      {{ i18n("eter", "scaleisquartic", [formatInt(tickspeedSoftcap)]) }}
    </div>
    <div> {{ i18n("eter", "gaining", [format(shardsPerSecond, 2, 0), incomeType]) }}</div>
    <div class="l-dimensions-container">
      <NewTimeDimensionRow
        v-for="tier in 8"
        :key="tier"
        :tier="tier"
        :are-autobuyers-unlocked="areAutobuyersUnlocked"
      />
    </div>
    <div>
      {{ i18n("eter", "tdcostjump" [format(costIncreases[0], 2, 2), format(costIncreases[1]), format(costIncreases[2])]) }}
      <br>
      <div v-if="showLockedDimCostNote">
        {{ i18n("eter", "seeEPcost") }}
      </div>
      {{ i18n("eter", "td8wontinc", [format(1e8)]) }}
    </div>
  </div>
</template>
