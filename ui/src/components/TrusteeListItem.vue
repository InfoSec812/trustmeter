<template>
  <q-item
    clickable
    tag="a"
    target="_blank"
    :href="link"
  >
    <q-item-section>
      <!-- Place mini trust graph here -->
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ trustee.name }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Trustee } from '../store/trustees/state';

@Component
export default class TrusteeListItem extends Vue {
  @Prop() trustee: Trustee
}
</script>

<style scoped>

</style>
