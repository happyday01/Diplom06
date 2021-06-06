<template>
    <div class="files-slider-item">
        <img :src="file.sizes[0].url">
        <div class="files-slider-item__name">
            {{ file.name }}
        </div>
        <div class="files-slider-item__name">
            {{ file.createdAt }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'FilesSliderItem',
    props: {
        file: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped>

</style>
