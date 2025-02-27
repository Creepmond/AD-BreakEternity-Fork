<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "DeleteAutomatorScriptModal",
  components: {
    ModalWrapperChoice
  },
  props: {
    scriptID: {
      type: [String, Number],
      required: true
    }
  },
  methods: {
    handleYesClick() {
      const script = this.scriptID;
      const runningScriptID = AutomatorBackend.state.topLevelScript;

      AutomatorBackend.deleteScript(script);

      const scriptList = Object.values(player.reality.automator.scripts).map(sc => ({
        id: sc.id,
        name: sc.name,
      }));
      if (AutomatorBackend.isOn && runningScriptID !== script) {
        player.reality.automator.state.editorScript = runningScriptID;
      } else {
        // AutomatorBackend.deleteScript will create an empty script if necessary
        player.reality.automator.state.editorScript = scriptList[0].id;
      }
      AutomatorData.clearUndoData();
      EventHub.dispatch(GAME_EVENT.AUTOMATOR_SAVE_CHANGED);
    },
  },
};
</script>

<template>
  <ModalWrapperChoice @confirm="handleYesClick">
    <template #header>
      {{ i18n("modal", "delScript") }}
    </template>
    <div class="c-modal-message__text">
      {{ i18n("modal", "delScriptText") }}
    </div>
    <template #confirm-text>
      {{ i18n("modal", "del") }}
    </template>
  </ModalWrapperChoice>
</template>
