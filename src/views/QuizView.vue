<template>
    <div> 
        <QuizHeader :total="quiz.questions.length" :current="currentQuestionIndex"/>
        <Question 
            v-if="!showResult"
            :question="quiz.questions[currentQuestionIndex]"
            @select-option="onOptionSelected"
        />
        <Result 
            v-else
            :numberOfCorrectAnswers="numberOfCorrectAnswers"
            :total="quiz.questions.length"
        />
        <!-- <button @click="nextQuestion">Next question</button> -->
    </div>
</template>

<script setup>
import Question from '../components/Question.vue'
import QuizHeader from './QuizHeader.vue';
import { useRoute } from 'vue-router'
import Result from '../components/Result.vue'
import quizes from '../assets/data.json'
import { ref } from 'vue';

const route = useRoute()
const quizId = route.params.id
const quiz = quizes.find(q => q.id == quizId);
const currentQuestionIndex = ref(0)
const numberOfCorrectAnswers = ref(0)
const showResult = ref(false)

function nextQuestion() {
    if (currentQuestionIndex.value < quiz.questions.length - 1) {
        currentQuestionIndex.value++;
    }
}

const onOptionSelected = (isCorrect) => {
    if (isCorrect) {
        numberOfCorrectAnswers.value ++
    }

    // when the last question is answered
    if (currentQuestionIndex.value == quiz.questions.length - 1) {
        showResult.value = true 
    }
    nextQuestion()
}

</script>

<style lang="scss" scoped></style>