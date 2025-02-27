<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "UndoGlyphModal",
  components: {
    ModalWrapperChoice
  },
  data() {
    return {
      showStoredGameTime: false,
    };
  },
  methods: {
    update() {
      this.showStoredGameTime = Enslaved.isUnlocked;
    },
    realityInvalidate() {
      this.emitClose();
      Modal.message.show("Glyph Undo can only undo with a Reality!",
        { closeEvent: GAME_EVENT.REALITY_RESET_AFTER });
    },
    handleYesClick() {
      this.emitClose();
      Glyphs.undo();
    },
  },
};
</script>

<template>
  <ModalWrapperChoice
    option="glyphUndo"
    @confirm="handleYesClick"
  >
    <template #header>
      {{ i18n("modal", "aboutToUndo") }}
    </template>
    <div
      class="c-modal-message__text c-text-wrapper"
    >
      {{ i18n("modal", "lastRemoved") }}
      <br>
      <div class="c-text-wrapper">
        {{ i18n("modal", "undoList").split("$")[0] }}
        {{ i18n("modal", "undoList").split("$")[1] }}
        {{ i18n("modal", "undoList").split("$")[2] }}
        {{ i18n("modal", "undoList").split("$")[3] }}
        {{ i18n("modal", "undoList").split("$")[4] }}
        <span v-if="showStoredGameTime">{{ i18n("modal", "undoList").split("$")[5] }}</span>
      </div>
      <br>
      {{ i18n("modal", "invalidStayInvalid") }}
    </div>
  </ModalWrapperChoice>
</template>

<style scoped>
.c-text-wrapper {
  text-align: left;
}
</style>