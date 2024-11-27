<template>
  <div>
    <h1>API Connect</h1>
    <v-btn color="success" @click="newItem()">newItem</v-btn>
    <v-row> 
        <v-col cols="3" v-for="(item,index) in apidata" :key="index">
    <div>
    <v-card width="350">
      <v-img src="https://th.bing.com/th/id/OIP.rj1liH4efROhypWJdx808wHaEK?rs=1&pid=ImgDetMain"></v-img>
      <v-card-title primary-title>
          {{item.name}} {{item.address }}
      </v-card-title>
      <v-card-actions>
        <v-btn color="success" @click="editItem(item)">edit</v-btn>
        <v-btn color="error" @click="deleteItem(item)">delete</v-btn>
      </v-card-actions>
    </v-card>
    </div>
    </v-col>
    </v-row>
    <v-dialog
        v-model="dialogedit"
        max-width="400px"
 
    >
    <v-card>
        <v-card-title primary-title>
            {{ savemode }}
        </v-card-title>
        <v-card-text>
            <v-row> 
                <v-col cols="6">
                    <v-text-field
                        name="name"
                        label="name"
                        id="name"
                        v-model="postdata.name"
                    ></v-text-field>
                    <v-text-field
                        name="address"
                        label="address"
                        id="address"
                        v-model="postdata.address"
                    ></v-text-field>
                </v-col>
            </v-row>       
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" text @click="closeItem()">cancel</v-btn>
            <v-btn color="info" text @click="saveSelect()">save</v-btn>
        </v-card-actions>
    </v-card>
    </v-dialog>
  </div>
</template>

<script>
//import { head } from 'axios';

export default {
    data() {
        return {
            apidata:[],
            id:"",
            postdata:{ //เอาไว้สำหรับส่งข้อมูล
                // username:"",
                // password:"",
                // name:"",
                // address:"",
                // moneypag:1234
                product_code:"",
                product_name:"",
                price:0,
                amount:0,
                detail:"",

            },
            postdefault:{ //เอาไว้เคลียข้อมูล
                // username:"",
                // password:"",
                // name:"",
                // address:"",
                // moneypag:1234
                product_code:"",
                product_name:"",
                price:0,
                amount:0,
                detail:"",
            },
            dialogedit:true,
        }
    },
    computed: {
        savemode (){
            return this.id == "" ? 'NewItem' : 'EditItem'
        }
    },
    created(){
        this.getData()
    },
    methods: {
        newItem(){
            this.id = " "
            this.postdata = {...this.postdefault}
            this.dialogedit = true
        },
        editItem(item){
            this.id = item._id
            this.postdata = {...item}
            this.dialogedit = true
        },
        closeItem(){
            this.id = ""
            this.postdata = {...this.postdefault}
            this.dialogedit = false
        },
        saveSelect(){
            if(this.id != ""){
                this.savePutdata()
            }else this.savePostdata()
        },
        getData(){
            this.axios.get('http://localhost:3000/product'),{
                Headers:{
                    'Authorization':'Bearer $token'}
            }.then((response) => {

            console.log(response.data)
            this.apidata = response.data
            })
        },
        async savePostdata(){
            try{
                console.log(this.postdata);
                const {data} = await this.axios.post('http://localhost:3000/product',this.postdata)
                console.log(data);
                alert("save complete")
                this.getData()
                this.closeItem()
            }catch(error){
                console.log(error)
                alert("save fail")
            }
        },
        async savePutdata(){
            try{
                console.log(this.putdata);
                const {data} = await this.axios.put('http://localhost:3000/product'+this._id,this.putdata)
                console.log(data);
                alert("update complete")
                this.getData()
                this.closeItem()
            }catch(error){
                console.log(error)
                alert("update fail")
            }
        },
        async deleteItem(item){
            if (confirm("Delete"+item.name))
            try{
                const {data} = await this.axios.delete('http://localhost:3000/product'+item._id)
                console.log(data);
                alert("Delete complete")
                this.getData()
                this.closeItem()
            } catch(error){
                console.log(error)
                alert("Delete fail")
            }
        },
    },
}
</script>

<style>

</style>