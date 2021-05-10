<template>
    <div>
        <h1>msg:{{ msg }}</h1>
        <h1>msg1:{{ msg1 }}</h1>
        <h1>msg2:{{ msg2 }}</h1>
        <h1>msg3:{{ msg3 }}</h1>
        <el-button type="primary" @click="count1()">主要按钮</el-button>
    </div>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from 'vue'

export default defineComponent({
    name: 'HelloWorld',
    props: {
        msg: {
            type: String,
            required: true
        },
        obj: {
            type: Object
        }
    },
    emits: ['update:msg'],
    setup: (_, { emit }) => {
        const count = ref(0)
        const msg1 = computed(() => `${_.msg}111`)
        const msg2 = computed(() => `${_.obj?.aa}222`)
        const msg3 = computed(() =>
            _.obj?.bb.reduce((pre: number, el: number) => {
                return pre + el
            })
        )
        const count1 = () => {
            emit('update:msg', '66666')
        }
        return { count, count1, msg1, msg2, msg3 }
    }
})
</script>

<style scoped>
a {
    color: #42b983;
}

label {
    margin: 0 0.5em;
    font-weight: bold;
}

code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
}
</style>
