<script setup>
const { data } = await useFetch('/api/games/12')
</script>
<template>
    <h1>Hello there from the About page</h1>
    <div>{{ data }}</div>
</template>
