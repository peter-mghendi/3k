<template>
  <div class="about min-h-screen">
    <img src="logo-transparent.png" alt="3k" class="mx-auto h-24" />
    <h1 class="text-3xl dark:text-gray-200 mb-4">About 3k</h1>

    <div class="text-gray-500 mx-auto w-full md:w-4/5 lg:w-3/4 p-4">
      <p class="text-2xl dark:text-gray-200 mb-4">
        3k is a progressive web application built on the following technologies:
      </p>
      <div
        class="
          text-left
          grid grid-cols-1
          md:grid-cols-2
          lg-grid-cols-3
          gap-4
          mb-4
        "
      >
        <Attribution
          url="https://typescriptlang.org"
          title="TypeScript"
          description="Open-source superset of JavaScript that adds static type
          definitions."
        />
        <Attribution
          url="https://v3.vuejs.org"
          title="Vue.js"
          description="The progressive JavaScript framework."
        />
        <Attribution
          url="https://next.router.vuejs.org"
          title="Vue Router"
          description="The official router for Vue.js.."
        />
        <Attribution
          url="https://next.vuex.vuejs.org"
          title="Vuex"
          description="A centralized state management pattern + library for Vue."
        />
        <Attribution
          url="https://axios-http.com"
          title="Axios"
          description="An isomorphic promise-based HTTP client."
        />
        <Attribution
          url="https://babeljs.io"
          title="Babel"
          description="The compiler for next generation JavaScript."
        />
        <Attribution
          url="https://tailwindcss.com"
          title="Tailwind CSS"
          description="A utility-first CSS framework."
        />
      </div>
      <p class="text-2xl dark:text-gray-200 mb-4">...with data from:</p>
      <div
        class="
          text-left
          grid grid-cols-1
          md:grid-cols-2
          lg-grid-cols-3
          gap-4
          mb-4
        "
      >
        <Attribution
          url="https://developer.marvel.com"
          title="Marvel Comics API"
        />
        <Attribution
          url="https://www.themoviedb.org/documentation/api"
          title="The Movie Database API"
        />
        <Attribution
          url="https://omdbapi.com"
          title="The Open Movie Database API"
        />
        <Attribution
          url="https://whenisthenextmcufilm.com/api"
          title="When is the next MCU film API"
        />
      </div>
      <p class="text-2xl mb-4 font-semibold" style="color: #b91d47">
        It's open source!
      </p>
      <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 mb-4">
        <div class="md:col-start-2 lg:col-start-3 md:col-span-2 flex">
          <CardLink url="https://github.com/sixpeteunder/3k" blank>
            <span class="font-semibold dark:text-gray-200"
              >View the source code on GitHub</span
            >
          </CardLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Attribution from "@/components/Attribution.vue";
import CardLink from "@/components/CardLink.vue";

@Options({
  components: {
    Attribution,
    CardLink,
  },
})
export default class About extends Vue {}
</script>
