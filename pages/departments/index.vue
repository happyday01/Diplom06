<template>
    <div class="container departments">
        <department-card v-for="department in d_items"
                         :key="department.id"
                         :department="department"
        />
    </div>
</template>

<script>
import DepartmentCard from '../../components/site/departments/DepartmentCard';
export default {
    name: 'Departments',
    components: { DepartmentCard },
    data() {
        return {
            d_items: [
                {
                    id: 1,
                    name: 'Кафедра автоматики и компьютерных систем',
                    image: {
                        sizes: [
                            {
                                url: '/images/departments/Frame 24.jpg',
                            },
                        ],
                    },
                },
                {
                    id: 2,
                    name: 'Кафедра экспериментальной физики',
                    image: {
                        sizes: [
                            {
                                url: '/images/departments/Frame 25.jpg',
                            },
                        ],
                    },
                },
                {
                    id: 3,
                    name: 'Кафедра радиоэлектроники и электротехники ',
                    image: {
                        sizes: [
                            {
                                url: '/images/departments/Frame 26.jpg',
                            },
                        ],
                    },
                },
                {
                    id: 4,
                    name: 'Кафедра прикладной математики',
                    image: {
                        sizes: [
                            {
                                url: '/images/departments/Frame 27.jpg',
                            },
                        ],
                    },
                },
                {
                    id: 5,
                    name: 'Кафедра высшей математики',
                    image: {
                        sizes: [
                            {
                                url: '/images/departments/Frame 28.jpg',
                            },
                        ],
                    },
                },
                {
                    id: 6,
                    name: 'Кафедра информатики и вычислительной  техники',
                    image: {
                        sizes: [
                            {
                                url: '/images/departments/Frame 29.jpg',
                            },
                        ],
                    },
                },
                {
                    id: 7,
                    name: 'Кафедра автоматизированных систем обработки информциии и управления',
                    image: {
                        sizes: [
                            {
                                url: '/images/departments/Frame 30.jpg',
                            },
                        ],
                    },
                },
                {
                    id: 8,
                    name: 'Кафедра строительных технологий и конструкций',
                    image: {
                        sizes: [
                            {
                                url: '/images/departments/Frame 31.jpg',
                            },
                        ],
                    },
                },
            ],
        };
    },
};
</script>

<style scoped lang="scss">
.departments {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    @include media-breakpoint-down(xs) {
        grid-template-columns: auto;
        margin-bottom: 50px;
    }
}
</style>
