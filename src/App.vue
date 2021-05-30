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
            <todo-component v-bind:items="tasks"></todo-component>
          </div>
          <div class="doing-task">
            <doing-component v-bind:items="tasks"></doing-component>
          </div>
          <div class="done-task">
            <done-component v-bind:items="tasks"></done-component>
          </div>
        </div>
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
export default {
  name: "App",
  components: {
    TodoComponent,
    DoingComponent,
    DoneComponent,
  },
  data() {
    return {
       tasks: [
        {
          id: "1",
          title: "Tasks no 1",
          work: "zzzzzzzzzzzzzzzz",
          status:"todo"
        },
        {
          id: "2",
          title: "Tasks no 2",
          work: "zzzzzzzzzzzzzzzz",
          status:"doing"
        },
        {
          id: "3",
          title: "Tasks no 3",
          work: "zzzzzzzzzzzzzzzz",
          status:"done"
        },
      ],
    };
  },
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
