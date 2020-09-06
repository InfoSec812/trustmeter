<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Trust-O-Meter
        </q-toolbar-title>
        <q-space />
        <q-btn
          icon="add"
          @click="showAddDialog"
          :close-dialog="closeAddDialog"
        />
      </q-toolbar>
    </q-header>
    <add-trustee-dialog v-model="addDialogVisible" :close-dialog="closeAddDialog" />

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list
        bordered
        separator
      >
        <trustee-list-item
          v-for="(trustee, id) in trustees"
          v-bind:trustee="trustee"
          v-bind:id="id"
          :key="id" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import TrusteeListItem from 'components/TrusteeListItem.vue';
import AddTrusteeDialog from 'components/AddTrusteeDialog.vue';

@Component({
  components: { TrusteeListItem, AddTrusteeDialog },
  computed: {
    trustees: {
      get () {
        return this.$store.state.trustees
      }
    }
  }
})
export default class MainLayout extends Vue {
  leftDrawerOpen = false;
  addDialogVisible = false;

  closeAddDialog(): void {
    this.addDialogVisible = false;
  }

  showAddDialog(): void {
    this.addDialogVisible = true;
  }

  mounted() {
    let firstId = Object.keys(this.$store.state.trustees)[0];
    if (this.$route.params.id != firstId) {
      this.$router.push({
        path: `/${firstId}`
      });
    }
  }
}
</script>
