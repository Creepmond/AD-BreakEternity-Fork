<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "UpgradeMechanicLockModal",
  components: {
    ModalWrapperChoice
  },
  props: {
    upgrade: {
      type: Object,
      required: true
    },
    isImaginary: {
      type: Boolean,
      required: true,
    },
    specialLockText: {
      type: String,
      required: false,
      default: null,
    }
  },
  computed: {
    upgradeStr() {
      return i18n("modal", "iUrU").split("$")[this.isImaginary ? 0 : 1];
    },
    lockEvent() {
      return this.specialLockText ?? this.upgrade.lockEvent;
    }
  },
  methods: {
    disableLock() {
      this.upgrade.setMechanicLock(false);
    }
  }
};
</script>

<template>
  <ModalWrapperChoice
    @confirm="disableLock"
  >
    <template #header>
      {{ i18n("modal", "conditionLockHeader", [upgradeStr]) }}
    </template>
    <div class="c-modal-message__text">
      {{ i18n("modal", "areYouSureCondition", [lockEvent, upgradeStr, upgrade.name]).split("$")[0] }}
      <span class="l-emphasis">
        {{ i18n("modal", "areYouSureCondition", [lockEvent, upgradeStr, upgrade.name]).split("$")[1] }}
      </span>
      <span :ach-tooltip="upgrade.requirement">
        <i class="fas fa-question-circle" />
      </span>
      <br>
      <br>
      {{ i18n("modal", "selectCancel") }}
      <br>
      <br>
      {{ i18n("modal", "neitherPerform") }}
    </div>
    <template #confirm-text>
      {{ i18n("modal", "disableLock") }}
    </template>
  </ModalWrapperChoice>
</template>

<style scoped>
.l-emphasis {
  font-weight: bold;
  color: var(--color-bad);
}
</style>
