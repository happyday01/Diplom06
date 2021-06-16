<template>
    <div class="pt-0">
        <index-header />
        <index-advantages class="mb-5" />
        <last-news />
        <v-gallery />
    </div>
</template>

<script>
import IndexHeader from '../components/site/index/IndexHeader';
import IndexAdvantages from '../components/site/index/IndexAdvantages';
import LastNews from '../components/site/news/LastNews';
import VGallery from '../components/site/gallery/VGallery';
export default {
    components: { VGallery, LastNews, IndexAdvantages, IndexHeader },
    data() {
        return {};
    },
};
</script>

<style>
</style>
