<template>
		<h3 class="text-white" v-if="!tasks.length">Добавьте первую задачу</h3>
	    <div v-else>
			<h3 class="text-white">Всего активных задач: {{countTasks}} </h3>
			<div 
				class="card"
				v-for="(task,idx) in tasks"
				:key="idx" 
			>
				<h2 class="card-title">
					{{task.title}}
					<AppStatus  :type="task.status" />
				</h2>
				<p>
					<strong>
					<small>
						{{new Date(task.date).toLocaleDateString()}}
					</small>
					</strong>
				</p>
				<button class="btn primary" @click="router.push('/task/' + task.id)">Посмотреть</button>
			</div>
		</div>
</template>

<script>
import AppStatus from '../components/AppStatus'
import { ref, reactive, computed } from 'vue'
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'
export default {

  setup() {

	const store = useStore()
	const router = useRouter()

	const countTasks = computed(() => {
	  return store.getters.tasks.filter(task => { 
		return task.status == 'активный'
	  }).length
	})

	const tasks = computed(() => {
	  return store.getters.tasks
	})

	return {
	  countTasks,
	  tasks,
	  router
	}
  },	 
  components: {AppStatus}
}
</script>
