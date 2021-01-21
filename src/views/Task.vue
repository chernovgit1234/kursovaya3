<template>
  <div class="card">
    <h2>{{taskget.title}}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="taskget.status" /></p>
    <p><strong>Дэдлайн</strong>: {{new Date(taskget.date).toLocaleDateString()}}</p>
    <p><strong>Описание</strong>: {{taskget.description}}</p>
    <div>
      <button class="btn" @click="pendingStatus">Взять в работу</button>
      <button class="btn primary" @click="doneStatus">Завершить</button>
      <button class="btn danger" @click="cancelStatus">Отменить</button>
    </div>
  </div>
</template>

<script>
import {computed} from 'vue'
import {useRoute} from 'vue-router'
import {useStore} from 'vuex'
import AppStatus from '../components/AppStatus'

export default {
    
    setup() {
      const store = useStore()
	    const route = useRoute()
	  
      const taskget = computed(() => {
        return store.getters.taskById(+route.params.id)
	    })

      function cancelStatus() {
          store.dispatch('cancelStatus', +route.params.id)
      }
      function doneStatus() {
          store.dispatch('doneStatus', +route.params.id) 
      }
      function pendingStatus() {
          store.dispatch('pendingStatus', +route.params.id) 
      }
      
      return {
        taskget, cancelStatus, doneStatus, pendingStatus
      }
	},

    components: {AppStatus}
}
</script>

<style scoped>

</style>