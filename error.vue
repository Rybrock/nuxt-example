<script setup>
defineProps(['error']);
const handleClearError = () => clearError({ redirect: '/' })
</script>

<template>
    <div class="mt-7 max-w-sm mx-auto text-center card">
        <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
        <p class="mt-7 text-4xl">Oops..</p>
        <p class="mt-7 font-bold">{{ error.message }}</p>
        <p v-if="error.message" class="mt-7">Sorry we couldn't find that URL, please try again.</p>
        <button class="btn my-7 cursor-pointer" @click="handleClearError">Go Home</button>
    </div>
</template>

<style scoped></style>
