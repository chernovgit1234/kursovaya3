<template>
  <span class="badge" :class="status">{{type}}</span>
</template>

<script>
    import {computed} from 'vue'
	export default {
		props: ['type'],
		setup(props) {
		const status = computed(() => {
			return {'primary': props.type === 'активный' || 'завершен', 'warning': props.type === 'выполняется', 'danger': props.type === 'отменен'}
		})

		return {
			status
		}
		}
	}
</script>