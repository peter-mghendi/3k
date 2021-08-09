<template>
  <div class="home min-h-screen">
    <div
      class="
        py-2
        text-center
        bg-gray-100
        text-gray-500
        dark:bg-gray-800
        dark:text-gray-400
      "
      v-show="loading"
    >
      Loading...
    </div>
    <div class="py-2 text-center bg-red-100 text-red-500" v-show="error">
      {{ error }}
    </div>
    <div class="mx-auto w-full md:w-4/5 lg:w-3/4 p-4">
      <h1 class="text-3xl dark:text-gray-200 mb-4">
        The next <abbr title="Marvel Cinematic Universe ">MCU</abbr> production
        being released is:
      </h1>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        v-show="nextProduction"
      >
        <img
          :src="nextProduction?.poster_url"
          :alt="nextProduction?.title"
          class="rounded-xl col-span-1 mx-auto"
        />
        <div
          class="
            text-left
            col-span-1
            lg:col-span-2
            py-4
            flex flex-col
            justify-between
          "
        >
          <div>
            <h1 class="text-3xl font-bold dark:text-gray-200">
              {{ nextProduction?.title }}
            </h1>
            <h2 class="text-xl font-semibold text-gray-500">
              {{ nextProduction?.type }}
            </h2>
            <p class="text-lg dark:text-gray-200">
              Airs on {{ nextProduction?.release_date }} (in
              {{ nextProduction?.days_until }} days)
            </p>
          </div>

          <p class="dark:text-gray-200">{{ nextProduction?.overview }}</p>

          <div>
            <p
              class="text-lg font-semibold dark:text-gray-200"
              v-show="nextProduction?.following_production?.title"
            >
              Next up:
            </p>
            <router-link
              :to="{
                name: 'home',
                query: { date: nextProduction?.release_date },
              }"
              class="
                flex
                rounded-xl
                align-middle
                w-full
                mb-2
                bg-gray-100
                dark:bg-gray-800
                dark:text-gray-200
                hover:shadow-lg
              "
              v-show="nextProduction?.following_production?.title"
            >
              <img
                :src="nextProduction?.following_production?.poster_url"
                :alt="nextProduction?.following_production?.title"
                class="h-24 w-auto rounded-xl"
              />
              <div class="text-left px-2 my-auto">
                <p class="font-semibold">
                  {{ nextProduction?.following_production?.title }}
                </p>
                <p class="text-sm text-gray-500">
                  {{ nextProduction?.following_production?.release_date }}
                </p>
              </div>
            </router-link>
            <router-link
              :to="{ name: 'home' }"
              class="font-semibold hover:underline p-2"
              style="color: #b91d47"
              v-show="$route.query.date"
            >
              &larr; Back to Today
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { getNextProductionAsync } from "@/client";
import { Production } from "@/client/models";

export default class Home extends Vue {
  error: string | null = null;
  loading = false;
  nextProduction: Production | null = null;

  async created(): Promise<void> {
    this.$watch(
      () => this.$route.query.date,
      async () => {
        await this.fetchNextProduction();
      },
      { immediate: true }
    );
  }

  async fetchNextProduction(): Promise<void> {
    this.error = null;
    this.loading = true;

    const dateParam = this.$route.query.date;
    const date = Array.isArray(dateParam) ? dateParam[0] : dateParam;

    try {
      this.nextProduction = await getNextProductionAsync(date?.valueOf());
      console.log(this.nextProduction);
      console.log(this.nextProduction.following_production);
    } catch (e) {
      this.error = (e as Error).message;
      this.nextProduction = null;
    }

    this.loading = false;
  }
}
</script>
