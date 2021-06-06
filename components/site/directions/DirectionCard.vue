<template>
    <div class="direction-card"
         :style="{backgroundImage: `url(${direction.image.url})`}"
    >
        <h3 class="direction-card__name">
            {{ direction.name }}
        </h3>
    </div>
</template>

<script>
export default {
    name: 'DirectionCard',
    props: {
        direction: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped lang="scss">
.direction-card {
    background-size: cover;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;
    text-align: center;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(black, 0.5);
    }
}

.direction-card__name {
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 0;
    position: relative;
    z-index: 1;
}
</style>
