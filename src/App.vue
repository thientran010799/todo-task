<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      <header>
        <div class="header" style="margin: 0px">
          <h1 class="h1">Warrior Team</h1>
        </div>
      </header>
      <div class="body">
        <div class="title">
          <h1>To do list</h1>
        </div>
        <div class="tasks">
          <div class="todo-task">
            <todo-component></todo-component>
          </div>
          <div class="doing-task">
            <doing-component></doing-component>
          </div>
          <div class="done-task">
            <done-component></done-component>
          </div>
        </div>
      </div>
      <div class="tinhtoan">
        <p>chon trang thai</p>
        <select v-model="statusSelected">
          <option v-for="(item, index) in taskStatus" :key="index" :value="item.status" >
            {{ item.status }}
          </option>
        </select >
        <p>select:{{statusSelected}}</p>
         <p>chon task</p>
        <select v-model="idSelected">
          <option v-for="item in tasks" :key="item.id" :value="item.id">
            {{ item.id }}
          </option>
        </select>
        <p>select:{{idSelected}}</p>
        <br>
        <button @click="changeStatus">click me</button>
      </div>
      <footer>
        <div class="footer">
          <h1>This is footer</h1>
        </div>
      </footer>
    </body>
  </html>
</template>

<script>
import TodoComponent from "./components/TodoComponent.vue";
import DoingComponent from "./components/DoingComponent.vue";
import DoneComponent from "./components/DoneComponent.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    TodoComponent,
    DoingComponent,
    DoneComponent,
  },
  data() {
    return {
      idSelected:"",
      statusSelected:""
    };
  },
  computed: {
    ...mapState(["tasks", "taskStatus"]),
  },
  methods : {
    changeStatus(){
      let obj = {
        idSelected : this.idSelected,
        statusSelected : this.statusSelected }

      this.actchangeStatus(obj)
    },
  ...mapActions({
    'actchangeStatus':'changeStatus'
  })
  }
};
</script>

<style>
.header {
  border: 1px solid #93b4d4;
  margin: 10px;
  color: rgb(219, 155, 195);
  text-align: center;
}
.body .title h1 {
  color: rgb(136, 124, 240);
  text-align: center;
}
.tasks {
  width: 100%;
  display: flex;
  justify-content: center;
}
.body .tasks .todo-task,
.doing-task,
.done-task {
  width: 33.333%;
}
</style>
