<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";
import PrimaryButton from "@/components/PrimaryButton";

export default {
  name: "SpeedrunModeModal",
  components: {
    PrimaryButton,
    ModalWrapperChoice,
  },
  data() {
    return {
      onInfoPage: true,
      name: "",
      confirmPhrase: "",
    };
  },
  computed: {
    willStartRun() {
      return this.confirmPhrase === "Gotta Go Fast!";
    },
  },
  methods: {
    nextPage() {
      this.onInfoPage = false;
    },
    startRun() {
      if (!this.willStartRun) return;
      this.emitClose();
      Speedrun.prepareSave(Speedrun.generateName(this.name));
    },
  },
};
</script>

<template>
  <ModalWrapperChoice
    :show-cancel="!onInfoPage && !willStartRun"
    :show-confirm="!onInfoPage && willStartRun"
    confirm-class="o-primary-btn--width-medium c-modal-hard-reset-btn c-modal__confirm-btn"
    @confirm="startRun"
  >
    <template #header>
      {{ i18n("modal", "enterSpeedrun") }}
    </template>
    <div
      v-if="onInfoPage"
      class="c-modal-message__text"
    >
      {{ i18n("modal", "speedrunTextA") }}
      <br>
      <br>
      {{ i18n("modal", "speedrunTextB") }}
      <br>
      <br>
      <i>
        {{ i18n("modal", "speedrunTextC") }}
      </i>
      <br>
      <br>
      <PrimaryButton
        class="o-primary-btn--width-medium c-modal-hard-reset-btn c-modal__confirm-btn"
        @click="nextPage"
      >
        {{ i18n("modal", "continue") }}
      </PrimaryButton>
    </div>
    <div
      v-else
      class="c-modal-message__text"
    >
      {{ i18n("modal", "speedrunTextD") }}
      <input
        ref="name"
        v-model="name"
        type="text"
        class="c-modal-input c-modal-hard-reset__input"
        @keyup.esc="emitClose"
      >
      <br>
      <br>
      {{ i18n("modal", "speedrunTextE") }}
      <br>
      <br>
      {{ i18n("modal", "speedrunTextF") }}
      <br>
      <br>
      <div class="c-modal-hard-reset-danger">
        {{ i18n("modal", "speedrunTextG") }}
      </div>
      <input
        ref="confirmPhrase"
        v-model="confirmPhrase"
        type="text"
        class="c-modal-input c-modal-hard-reset__input"
        @keyup.esc="emitClose"
      >
    </div>
    <template #confirm>
      {{ i18n("modal", "startRun") }}
    </template>
    <template #cancel>
      {{ i18n("modal", "cancel") }}
    </template>
  </ModalWrapperChoice>
</template>
