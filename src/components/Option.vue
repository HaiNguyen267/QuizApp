<template>
    <div class="option">
            <p class="option-label">{{ label }}</p>
            <div class="option-value">
                <p>{{ text }}</p>
            </div>
        </div>
</template>

<script setup>
    const { label, text } = defineProps(['label', 'text']) 
</script>

<style lang="scss" scoped>
.option {
    display: flex;
    margin-bottom: 10px;
    width: 50%;
    // border-radius: 10px;
    cursor: pointer;
    align-items: center;
    background: rgb(216, 215, 215);


    .option-label {
        background-color: bisque;
        margin-right: 10px;
        padding: 10px;
        font-size: 20px;
        text-align: center;
    }

    .option-value {
        font-weight: bold;
        font-size: 20px;
    }
}
</style>