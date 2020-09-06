<template>
  <q-page class="row items-center justify-evenly">
    <span class="col-12" style="font-size: 2rem; width: 100%; text-align: center;">{{ trustee.name }}</span>
    <color-progress-circle :score="trustee.score" :size="400"/>
    <div class="rightPad">
      <q-btn
        @click="increment()"
        @mousedown="startIncrement()"
        @mouseup="stopIncrement()"
        icon="keyboard_arrow_up"
        size="3rem"
        class="row"
      />
      <q-btn
        @click="decrement()"
        @mousedown="startDecrement()"
        @mouseup="stopDecrement()"
        icon="keyboard_arrow_down"
        size="3rem"
        class="row"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import ColorProgressCircle from '../components/ColorProgressCircle';

@Component({
  components: {
    'color-progress-circle': ColorProgressCircle
  },
  computed: {
    trustee: {
      get () {
        return this.$store.state.trustees[this.$route.params.id];
      }
    },
    color: {
      get () {
        let score = this.$store.state.trustees[this.$route.params.id].score;
        let red = 255;
        let green = 0;
        if (score < 50) {
          green = Math.round(255/50*score);
        } else {
          green = 255;
          red = Math.round(255 - (255/50*(score-50)));
        }

        let greenHex = green <= 16 ? "0"+green.toString(16) : green.toString(16);
        let redHex = red <= 16 ? "0"+red.toString(16) : red.toString(16);

        return `#${redHex}${greenHex}00`;
      }
    }
  }
})
export default class PageIndex extends Vue {
  intervalHandle?: number;

  increment() {
    this.$store.commit('trustees/increment', { id: this.$route.params.id });
  }

  decrement() {
    this.$store.commit('trustees/decrement', { id: this.$route.params.id });
  }

  startIncrement() {
    this.intervalHandle = window.setInterval(() => {
      this.increment();
    }, 500);
  }

  stopIncrement() {
    window.clearInterval(this.intervalHandle)
  }

  startDecrement() {
    this.intervalHandle = window.setInterval(() => {
      this.decrement();
    }, 500);
  }

  stopDecrement() {
    window.clearInterval(this.intervalHandle)
  }
};
</script>

<style lang="sass" scoped>
.rightPad
  margin: 0 10px 0 10px
.nameLabel
  size: 30rem
</style>
