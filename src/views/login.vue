<template>
  <div>
    <h1>Hello World</h1>
    <h2>My name is {{ name }}</h2>
    <testprops :name="name"/>
    <v-btn color="suscess" @click="callAlert">alert</v-btn>
    <v-btn color="suscess" @click="show = !show">switch</v-btn>
    <div v-if="show">
    <cardimg />
    </div>
    <!-- <h1  v-for="(item,index) in items" :key="index">{{item.message}}</h1> -->
    <v-row>
      <v-col cols="3" v-for="(item,index) in items" :key="index">
    <div>
    <v-card width="350">
      <v-img :src="item.imglink"></v-img>
      <v-card-title primary-title>
          {{item.message}}
      </v-card-title>
      <v-card-actions>
        <v-btn color="success" @click="callAlertParams(item.message)">alert</v-btn>
      </v-card-actions>
    </v-card>
    </div>
    </v-col>
    <v-col cols="12">
      <h1>
        {{value1}}
      </h1>
      <v-text-field
        name="value1"
        label="กรอกรายละเอียด"
        id="value1"
        v-model="value1"
      ></v-text-field>
      <v-btn color="success" @click="setLocalStorage()">Set</v-btn>
      <v-btn color="success" @click="removelocalStorage()">remove</v-btn>
    </v-col>
    </v-row>
  </div>
</template>

<script>
import {EventBus} from '@/EventBus'
import cardimg from '../components/CardImg.vue'
import testprops from '../components/TestProps.vue'
export default {
  components: {
    cardimg,
    testprops
  },
  data() {
    return {
      value1: '',
      name: 'Nifadia',
      show: false,
      items: [
        {message:"Foo", imglink:'https://th.bing.com/th/id/OIP.rj1liH4efROhypWJdx808wHaEK?rs=1&pid=ImgDetMain'},
        {message:"Bar", imglink:'https://th.bing.com/th/id/OIP.rj1liH4efROhypWJdx808wHaEK?rs=1&pid=ImgDetMain'},
        {message:"Foo", imglink:'https://th.bing.com/th/id/OIP.rj1liH4efROhypWJdx808wHaEK?rs=1&pid=ImgDetMain'},
        {message:"Foo", imglink:'https://th.bing.com/th/id/OIP.rj1liH4efROhypWJdx808wHaEK?rs=1&pid=ImgDetMain'},
        {message:"Bar", imglink:'https://th.bing.com/th/id/OIP.rj1liH4efROhypWJdx808wHaEK?rs=1&pid=ImgDetMain'},
        {message:"Bar", imglink:'https://th.bing.com/th/id/OIP.rj1liH4efROhypWJdx808wHaEK?rs=1&pid=ImgDetMain'}
        ],
      }
  },
  mounted(){
    EventBus.$on('callAlertMain',this.callAlert)
  },
  beforeDestroy(){
    EventBus.$off('callAlertMain',this.callAlert)
  },
  methods: {
    callAlert() {
      alert('Hello World')
    },
    callAlertParams(item) {
      alert(item)
    },
    setLocalStorage(){
        localStorage.setItem('User', this.value1) 
        this.$cookies.set('User', this.value1,'60s')
    },
    removelocalStorage(){
        localStorage.removeItem('User')
    }
    
  }
}
</script>

<style>

</style>