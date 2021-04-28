<template>
    <div>
        <img alt="Vue logo" src="./assets/logo.png" />
        <el-button type="primary">主要按钮</el-button>
        <el-select v-model="value" placeholder="请选择">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            >
            </el-option>
        </el-select>
        <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
// import HelloWorld from '@/components/HelloWorld.vue'   aa

export default defineComponent({
    name: 'App',
    setup() {
        const value = ref('')
        const options = reactive([
            {
                label: '111',
                value: '1'
            },
            {
                label: '2222',
                value: '2'
            },
            {
                label: '3333',
                value: '3'
            },
            {
                label: '4444',
                value: '4'
            }
        ])
        return {
            value,
            options
        }
    }
    // components: {
    //     HelloWorld
    // }
})
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
