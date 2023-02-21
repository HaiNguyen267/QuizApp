<template>
    <div>
        <header>
            <h4>Question {{current + 1}}/{{ total }}</h4>
            <div class="bar">
                <div class="completion" :style="{width: `${(current+1) * 100 / total}%`}">

                </div>
            </div>
        </header>
    </div>
</template>

<script setup>
    import { computed, ref, watch, toRef } from 'vue'

    const { current, total } = defineProps(['current', 'total'])
</script>

<style lang="scss" scoped>

@function calProgress($currentIndex, $total) {
    @return ($currentIndex + 1) / $total 
}
header {
    margin-top: 30px;

    h4 {
        font-size: 30px;
    }

    .bar {
        width: 300px;
        height: 50px;
        border: 3px solid black;
    }

    .completion {
        height: 100%;
        // width: 33%;
        background: lightblue;
    }
}
</style>