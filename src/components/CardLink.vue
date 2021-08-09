<template>
  <a
    :href="url"
    class="
      p-4
      rounded-xl
      w-full
      bg-gray-100
      text-gray-500
      dark:bg-gray-800 dark:text-gray-400
      hover:shadow-lg
    "
    :target="blank ? '_blank' : null"
  >
    <slot></slot>
  </a>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    url: {
      type: String,
      required: true,
    },
    blank: {
      type: Boolean,
      default: false,
    },
  },
})
export default class Attribution extends Vue {
  url!: string;
  blank?: boolean;
}
</script>
