<template>
    <div class="teacher-card"
         :style="{backgroundImage: teacher.image.sizes[0].url}"
    >
        <div class="teacher-card__text">
            <h5 class="teacher-card__name">
                {{ teacher.lastName }} {{ teacher.firstName }} {{ teacher.middleName }}
            </h5>
            <div class="teacher-card__position">
                {{ teacher.position }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TeacherCard',
    props: {
        teacher: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped lang="scss">
.teacher-card {
    min-height: 300px;
    background-size: cover;
    display: flex;
    align-items: flex-end;
}

.teacher-card__text {
    background: rgba($primary, 0.8);
    padding: 15px;
    color: white;
    width: 100%;
}

.teacher-card__name {
    margin-bottom: 0;
}

.teacher-card__position {
    font-size: 14px;
}
</style>
