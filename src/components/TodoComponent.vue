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
      <div class="todo-tasks">
        <div class="task-title">
          <h1>Todo</h1>
        </div>
        <div v-for="task in taskStatus" :key="task.id" class="task">
          <p>Number of task: {{ task.id }}</p>
          <p>Title of task: {{ task.title }}</p>
          <p>Work: {{ task.work }}</p>
          <p>Status: {{ task.status }}</p>
        </div>
      </div>
    </body>
  </html>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "TodoComponent",
  data() {
    return {};
  },
  computed: {
    taskStatus() {
      return this.tasks.filter(function (t) {
        return t.status == "todo";
      });
    },
    ...mapState(['tasks'])
  },
};
</script>

<style>
/* .todo-tasks{
  border: 1px solid black;
} */
.todo-tasks .task-title {
  border: 1px solid black;
}
.todo-tasks .task-title h1 {
  text-align: center;
  margin: 0px;
  background-color: red;
}
.todo-tasks .task {
  align-items: center;
  text-align: center;
  margin: 2px;
  border: 1px solid #000;
}
</style>