
import { createStore } from 'vuex'

export  const store = createStore({
	
	state() {
		return {
			tasks: JSON.parse(localStorage.getItem('tasks') || '[]')
		}
	},
	mutations: {
		CREATE_TASK(state, task) {
			new Date(task.date) < new Date ? task.status = 'отменен' : task.status = 'активный'
			state.tasks.push(task)
			localStorage.setItem('tasks', JSON.stringify(state.tasks))
		},
		CANCEL_STATUS(state, taskId) {
		  let found = state.tasks.find(i => i.id === taskId);
		  if (found) found.status = 'отменен'
		},
		DONE_STATUS(state, taskId) {
		  let found = state.tasks.find(i => i.id === taskId);
		  if (found) found.status = 'завершен'
		},
		PENDING_STATUS(state, taskId) {
		  let found = state.tasks.find(i => i.id === taskId);
		  if (found) found.status = 'выполняется'
		}
	},
    actions: {
		createTask({commit}, task) {
		  commit('CREATE_TASK', task)
		},
		cancelStatus({commit}, taskId) {
		  commit('CANCEL_STATUS', taskId)
		},
		doneStatus({commit}, taskId) {
			commit('DONE_STATUS', taskId)
		  },
		pendingStatus({commit}, taskId) {
		  commit('PENDING_STATUS', taskId)
		},
	},

	getters: {
      tasks: s => s.tasks,
	  taskById: s => id => s.tasks.find(t => t.id === id)
	}
})