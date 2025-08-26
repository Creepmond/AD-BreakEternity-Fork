<script>
import OpenModalHotkeysButton from "@/components/OpenModalHotkeysButton";
import OptionsButton from "@/components/OptionsButton";

export default {
  name: "OptionsCheatsTab",
  components: {
    OpenModalHotkeysButton,
    OptionsButton,
  },
  data() {
    return {
      creditsClosed: false,
    };
  },
  methods: {
    update() {
      this.creditsClosed = GameEnd.creditsEverClosed;
    },
  }
};
</script>

<template>
  <div class="l-options-tab">
    <div class="l-options-grid">
      <div class="l-options-grid__row">
        <OptionsButton
          class="o-primary-btn--option_font-x-large"
          :class="{ 'o-pelle-disabled-pointer': creditsClosed }"
          onclick="
            simulateTime(24 * 3600, false, true)
            Modal.hideAll()
          "
        >
          Simulate Day
        </OptionsButton>
      </div>
      <OpenModalHotkeysButton />
    </div>
  </div>
</template>

<style scoped>
.l-toggle-button {
  font-size: 12px;
}
</style>
