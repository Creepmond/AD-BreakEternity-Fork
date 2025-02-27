<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "ClearConstantsModal",
  components: {
    ModalWrapperChoice
  },
  data() {
    return {
      constantCount: 0,
    };
  },
  methods: {
    update() {
      this.constantCount = Object.keys(player.reality.automator.constants).length;
      if (this.constantCount === 0) this.emitClose();
    },
    deleteConstants() {
      player.reality.automator.constants = {};
      player.reality.automator.constantSortOrder = [];
    }
  }
};
</script>

<template>
  <ModalWrapperChoice
    @confirm="deleteConstants"
  >
    <template #header>
      {{ i18n("modal", "delConst") }}
    </template>
    <div class="c-modal-message__text">
      {{ i18n("modal", "delConstTextA") }}
      <br>
      <span class="l-lost-text">
        {{ i18n("modal", "delConstTextB", [quantify(i18n("modal", "constant"), constantCount)]) }}
      </span>
    </div>
    <template #confirm-text>
      {{ i18n("modal", "delAll") }}
    </template>
  </ModalWrapperChoice>
</template>

<style scoped>
.l-lost-text {
  font-weight: bold;
  color: var(--color-bad);
}
</style>
