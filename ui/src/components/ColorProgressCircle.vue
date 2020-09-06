<template>
  <progress-circle
    :progress="score"
    :progress-stroke="color"
    :background-stroke="trackColor"
    :text-color="color"
    :width="size"
  ></progress-circle>
</template>

<script>
import { Vue, Component, Prop } from 'vue-property-decorator';
import ProgressCircle from '@enso-ui/progress-circle';

@Component({
  components: {
    'progress-circle': ProgressCircle
  },
  computed: {
    color: {
      get () {
        let red = 255;
        let green = 0;
        if (this.$props.score < 50) {
          green = Math.round(255/50*this.$props.score);
        } else {
          green = 255;
          red = Math.round(255 - (255/50*(this.$props.score-50)));
        }

        let greenHex = green <= 16 ? "0"+green.toString(16) : green.toString(16);
        let redHex = red <= 16 ? "0"+red.toString(16) : red.toString(16);

        return `#${redHex}${greenHex}00`;
      }
    }
  }
})
export default class ColorProgressCircle extends Vue {
  @Prop({ default: 0 }) score;
  @Prop({ default: 20 }) size;
  @Prop({ default: '#E1E1E1' }) trackColor;
  @Prop({ default: 'black' }) textColor;
}
</script>

<style scoped>

</style>
