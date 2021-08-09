<template>
  <CardLink :url="url" blank>
    <span class="dark:text-gray-200">{{ title }}</span
    >{{ description && ` - ${description}` }}
  </CardLink>
</template>

<script lang="ts">
import CardLink from "./CardLink.vue";
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    CardLink,
  },
  props: {
    url: String,
    title: String,
    description: String,
  },
})
export default class Attribution extends Vue {
  url!: string;
  title!: string;
  description?: string;
}
</script>
