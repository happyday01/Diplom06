<template>
    <div class="container">
        <news-card v-for="idx in 5"
                   :key="idx"
                   class="mb-4"
        />
    </div>
</template>

<script>
export default {
    name: 'News',
};
</script>

<style scoped>

</style>
