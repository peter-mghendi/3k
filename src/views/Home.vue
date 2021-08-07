<template>
  <div class="home flex">
    <div
      class="
        mx-auto
        grid grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        w-full
        md:w-4/5
        lg:w-3/4
        gap-4
        p-4
      "
    >
      <img
        :src="nextProduction?.poster_url"
        :alt="nextProduction?.title"
        class="rounded-xl col-span-1"
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
          <h1 class="text-3xl font-bold">{{ nextProduction?.title }}</h1>
          <h2 class="text-xl font-semibold text-gray-500">
            {{ nextProduction?.type }}
          </h2>
          <p class="text-lg">
            Airs on {{ nextProduction?.release_date }} (in
            {{ nextProduction?.days_until }} days)
          </p>
        </div>

        <p>{{ nextProduction?.overview }}</p>

        <div>
          <p class="text-lg font-semibold">Next up:</p>
          <router-link :to="{ name: 'home', query: { date: nextProduction?.release_date } }"
            class="
              bg-gray-100
              flex
              rounded-xl
              align-middle
              w-full
              hover:shadow-lg
            "
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
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { Vue } from "vue-class-component";
import { getNextProductionAsync } from "@/client";
import { Production } from "@/client/models";
import { LocationQuery } from "vue-router";

export default class Home extends Vue {
  nextProduction: Production | null = null;

  async created(): Promise<void> {
    this.$watch(() => this.$route.query, async (oldQuery: LocationQuery, newQuery: LocationQuery) => {
      await this.fetchNextProduction();
    }, { immediate: true });
  }

  async fetchNextProduction(): Promise<void> {
    // Get date query param
    let date = this.$route.query.date;

    if (!date) {
      // Fetches the next production from today.
      this.nextProduction = await getNextProductionAsync();
      return;
    }

    // Throw away any repeated params
    if (Array.isArray(date)) date = date[0];
      
    // Fetches the next production from the given date.
    this.nextProduction = await getNextProductionAsync(date?.valueOf());  
  }
}
</script>
