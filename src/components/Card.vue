

<script setup>
import { useRouter } from 'vue-router';


const { quiz } = defineProps(['quiz'])
const router = useRouter(); //<-- router declared outside function: CORRECT

const navigateToQuiz = () => {
    router.push(`/quiz/${quiz.id}`)
}

</script>

<template>
    <div class="card" @click="navigateToQuiz">
        <img :src="quiz.img">
        <div class="card-text">
            <h2>{{ quiz.name }}</h2>
            <p>{{ quiz.questions.length }} questions</p>
        </div>
    </div>
</template>

<style lang='scss' scoped>
.card {
    width: 250px;
    /* overflow: hidden; */
    border-radius: 5px;
    background: white;
    color: black;
    margin-right: 20px;
    cursor: pointer;

    h2 {
        font-weight: bold;
    }

    img {
        width: 250px;
        height: 150px;
        object-fit: cover;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }

    .card-text {
        padding: 10px;
    }

    &:hover {
        background: rgb(230, 230, 230);
    }
}
</style>