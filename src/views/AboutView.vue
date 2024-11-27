<template>
  <div class="ma-8 pa-8 pt-2">
    <v-row>
      <v-col cols="12" sm="12" md="6" class="d-flex justify-center">
        <img
          src="../assets/me.jpg"
          alt="profile image"
          style="width: 100%; max-width: 300px; height: auto; border-radius: 8px; object-fit: cover;"
        />
      </v-col>
      <v-col cols="12" sm="12" md="6" class="d-flex flex-column">
        <div>
          <div class="d-flex text-h3 align-start">
            <div>Hi Everyone</div>
            <div id="icon-hello" class="ml-2">👋</div>
          </div>
        </div>
        <div class="mt-4">
          <v-card class="pa-2 d-flex align-center" outlined tile>
            <span class="font-weight-bold">Name: </span>
            <span class="ml-2">{{ fullName }}</span>
          </v-card>
          <v-card class="pa-2 d-flex align-center" outlined tile>
            <span class="font-weight-bold">Nick Name: </span>
            <span class="ml-2">{{ profile.nickName }}</span>
          </v-card>
          <v-card class="pa-2 d-flex align-center" outlined tile>
            <span class="font-weight-bold">University: </span>
            <span class="ml-2">{{ profile.university }}</span>
          </v-card>
          <v-card class="pa-2 d-flex flex-column" outlined tile>
            <span class="font-weight-bold">Hobbies: </span>
            <v-list-item
              class="pb-1"
              v-for="(item, index) in profile.hobbies"
              :key="index"
            >
              <span>{{ item.icon }}</span>
              <v-list-item-content class="ml-5">
                <v-list-item-title>{{ item.hobby }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </div>
      </v-col>
    </v-row>
    <v-row class="pt-5">
      <v-col cols="12" sm="12" md="6">
        <v-card class="pa-2 d-flex flex-column" outlined tile>
          <span class="font-weight-bold">Likes👍: </span>
          <v-chip-group>
            <v-chip
              color="success"
              v-for="(item, index) in profile.Likes"
              :key="index"
            >
              {{ item }}
            </v-chip>
          </v-chip-group>
        </v-card>
        <v-card class="pa-2 d-flex flex-column" outlined tile>
          <span class="font-weight-bold">Dislikes👎: </span>
          <v-chip-group>
            <v-chip
              color="error"
              v-for="(item, index) in profile.DisLikes"
              :key="index"
            >
              {{ item }}
            </v-chip>
          </v-chip-group>
        </v-card>
        <v-card class="pa-2 d-flex flex-column" outlined tile>
          <span class="font-weight-bold">Strengths💪: </span>
          <v-chip-group>
            <v-chip
              color="#d6eaf8"
              v-for="(item, index) in profile.Strengths"
              :key="index"
            >
              {{ item }}
            </v-chip>
          </v-chip-group>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="6">
        <v-card class="pa-2 d-flex flex-column" outlined tile>
          <span class="font-weight-bold">Movies & Anime🍿: </span>
          <v-chip-group>
            <v-chip
              color="#d0ece7"
              v-for="(item, index) in profile.MoviesAnime"
              :key="index"
            >
              {{ item }}
            </v-chip>
          </v-chip-group>
        </v-card>
        <v-card class="pa-2 d-flex flex-column" outlined tile>
          <span class="font-weight-bold">Singers🧑‍🎤: </span>
          <v-chip-group>
            <v-chip
              color="#fdebd0"
              v-for="(item, index) in profile.Singers"
              :key="index"
            >
              {{ item }}
            </v-chip>
          </v-chip-group>
        </v-card>
        <v-card class="pa-2 d-flex flex-column" outlined tile>
          <span class="font-weight-bold">Books📚: </span>
          <v-chip-group>
            <v-chip
              color="#d2b4de"
              v-for="(item, index) in profile.Books"
              :key="index"
            >
              {{ item }}
            </v-chip>
          </v-chip-group>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    profile: {
      firstName: "Nifadia",
      lastName: "Lillahkul",
      nickName: "Faya",
      university: "Department of Computer Engineering Faculty of Engineering Prince of Songkla University",
      hobbies: [
        { icon: "📖", hobby: "Read a book" },
        { icon: "📺", hobby: "Watch Movie" },
        { icon: "🎵", hobby: "Listen to music" },
      ],
      Likes: ["Cat","Book", "Music", "Movie"],
      DisLikes: ["Dog", "Rain", "Noise"],
      Strengths: [ "Teamwork", "Empathy"],
      MoviesAnime: ["Harry Potter", "Conan", "AOT"],
      Singers:["NIKI","TEYLOR SWIFT","BRONO MARS"],
      Books: ["Sherlock Holmes", "Harry Potter", "The Chronicles of Narnia"],
    },
  }),
  computed: {
    fullName: function () {
      return this.profile.firstName + " " + this.profile.lastName;
    },
  },
};
</script>

<style scoped>
#icon-hello {
  animation: sayHello 2s infinite;
}
@keyframes sayHello {
  50% {
    transform: rotate(30deg);
  }
}
</style>

