<template>
	<div>
		<div class="auth">
			<div class="card">SIGN IN</div>
			<form @submit.prevent="signin()">
			
			<div class="input">
				<input type="email" v-model="form.email" required><br>
				<label>EMAIL</label>
			</div>

			<div class="input">
				<input type="password" v-model="form.password" required><br>
				<label>PASSWORD</label>
				<div class="reqfield"></div>
			</div>

			<div class="error"></div>
			<div class=".btn" style="display : flex ; align-itms : center ; justify-content : center ; marigin: auto">
				<button type="submit" style="width : 100%  ;">sign in</button>
			</div>
			
			</form>
		</div>
	</div>
</template>

<script>
	import { signInWithEmailAndPassword } from "firebase/auth";
	import { auth } from '../firebase.js'
	import Router from '../router/index.js'

	export default {
	data(){
		return {
			form:{name:'',email:'',password:''}
		}
	},
	methods: {
		signin(){
			signInWithEmailAndPassword(auth, this.form.email, this.form.password)
			.then((userCredential) => {
				const user = userCredential.user;
				Router.push('/')
			})
			.catch((error) => {
				let err = document.querySelector('.reqfield')
				err.innerHTML = 'E-mail or Password is incorrect'
			});
		},
	},
}
</script>

<style scoped>
	    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;1,200&display=swap');
    body::-webkit-scrollbar {
        display: none;
    }
    html {
        scroll-behavior: smooth;
    }
    body {
        margin: 0;
        font-family: 'Poppins';
        background-color: #242424;
    }
    form{
        margin: 20px;
        display: flex;
        flex-direction: column;
    }
    .form {
        padding: 8px 0;
        display: flex;
        align-items: center;
        flex-direction: row;
        column-gap: 20px;
    }
    .form label {
        display: flex;
        margin: 1px 0 0 0;
        align-items: center;
        color: rgb(107, 105, 105);
    }
    .form input {
        border: none;
        border-bottom: 2px solid #5f89df;
        width: 14em;
        outline : none;
        font-size: 20px;
        background: none;
        color: #fff;
    }
    .form button {
        width: 40%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
        margin: 15px auto;
        padding: 10px 15px;
        font-size: 20px;
        border-radius: 50vh;
        background-color: #5f89df;
        border: none;
        outline:none;
        color: #232323;
        opacity: 1;
        z-index: 10;
    }
    .auth {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: center;
        row-gap: 1em;
        margin: auto;
        padding: 2em;
        width: auto;
        height: fit-content;
        background-color: #002233;
        height: 100vh;
    }
    .card {
        font-size: 2.5em;
        color: #0066FF;
        margin-bottom: 1em;
    }
    form {
        display: flex;
        flex-direction: column;
    }
    .input input{
        width: 30em;
        outline: none;
        border-radius: 10px;
        padding: .80em 1.75em;
        background-color: #002233;
        border: 1px solid gray;
        color: white;
    }
    .btn {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    button {
        border: none;
        padding: 10px 20px;
        font-size: 1.3em;
        text-decoration: none;
        background-color: #0066FF;
        outline: none;
    }
    .button {
        background-color: #002233;
        color:#0066FF;
    }
    .button:hover {
        background-color: #0066FF;
        color: #002233;
        transition: cubic-bezier(0.55, 0.085, 0.68, 0.53)s;
    }
    .input {
        display: flex;
        flex-direction: column;
    }
    .input input:focus {
        border: 1px solid #0066FF;
    }
    .input label {
        position: absolute;
        font-size: .8em;
        padding: .3em 0 0 .7em;
        color: gray;
        margin-left: .5em;
    }
    .input input:focus ~ label,.input input:valid ~ label
    {
        color: #0066FF;
        padding: 0 .5em;
        transform: translateX(10px) translateY(-10px);
        background-color: #002233;
        letter-spacing: .1em;
        transition: .5s;
        border-left:1px solid #0066FF ;
        border-right:1px solid #0066FF ;
    }
    input {
        outline: none;
    }
    .reqfield {
        color: red;
        margin: 0 0 12px 0;
    }

	@media only screen and (max-width:600px) {
        .input input {
            width: 20em;
        }
        .auth {
            height: 90vh;
        }
    }
</style>