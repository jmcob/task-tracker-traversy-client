<template>
        <AddTask v-show="showAddTask" @add-task="addTask" />
        <Tasks
                @toggle-reminder="toggleReminder"
                @delete-task="deleteTask"
                :tasks="tasks"
        />
</template>

<script>
import Tasks from "../components/Tasks";
import AddTask from "../components/AddTask";
export default {
        name: "Home",
        props: {
                showAddTask: Boolean,
        },
        components: {
                Tasks,
                AddTask,
        },
        data() {
                return {
                        tasks: [],
                };
        },
        methods: {
                async addTask(newTask) {
                        let task = JSON.stringify(newTask);
                        const res = await fetch(
                                process.env.VUE_APP_API_URL + "/api/tasks/",
                                {
                                        method: "POST",
                                        headers: {
                                                "Content-type":
                                                        "application/json",
                                        },
                                        body: task,
                                }
                        );
                        const data = await res.json();
                        this.tasks = [...this.tasks, data];
                },
                async deleteTask(id) {
                        const res = await fetch(
                                process.env.VUE_APP_API_URL +
                                        `/api/tasks/${id}`,
                                {
                                        method: "DELETE",
                                }
                        );

                        res.status === 200
                                ? (this.tasks = this.tasks.filter(
                                          (task) => task._id !== id
                                  ))
                                : alert("Error deleting task");
                },
                async toggleReminder(id) {
                        const taskToToggle = await this.fetchTask(id);
                        const updTask = {
                                ...taskToToggle,
                                reminder: !taskToToggle.reminder,
                        };
                        const res = await fetch(
                                process.env.VUE_APP_API_URL +
                                        `/api/tasks/${id}`,
                                {
                                        method: "PUT",
                                        headers: {
                                                "Content-type":
                                                        "application/json",
                                        },
                                        body: JSON.stringify(updTask),
                                }
                        );
                        const data = await res.json();
                        this.tasks = this.tasks.map((task) =>
                                task._id === data._id
                                        ? { ...task, reminder: data.reminder }
                                        : task
                        );
                },
                async fetchTasks() {
                        const res = await fetch(
                                process.env.VUE_APP_API_URL + "/api/tasks"
                        );
                        const data = await res.json();
                        return data;
                },
                async fetchTask(id) {
                        const res = await fetch(
                                process.env.VUE_APP_API_URL + `/api/tasks/${id}`
                        );
                        const data = await res.json();
                        return data;
                },
        },
        async created() {
                this.tasks = await this.fetchTasks();
        },
};
</script>
