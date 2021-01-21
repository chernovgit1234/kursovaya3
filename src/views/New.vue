<template>
  <form class="card" @submit.prevent="createTask" >
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text"  v-model="title">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" v-model="date">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea  v-model="description"></textarea>
    </div>

    <button class="btn primary" type="submit" :disabled="activeBtn" >Создать</button>
  </form>
</template>


 <script>
   import { ref, computed } from 'vue'
   import {useRouter} from 'vue-router'
   import {useStore} from 'vuex'
  
  export default {
    setup() {
		const store = useStore()
		const router = useRouter()

		const title = ref('')
		const date = ref(null)
		const description = ref('')
		
		const activeBtn = computed(() => {
			return !title.value || !description.value || !date.value
		})

		function createTask() {
			const task = {
				title: title.value,
				date: date.value,
				description: description.value,
				status: 'активный',
				id: Date.now()
			}
			router.push('/')
			store.dispatch('createTask', task)
		}

		return {
			title, date, description , activeBtn, createTask
		}
	} 
  }
</script> 