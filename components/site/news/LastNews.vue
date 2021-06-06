<template>
    <div class="last-news">
        <div class="container">
            <h2>Последние новости</h2>
            <div class="last-news__layout">
                <news-card class="last-news__last"
                           :show-image="true"
                />
                <news-card />
                <news-card />
                <div class="text-right">
                    <nuxt-link to="/news"
                               class="link"
                    >
                        Больше новостей <i class="icon-right-open" />
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LastNews',
};
</script>

<style scoped lang="scss">
.last-news {
    padding: 50px 0;
    background: $light;
}

.last-news__news {
    display: grid;
    grid-gap: 30px;
}

.last-news__layout {
    display: grid;
    grid-template-columns: 60% auto;
    grid-gap: 15px;
    @include media-breakpoint-down(md) {
        grid-template-columns: 1fr;
    }
}

.last-news__last {
    grid-row: 1/4;
}
</style>
