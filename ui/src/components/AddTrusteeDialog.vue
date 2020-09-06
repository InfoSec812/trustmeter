<template>
  <q-dialog :value="value">
    <q-card style="width: 80vw; text-align: center;">
      <q-card-section>
        <q-toolbar>
          <q-toolbar-title style="align-content: center;">Add Trustee</q-toolbar-title>
        </q-toolbar>
      </q-card-section>
      <q-card-section>
        <q-input hint="Name" v-model="name" />
      </q-card-section>
      <q-card-section>
        <q-item-label class="col-4" >Initial Trust Score</q-item-label>
      </q-card-section>
      <q-card-section>
        <q-knob class="col-8" v-model="initialScore" size="10rem" track-color="grey-4" color="green" :show-value="true" />
      </q-card-section>
      <q-card-section>
        <q-btn label="Add" @click="addTrustee()" />
        <q-btn label="Cancel" @click="closeDialog()" />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { Vue, Component, Prop, Model } from 'vue-property-decorator';
import { Trustee } from 'src/store/trustees/state';

@Component
export default class AddTrusteeDialog extends Vue {
  @Model() value = false;
  @Prop(Function) closeDialog?: Function;

  name = '';
  initialScore = 0;

  addTrustee(): void {
    const newTrustee: Trustee = { name: this.name, score: this.initialScore, history: []};
    this.$store.commit('trustees/addTrustee', { trustee: newTrustee });
    this.name = '';
    this.initialScore = 0;
    this.closeDialog();
  }
}
</script>

<style scoped>

</style>
