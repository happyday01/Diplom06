<template>
    <div class="container department">
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="department__header"
                     :style="{backgroundImage: d_department.image.sizes[0].url}"
                >
                    <nuxt-link class="department__back"
                               to="/departments"
                    >
                        Назад
                    </nuxt-link>
                    <h1 class="department__name">
                        {{ d_department.name }}
                    </h1>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div v-html="d_department.description" />
            </div>
        </div>
        <department-schedule class="mb-5" />
        <department-schedule class="mb-5" />
        <department-schedule />
        <div class="prepodi">
            </br>
            <h3>Преподавательский состав каферды АиКС</h3>
        </div>
        <div class="department__teachers mb-5">
            <teacher-card v-for="teacher in d_department.teachers"
                          :key="teacher.id"
                          :teacher="teacher"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Department',
    data() {
        return {
            d_department: {
                id: 1,
                name: 'Кафедра автоматики и компьютерных систем',
                description: '<strong>Бакалавриат<br /></strong>' +
                    '    -- «управление в технических системах», профиль «управление и информатика в технических системах»;<br />' +
                    '    -- «информатика и вычислительная техника», профиль «программное обеспечение средств вычислительной техники и автоматизированных систем»;<br />' +
                    '    -- «программная инженерия», профиль «программное обеспечение средств вычислительной техники и автоматизированных систем»;<br />' +
                    '<strong>Магистратура<br /></strong>' +
                    '--«управление в технических системах», программа «Управление и информатика в технических системах».<br />' +
                    'Основные направления научных исследований<br />' +
                    '    -- Разработка методов и аппаратурных средств лазерно-информационной технологии мониторинга газотранспортных объектов.<br />' +
                    '    -- Моделирование человеко-машинных систем в области автоматизации технологических процессов (научный руководитель — кандидат технических наук М. Я. Брагинский).<br />' +
                    '    -- Обработка изображений и распознавания зрительных образов (научные руководители — кандидаты технических наук, доценты Д. В. Тараканов и А. В. Запевалов).<br />' +
                    '    -- Издано две монографии по тематике научных исследований. Имеется свидетельств о государственной регистрации программ для ЭВМ.<br />' +
                    '<strong>Контактные данные:<br /></strong>' +
                    'E-mail: zapevalov_av@surgu.ru, medvedeva_na@surgu.ru, kuzin_da@surgu.ru<br />' +
                    'Тел.: +7 (3462) 76-31-25, +7 (3462) 76-31-26',
                image: {
                    sizes: [{
                        url: 'url("/images/department-example.jpg")',
                    }],
                },
                teachers: [
                    {
                        id: 1,
                        lastName: 'Петров',
                        firstName: 'Пётр',
                        middleName: 'Петрович',
                        position: 'Зав. кафедрой',
                        image: {
                            sizes: [{
                                url: 'url("/images/petrov.png")',
                            }],
                        },
                    },
                    {
                        id: 2,
                        lastName: 'Петров',
                        firstName: 'Пётр',
                        middleName: 'Петрович',
                        position: 'Зав. кафедрой',
                        image: {
                            sizes: [{
                                url: 'url("/images/petrov.png")',
                            }],
                        },
                    },
                    {
                        id: 3,
                        lastName: 'Петров',
                        firstName: 'Пётр',
                        middleName: 'Петрович',
                        position: 'Зав. кафедрой',
                        image: {
                            sizes: [{
                                url: 'url("/images/petrov.png")',
                            }],
                        },
                    },
                    {
                        id: 4,
                        lastName: 'Петров',
                        firstName: 'Пётр',
                        middleName: 'Петрович',
                        position: 'Зав. кафедрой',
                        image: {
                            sizes: [{
                                url: 'url("/images/petrov.png")',
                            }],
                        },
                    },
                    {
                        id: 5,
                        lastName: 'Петров',
                        firstName: 'Пётр',
                        middleName: 'Петрович',
                        position: 'Зав. кафедрой',
                        image: {
                            sizes: [{
                                url: 'url("/images/petrov.png")',
                            }],
                        },
                    },
                    {
                        id: 6,
                        lastName: 'Петров',
                        firstName: 'Пётр',
                        middleName: 'Петрович',
                        position: 'Зав. кафедрой',
                        image: {
                            sizes: [{
                                url: 'url("/images/petrov.png")',
                            }],
                        },
                    },
                ],
            },
        };
    },
};
</script>

<style scoped lang="scss">
.department__teachers {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;

    @include media-breakpoint-down(md) {
        grid-template-columns: 1fr;
    }
}

.department__header {
    min-height: 755px;
    background-size: cover;
    margin-bottom: 30px;
    padding-top: 50px;
}

.department__back {
    font-size: 24px;
    margin-left: 50px;
    display: block;
    color: white;
}

.department__name {
    font-size: 24px;
    background: $primary;
    padding: 15px 50px;
    margin-top: 60px;
    margin-right: 100px;
    color: white;
}
</style>
