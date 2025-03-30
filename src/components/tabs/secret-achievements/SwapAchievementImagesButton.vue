<script>
export default {
  name: "SwapAchievementImagesButton",
  data() {
    return {
      canSwapImages: false,
      isCancerImages: false,
    };
  },
  computed: {
    swapImagesButton() {
      return this.isCancerImages ? "\uE010" : "and";
    },
    imageSwapperStyleObject() {
      return this.canSwapImages ? { "cursor": "pointer" } : {};
    }
  },
  methods: {
    update() {
      const isCancerTheme = Theme.current().name === "S4";
      this.canSwapImages = !isCancerTheme && Themes.find("S4").isAvailable();
      this.isCancerImages = isCancerTheme || player.secretUnlocks.secretCancerAchievements;
    },
    swapImages() {
      if (this.canSwapImages) {
        player.secretUnlocks.secretCancerAchievements = !player.secretUnlocks.secretCancerAchievements;
      }
    }
  }
};
</script>

<template>
  <span
    :style="imageSwapperStyleObject"
    @click="swapImages"
  >{{ swapImagesButton }}</span>
</template>
