<script>
import GlyphSetPreview from "@/components/GlyphSetPreview";
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "GlyphSetSaveDeleteModal",
  components: {
    ModalWrapperChoice,
    GlyphSetPreview
  },
  props: {
    glyphSetId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      glyphSet: []
    };
  },
  methods: {
    update() {
      this.glyphSet = cloneDeep(Glyphs.copyForRecords(player.reality.glyphs.sets[this.glyphSetId].glyphs));
    },
    handleYesClick() {
      player.reality.glyphs.sets[this.glyphSetId].glyphs = [];
      EventHub.dispatch(GAME_EVENT.GLYPH_SET_SAVE_CHANGE);
    },
  },
};
</script>

<template>
  <ModalWrapperChoice
    option="deleteGlyphSetSave"
    @confirm="handleYesClick"
  >
    <template #header>
      {{ i18n("modal", "delGlyphSet") }}
    </template>
    <div class="c-modal-message__text">
      {{ i18n("modal", "confirmDelGlyphSet") }}
      <GlyphSetPreview
        :is-in-modal="true"
        :glyphs="glyphSet"
      />
      {{ i18n("modal", "willNotDelGlyphs") }}
    </div>
    <template #confirm-text>
      {{ i18n("modal", "del") }}
    </template>
  </ModalWrapperChoice>
</template>
