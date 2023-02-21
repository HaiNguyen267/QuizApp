<template>
    <div class="results">
        <p>Your Results...</p>
        <h1>
            {{ numberOfCorrectAnswers }} / {{ total }}
        </h1>
        <RouterLink to="/" class="link">Do other quiz</RouterLink>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
const { numberOfCorrectAnswers, total } = defineProps(['numberOfCorrectAnswers', 'total'])

</script>

<style lang="scss" scoped>
.results {
    text-align: center;
    padding: 100px;

    p {
        font-size: 25px;
    }

    h1 {
        font-size: 80px;
    }

    .link {
        padding: 10px;
        border: 1px solid black;
        border-radius: 10px;
        text-decoration: none;
        font-size: 20px;
        margin: 20px;
        background: lightgray;
        color: black;
        transition: all 0.3s ease-in;

        &:hover {
            background: lightblue;
        }

    }
}
</style>