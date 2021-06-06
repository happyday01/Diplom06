<template>
    <div class="container departments">
        <department-card v-for="department in d_items"
                         :key="department.id"
                         :department="department"
        />
    </div>
</template>

<script>
export default {
    name: 'Departments',
    data() {
        return {
            d_items: [
                {
                    id: 1,
                    name: 'Кафедра автоматики и компьютерных систем',
                    image: {
                        sizes: [
                            {
                                url: '/images/Frame 24.jpg',
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
                                url: '/images/Frame 25.jpg',
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
                                url: '/images/Frame 26.jpg',
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
                                url: '/images/Frame 27.jpg',
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
                                url: '/images/Frame 28.jpg',
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
                                url: '/images/Frame 29.jpg',
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
                                url: '/images/Frame 30.jpg',
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
                                url: '/images/Frame 31.jpg',
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
}
</style>
