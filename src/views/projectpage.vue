<template>

  <div>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    
    <collaborators />

    <!-- All Tasks -->
    <div v-if='!toadd'>
      <div class="alltasks" v-for="(data , index) in tasks" :key="index">
            <div v-for="( task , ind) in data" :key="ind"> 
                <div v-if="ind != 'name'" class="task">
                    <div class="task-name">{{ task.taskname }}</div> 
                    <div class="task-status">
                        <div class="task-created">{{ task.CreatedAt }}</div>
                        <div class="task-timing">{{ task.deadline }}</div>
                    </div>
                </div>
            </div>
      </div>
    </div>
    <button @click="openadd"  v-if="!toadd" style="position: absolute; bottom: 3%; left: 5%">Add task >> </button>
    <div class="toadd" v-if="this.toadd">
      <div>Add Task</div>
      <div class="input-field">
        <label for="" class="dim-color">Task Name</label>
        <input type="text" v-model="form.taskname" class="task-form-field">
      </div>
      <div class="input-field">
        <label for="" class="dim-color">Task Deadline</label>
        <input type="text" v-model="form.deadline" class="task-form-field">
      </div>
      <button @click="addtask()" class="green-stuff">Add</button>
    </div>

    <chatbox/>

  </div>

</template>

<script>

import { ref, set , child, get} from "firebase/database";
import { db , dbref } from "../firebase"
import chatbox from '../components/chatbox.vue'
import collaborators from '../components/collaborators.vue'
import { useRoute } from 'vue-router'

export default {
  name: 'taskview',
  components: {
		chatbox,
    collaborators,
	},
  data(){
    return{
      form: { taskname:'' , deadline: '' },
      members: false,
      currentTime : null,
      creationDate: '',
      tasks: [],
      projectName: null,
      toadd: false,
      chatopen: false
    }
  },

  methods: {
    
    printDate() {
      return new Date().toLocaleTimeString();
    },
    async constructor() 
    {   
      const route = useRoute()
      this.projectName = route.params.projectName
      console.log(this.projectName)
    },
    async addtask()  {
      this.toadd = ! this.toadd
      if (this.form.taskname != '') {
          await this.gettaskCreateddate()
          .then(() => {
                set(ref(db, this.projectName+'/' + this.form.taskname ), { 
                      taskname : this.form.taskname,
                      CreatedAt : this.creationDate ,
                      completed : false,
                      deadline: this.form.deadline,
                      creationTime : new Date().toLocaleTimeString()
                  });
                  console.log('added')
                  this.querytask()
          }).catch((er)=> {
            console.log(er) 
          })
      }
    },
    async gettaskCreateddate() {
      
      const today = new Date();
      const day = today.getDate();
      const suffix = getDaySuffix(day);
      const month = getMonthName(today.getMonth());

      const date_string = `${day}${suffix} ${month}`;

      function getDaySuffix(day) {
        if (day >= 11 && day <= 13) {
          return "th";
        } else {
          switch (day % 10) {
            case 1:
              return "st";
            case 2:
              return "nd";
            case 3:
              return "rd";
            default:
              return "th";
          }
        }
      }

      function getMonthName(month) {
        const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December",];
        return monthNames[month];
      }
      console.log(date_string)
      this.creationDate = date_string
      return date_string
    },
    async querytask() {
      this.tasks = []
      await get(child(dbref , this.projectName+'/')).then((snapshot) => {
            if (snapshot.exists()) {
                this.tasks.push(snapshot.val())
            } else {
                if (this.email === 'barath') { Router.push("/owner") }
                console.log("No data available");
            }
            }).catch((error) => {
                console.error(error);
            });
    },
    openadd() {
      this.toadd = true
    }
  },

  mounted : function() {
      this.constructor(),
      this.querytask(),
      setInterval(() => {
        this.currentTime = new Date().toLocaleTimeString([], {hour12: false});
      }, 1000);
  },
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

*{
  font-family:'Poppins', sans-serif;
}

.alltasks {
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  margin-top: 5em;
}

.task{
  background-color: #393535;
  padding: .5em ;
  border-radius: 12px;
}

.task-status {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
}

.toadd {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
    position: absolute;
    bottom: 30%;
    width: 100vw;
}

input {
    outline: none;
    border: none;
    padding: .5em;
}

button {
    background: none;
    outline: none;
    border: none;
    color: white;
    font-size: 20px;
}

.task-form-field {
  background-color: #171717;
  color: #dedede;
  font-family: 'Poppins', sans-serif;
  border-radius: 10px;
  height: 2rem;
  width: 50vw;
}

.green-stuff {
  color: #10b981;
}

.input-field {
  display: flex;
  flex-direction: column;
}

.dim-color {
  color: #a3a3a3;
}

@media only screen and (max-width: 600px) {
    .toadd input {
      width: 75vw;
    }
}

</style>


