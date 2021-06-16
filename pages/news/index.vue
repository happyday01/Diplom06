<template>
    <div class="container">
        <news-card v-for="idx in 5"
                   :key="idx"
                   class="mb-4"
        />
    </div>
</template>

<script>
import NewsCard from '../../components/site/news/NewsCard';
export default {
    name: 'News',
    components: { NewsCard },
};
</script>

<style scoped>

</style>
