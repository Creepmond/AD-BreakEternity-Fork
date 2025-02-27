<script>
import ModalWrapper from "@/components/modals/ModalWrapper";
import PrimaryButton from "@/components/PrimaryButton";

export default {
  name: "PelleEffectsModal",
  components: {
    PrimaryButton,
    ModalWrapper,
  },
  computed: {
    nerfs() {
      return i18n("modal", "pelleNerfList", [
        format(Number.MAX_VALUE, 2),
        formatPercents(0.5),
        formatInt(10),
        formatX(2),
        formatPercents(0),
        formatInt(1)
      ]);
    }
  }
};
</script>

<template>
  <ModalWrapper>
    <template #header>
      {{ i18n("modal", "listOfDisabled") }}
    </template>
    <div class="pelle-effects-container">
      <p
        v-for="(nerf, idx) in nerfs"
        :key="idx"
      >
        {{ nerf }}
      </p>
    </div>
    <PrimaryButton
      class="o-primary-btn--width-medium c-modal-message__okay-btn c-modal__confirm-btn"
      @click="emitClose"
    >
      {{ i18n("modal", "okay") }}
    </PrimaryButton>
  </ModalWrapper>
</template>

<style scoped>
.pelle-effects-container {
  overflow-y: scroll;
  height: 40rem;
}

p {
  margin-bottom: 1rem;
}
</style>
