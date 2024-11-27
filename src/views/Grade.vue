<template>
    <div>
      <v-row class="pa-10 ma-10 d-flex flex-column justify-center align-center">
        <v-col cols="12">
          <v-text-field
            label="Point"
            v-model="score"
            type="number"
          ></v-text-field>
          <v-btn @click="calculateGrade">Calculate</v-btn>
        </v-col>
        <v-col cols="12" class="text-center">
          <span class="text-h4">Grade: </span
          ><span class="ps-5 text-h3">{{ grade }}</span></v-col
        >
      </v-row>
    </div>
  </template>
  
  <script>
  export default {
    name: "Grade",
  
    data: () => ({
      score: 100,
      grade: "",
    }),
    methods: {
      // eslint-disable-next-line
      calculateGrade: function () {
        if (this.score > 100 || this.score < 0 || !this.score) {
          this.$data.grade = "Unknown";
          return;
        }
        if (this.score >= 80) {
          this.$data.grade = "A";
        } else if (this.score >= 70 && this.score <= 79) {
          this.$data.grade = "B";
        } else if (this.score >= 60 && this.score <= 69) {
          this.$data.grade = "C";
        } else if (this.score >= 50 && this.score <= 59) {
          this.$data.grade = "D";
        } else {
          this.$data.grade = "E";
        }
      },
    },
  };
  </script>
  