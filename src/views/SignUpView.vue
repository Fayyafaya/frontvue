<template>
    <div class="d-flex justify-center d-flex justify-center py-10">
      <SignUpCard />
    </div>
  </template>
  
  <script>
  import SignUpCard from "../components/SignUpCard.vue";
  export default {
    components: { SignUpCard },
    mounted: function () {
      if (this.$store.state?.userData) {
        this.$router.push("/");
      }
    },
  };
  </script>
  