<script>
export default {
  name: "StudyStringLine",
  props: {
    tree: {
      type: Object,
      required: true,
    },
    intoEmpty: {
      type: Boolean,
      required: true,
    }
  },
  computed: {
    importDestString() {
      return i18n("modal", "emptyCurrent").split("$")[this.intoEmpty ? 0 : 1];
    }
  },
  methods: {
    formatTheoremCost(tt, st) {
      const strTT = `${formatWithCommas(tt)} TT`;
      const strST = `${formatWithCommas(st)} ST`;
      return st === 0 ? strTT : `${strTT} + ${strST}`;
    }
  },
};
</script>

<template>
  <div class="l-modal-import-tree__tree-info-line">
    <div v-if="tree.timeTheorems === 0 && tree.spaceTheorems === 0">
      <i>{{ i18n("modal", "notPurchase", [importDestString]) }}</i>
    </div>
    <div v-else>
      {{ i18n("modal", "importWill", [importDestString]) }}
      <br>
      {{ tree.newStudies }}
      {{ i18n("modal", "cost" [formatTheoremCost(tree.timeTheorems, tree.spaceTheorems)]) }}
    </div>
    <br>
  </div>
</template>
