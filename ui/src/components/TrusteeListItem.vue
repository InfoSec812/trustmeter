<template>
  <q-item
    clickable
    tag="a"
    v-ripple
    :active="isSelected"
    active-class="isActive"
    @click="loadIndex(id)"
  >
    <q-item-section class="col-2">
      <color-progress-circle :score="trustee.score" />
    </q-item-section>
    <q-item-section class="col-grow">
      <q-item-label>{{ trustee.name }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Trustee } from '../store/trustees/state';
import ColorProgressCircle from 'components/ColorProgressCircle.vue';

@Component({
  components: { ColorProgressCircle },
  computed: {
    isSelected: {
      get () {
        return this.$route.params.id == this.$props.id ? 'active' : null;
      }
    }
  }
})
export default class TrusteeListItem extends Vue {
  @Prop(Trustee) trustee;
  @Prop() id: string;

  loadIndex(id: string): void {
    if (this.$route.params.id != this.$props.id) {
      this.$router.push({
        path: `/${id}`
      });
    }
  }
}
</script>

<style scoped lang="sass">
.isActive
  background-color: $grey-4
  color: black
  font-weight: bold
</style>
