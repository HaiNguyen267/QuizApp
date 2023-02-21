<script setup>
import data from '../assets/data.json'
import { ref, watch } from 'vue';
import Card from '../components/Card.vue'
const quizes = ref(data)
const search = ref('')

watch(search, () => {
    quizes.value = data.filter(card => card.name.toLowerCase().startsWith(search.value.toLowerCase()))
})

</script>


<template>
    <div class="container">
        <header>
            <h1>
                Quizes
            </h1>
            <input type="text" placeholder="Search..." v-model.trim="search">

        </header>

        <div class="options-container">
            <Card v-for="(quiz, index) in quizes" :quiz="quiz" :key="index" />
        </div>
    </div>
</template>

<style lang='scss' scoped>
.container {
    max-width: 1000px;
    margin: 0 auto;

    header {
        margin-bottom: 10px;
        margin-top: 10px;
        font-weight: bold;
        display: flex;
        justify-content: flex-start;

        h1 {
            font-weight: bold;
            margin-right: 10px;
        }

        input {
            border: 1px solid rgb(132, 132, 132);
            background-color: white;
            padding: 5px 10px;
            border-radius: 5px;
            
            &:focus {
                outline: none;
            }
        }

    }



    .options-container {
        display: flex;
        flex-wrap: wrap;
    }

}

/* CARD */

.options-container {
    padding: 20px 0;


}
</style>