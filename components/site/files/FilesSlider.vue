<template>
    <div class="files-slider">
        <h2>Последние загруженные файлы</h2>
        <div ref="slider"
             class="files-slider__slider swiper-container"
        >
            <div class="swiper-wrapper">
                <div v-for="item in d_items"
                     :key="item.id"
                     class="swiper-slide"
                >
                    <files-slider-item :file="item" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';

export default {
    name: 'FilesSlider',
    data() {
        return {
            d_swiper: null,
            d_items: [
                {
                    name: 'Первая волна',
                    createdAt: new Date(),
                    sizes: [
                        {
                            url: '/images/spiski1.jpg',
                        },
                    ],
                },
                {
                    name: 'Вторая волна',
                    createdAt: new Date(),
                    sizes: [
                        {
                            url: '/images/spiski2.jpg',
                        },
                    ],
                },
                {
                    name: 'Третья волна',
                    createdAt: new Date(),
                    sizes: [
                        {
                            url: '/images/spiski1.jpg',
                        },
                    ],
                },
                {
                    name: 'Четвертая волна',
                    createdAt: new Date(),
                    sizes: [
                        {
                            url: '/images/spiski2.jpg',
                        },
                    ],
                },
            ],
        };
    },
    mounted() {
        this.d_swiper = new Swiper(this.$refs.slider, {
            slidesPerView: 2,
            spaceBetween: 30,
        });
    },
};
</script>

<style scoped>

</style>
