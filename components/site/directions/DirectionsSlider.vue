<template>
    <div class="directions-slider">
        <direction-card v-for="direction in d_directions"
                        :key="direction.id"
                        :direction="direction"
        />
    </div>
</template>

<script>
export default {
    name: 'DirectionsSlider',
    data() {
        return {
            d_directions: [
                {
                    id: 1,
                    name: 'ИНФОКОММУНИКАЦИОННЫЕ ТЕХНОЛОГИИ И СИСТЕМЫ СВЯЗИ (ОЧНАЯ/ЗАОЧНАЯ)',
                    image: {
                        url: '/images/direction-example.jpg',
                    },
                },
                {
                    id: 2,
                    name: 'ИНФОРМАЦИОННЫЕ СИСТЕМЫ И ТЕХНОЛОГИИ(ОЧНАЯ/ЗАОЧНАЯ)',
                    image: {
                        url: '/images/isit.png',
                    },
                },
                {
                    id: 3,
                    name: 'УПРАВЛЕНИЕ В ТЕХНИЧЕСКИХ СИСТЕМАХ(ОЧНАЯ/ЗАОЧНАЯ)',
                    image: {
                        url: '/images/uts.png',
                    },
                },
            ],
        };
    },
};
</script>

<style scoped lang="scss">
.directions-slider {
    padding: 100px 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
}
</style>
