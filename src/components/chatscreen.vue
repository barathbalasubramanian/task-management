<template>

<div class="box">    
    <div class="header" style="font-size:24px">Team Chat</div>
    <div class="allmessage" style="margin: 0.4em 0 0 0; display: flex; flex-direction: column;">
        <div class="message" v-for="(data,index) in this.messages" :key="index">
                <div :class="data.name == this.currentUser ? 'barath' : 'unknown'">{{data.message}}</div>
        </div>
    </div>

    <div class="input">
        <input type="text" name="text" v-model="form.message"> 
        <button @click="send"><span class="material-symbols-outlined">send</span></button>
    </div>
</div>

</template>

<script>
import { dbstore , auth , insert_message  } from '../firebase'
import { collection , getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export default {
     data(){
        return{
            form:{ name:'barath',message:'' },
            messages:[],
            currentUser : 'barath'
        }
    },
    mounted: function() {
        // this.getuser()
        this.chatbox()
    },
    methods: {
        async send(){
            if (this.form['message'] != '') {
                console.log('send')
                await insert_message( { ...this.form } )
                    this.form['name'] = ''
                    this.form['message'] = ''
                    this.chatbox()
                // this.getuser()
        }},
        async chatbox() 
        {
          this.messages = []
          const querySnapshot = await getDocs(collection(dbstore, "messages"));
          querySnapshot.forEach((doc) => {
                this.messages.push(Object(doc.data()))
            });    
        },
        getuser(){
            onAuthStateChanged(auth, (user) => {
                if (user) {
                  const uid = user.email;
                  this.currentUser = uid
                  this.form.name = uid
                } else {
                  console.log('User undefined')
                }
            });
        }
    }
}
</script>

<style scoped>

.box {
    position: absolute;
    top: 10%;
    left: 0;
    padding: 1em;
    z-index: 999;
    background: #242424;
    border: 1px solid;
    min-width: 97vw;
    min-height: 73vh;
    margin:  0 0 0 .5em;
}

.header {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.input {
    position: absolute;
    bottom: 5%;
    display: flex;
    width: 100%;
    margin: 0 0 0 0.5em;
    gap: 10px;
}

input {
    padding: .5em;
    width: 75%;
    background-color: #4e4d4d;
    border: none;
    outline: none;
    caret-color: whitesmoke;
    color: white;
    font-size: 18px;
}

.input button {
    color: white;
    border: none;
    outline: none;
    background-color: #242424;
}

.message .barath {
    word-wrap:break-word;
    max-width: 20em;
    width: fit-content;
    float: right;
}

@media only screen and (max-width: 600px) {
    .barath {
      max-width: 10em;
      background-color: #494b49;
      padding: 0.1em 0.2em;
	  margin: 0 0 .2em 0 ;	
    }
	.box {
		margin: 0;
		width: 90vw;
	}
}

</style>