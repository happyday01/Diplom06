<template>
    <div class="directions-slider">
        <direction-card v-for="direction in d_directions"
                        :key="direction.id"
                        :direction="direction"
        />
    </div>
</template>

<script>
import DirectionCard from './DirectionCard';
export default {
    name: 'DirectionsSlider',
    components: { DirectionCard },
    data() {
        return {
            d_directions: [
                {
                    id: 1,
                    name: 'Инфокоммуникационные технологии и системы связи (очная/заочная)',
                    image: {
                        url: '/images/applicants/direction-example.jpg',
                    },
                },
                {
                    id: 2,
                    name: 'Информационные системы и технологии(очная/заочная)',
                    image: {
                        url: '/images/applicants/isit.png',
                    },
                },
                {
                    id: 3,
                    name: 'Управление в технических системах(очная/заочная)',
                    image: {
                        url: '/images/applicants/uts.png',
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
    @include media-breakpoint-down(xs) {
    grid-template-columns: auto;
    }
}
</style>
