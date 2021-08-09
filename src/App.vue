<template>
  <div class="dark:bg-gray-900">
    <div id="nav">
      <router-link :to="{ name: 'home' }">Home</router-link> |
      <router-link :to="{ name: 'about' }">About</router-link>
    </div>
    <router-view />
    <footer
      class="p-4 bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400"
    >
      &copy; {{ new Date().getFullYear() }}
      <a
        href="https://github.com/sixpeteunder"
        class="font-semibold hover:underline"
        style="color: #b91d47"
      >
        sixpeteunder
      </a>
      | All rights reserved.
    </footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #b91d47;
}
</style>
