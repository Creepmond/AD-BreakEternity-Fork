<script>
import SecretAchievementRow from "./SecretAchievementRow";
import SwapAchievementImagesButton from "./SwapAchievementImagesButton";

export default {
  name: "SecretAchievementTab",
  components: {
    SecretAchievementRow,
    SwapAchievementImagesButton
  },
  computed: {
    rows: () => SecretAchievements.allRows,
  }
};
</script>

<template>
  <div class="l-achievements-tab">
    <div class="c-achievements-tab__header">
      <span>
        Secret Achievements are optional <SwapAchievementImagesButton /> give no bonuses.
      </span>
    </div>
    <div class="l-achievement-grid">
      <secret-achievement-row
        v-for="(row, i) in rows"
        :key="i"
        :row="row"
      />
    </div>
  </div>
</template>
