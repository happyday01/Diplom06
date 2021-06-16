<template>
    <div class="gallery">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-6">
                    <h2>Галерея</h2>
                    <p class="mb-3">
                        Кликай на дни и просматривай фотографии выбранного дня.
                    </p>
                    <v-gallery-calendar @change="reloadImage" />
                    <div class="mt-5"
                         v-html=" d_currInfo"
                    />
                </div>
                <div class="col-12 col-lg-6 text-right">
                    <img class="w-100"
                         :src="d_image"
                         alt=""
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VGalleryCalendar from './VGalleryCalendar';

export default {
    name: 'VGallery',
    components: {
        VGalleryCalendar,
    },
    data() {
        return {
            d_image: 'https://picsum.photos/800/1000',
            d_currInfo: '<strong>События дня:</strong>' +
                '<br>8:00 - Мероприятие по разработке программного обеспечения У408' +
                '<br>10:00 - Мероприятие по разработке программного обеспечения У408' +
                '<br>12:00 - Мероприятие по разработке программного обеспечения У408',
            d_info: ['События дня:<br>8:00 - Мероприятие по разработке программного обеспечения У408',
                'События дня:<br>10:00 - Мероприятие по разработке программного обеспечения У408',
                'События дня:<br>12:00 - Мероприятие по разработке программного обеспечения У408',
            ],
        };
    },
    methods: {
        reloadImage(val) {
            this.d_image = 'https://picsum.photos/800/1000?' + Math.random();
            this.d_currInfo = this.d_info[this.getRandomInt(3)];
        },
        getRandomInt(max) {
            return Math.floor(Math.random() * max);
        },
    },
};
</script>

<style scoped lang="scss">
.gallery {
    padding: 50px 0;
}
</style>
