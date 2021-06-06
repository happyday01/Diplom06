<template>
    <div class="news-card">
        <img v-if="showImage"
             class="news-card__image"
             src="/images/news-example.jpg"
        >
        <div class="news-card__text">
            <h5 class="font-weight-bold">
                Большие данные и искусственный интеллект в ArtLab СурГУ
            </h5>
            <div class="text-muted">
                16/04/2021
            </div>
            <p>
                Первокурсник направления «программная инженерия» Политехнического института Сургутского
                госуниверситета Максим Заказчик разработал прототип для определения по изображению игрушечная или
                настоящая модель машины...
            </p>
            <nuxt-link class="link link_underlined mt-3"
                       to="/news/1"
            >
                Читать полностью
            </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NewsCard',
    props: {
        showImage: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style scoped lang="scss">
.news-card {
    background: white;
    //box-shadow: 0 10px 35px -13px rgba(0, 0, 0, 0.3);
    border: 1px solid #e0e0e0;
}

.news-card__text {
    padding: 30px;

    @include media-breakpoint-down(md) {
        padding: 15px;
    }
}

.news-card__image {
    width: 100%;
}
</style>
