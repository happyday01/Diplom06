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
                    <div class="mt-5">
                        {{ d_currInfo }}
                    </div>
                </div>
                <div class="col-12 col-lg-6 text-right">
                    <img class="w-100"
                         :src="d_image"
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VGallery',
    data() {
        return {
            d_image: 'https://picsum.photos/800/1000',
            d_currInfo: 'События дня:\n' +
                '8:00 - Мероприятие по разработке программного обеспечения\n' +
                'У408' +
                '10:00 - ',
            d_info: ['Кликай на дни и просматривай фотографии выбранного дня.',
                'не Кликай на дни и просматривай фотографии выбранного дня.',
                'нsdgsdfgКликай на дни и просматривай фотографии выбранного дня.',
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
