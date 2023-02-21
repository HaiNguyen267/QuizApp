<template>
    <div class="question-container">
        <h1 class="question">
            {{ question.text }}
        </h1>
    </div>

    <div class="options-container">
        <Option 
            v-for="option in question.options" 
            :label="option.label" 
            :text="option.text"
            @click="checkCorrectAnswer(option.isCorrect)"
        />
    </div>
</template>

<script setup>
import { defineEmits } from 'vue';
import Option from './Option.vue';

const emit = defineEmits(['selectOption'])
const { question } = defineProps(['question'])

const checkCorrectAnswer = (isCorrect) => {
    emit('selectOption', isCorrect)
}
</script>

<style lang="scss" scoped>
.question-container {
    margin-top: 20px;
}

.question {
    font-size: 40px;
    margin-bottom: 20px;
}
</style>