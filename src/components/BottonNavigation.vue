<template>
        <v-bottom-navigation
      absolute
      background-color="#009688"
      color="white"
      hide-on-scroll
      horizontal
      scroll-target="#scroll-threshold-example"
      scroll-threshold="500"
    >
      <v-btn>
        <span>Recents</span>

        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn>
        <span>Favorites</span>

        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn>
        <span>Nearby</span>

        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>
</template>