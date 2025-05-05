<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "BreakInfinityModal",
  components: {
    ModalWrapperChoice
  },
  computed: {
    message() {
      const infinity = formatPostBreak(Number.MAX_VALUE, 2);
      return i18n("modal", "breakInfBaseText", [infinity,
        i18n("modal", "breakInfExtraA", [infinity]).split("$")[PlayerProgress.eternityUnlocked() ? 0 : 1],
        i18n("modal", "breakInfExtraB")]).split("\n");
    },
  },
  methods: {
    handleYesClick() {
      breakInfinity();
    }
  },
};
</script>

<template>
  <ModalWrapperChoice
    :show-cancel="false"
    @confirm="handleYesClick"
  >
    <template #header>
      {{ i18n("modal", "breakInfHeader") }}
    </template>
    <div class="c-modal-message__text">
      <span
        v-for="(line, index) in message"
        :key="index"
      >
        {{ line }} <br>
      </span>
    </div>
    <template #confirm-text>
      {{ i18n("modal", "break") }}
    </template>
  </ModalWrapperChoice>
</template>
