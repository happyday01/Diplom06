<template>
    <nuxt-link class="department-card"
               :to="`/departments/${department.id}`"
               :style="{'background-image': c_background}"
    >
        <div class="depart-card__name">
            {{ department.name }}
        </div>
        <div class="department-card__show">
            Смотреть
        </div>
    </nuxt-link>
</template>

<script>
export default {
    name: 'DepartmentCard',
    props: {
        department: {
            type: Object,
            required: true,
        },
    },
    computed: {
        c_background() {
            return `url('${this.department.image.sizes[0].url}')`;
        },
    },
};
</script>

<style scoped lang="scss">
@import "assets/sass/variables";
.department-card {
    min-height: 400px;
    background-size: cover;
    position: relative;
    border-radius: 7px;
    font-size: 24px;

    &:hover {
      scale: 102%;
    }
}

.depart-card__name {
    background: $primary;
    margin-top: 60px;
    margin-right: 100px;
    color: white;
    height: 27%;
    padding: 1em;
}

.department-card__show {
    background: $primary;
    padding: 15px 40px;
    position: absolute;
    bottom: 60px;
    right: 0;
    font-size: 18px;
    color: white;
}
</style>
