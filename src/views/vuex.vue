<template>
    <div>vuex</div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: 'vuex',
    setup() {
        const aa = ref<string>('')
        return {
            aa
        }
    }
})
</script>
