<template>
    <div>
        <div class="container mb-5">
            <h2 class="h3">
                Научные издания
            </h2>
            <div class="row">
                <div class="tojournal col-12 col-md-5">
                    <a href="https://jc.surgu.ru/jour"
                       class="tojournal-link"
                    >
                        <img src="/images/for-teacher/to-journal.png"
                             alt=""
                        >
                        <span>Перейти на сайт</span>
                    </a>
                </div>
                <div class="col-12 col-md-7">
                    <h3 class="h4">
                        Вестник кибернетики
                    </h3>
                    <p>Периодичность издания – 4 выпуска в год.</p>
                    <p>Журнал включен в перечень ВАК по 05.00.00 – технические науки.</p>
                    <p>
                        Учредитель – Бюджетное учреждение высшего образования Ханты-Мансийского автономного округа –
                        Югры
                        «Сургутский государственный университет».
                    </p>
                    <p>
                        Адрес редакции: 628412, Ханты-Мансийский автономный округ – Югра, г. Сургут, ул. Энергетиков,
                        22.
                    </p>
                    <p>Тел. +7 (3462) 76-29-88; e-mail: proceed.cyber@mail.com.</p>
                </div>
            </div>
        </div>
        <div class="container mb-5">
            <h2 class="h3">
                Сборники научных статей
            </h2>
            <attachment-row v-for="(file, idx) in d_files"
                            :key="idx"
                            :attachment="file"
            />
            <attachment-row v-for="(file, idx) in d_files"
                            :key="idx"
                            :attachment="file"
            />
        </div>
        <div class="container mb-5">
            <h2 class="h3">
                Всемирная инициатива CDIO
            </h2>
            <div class="row align-items-center mb-4">
                <div class="col-12 col-md-7">
                    <img src="/images/for-teacher/CDIOVector.svg"
                         alt=""
                    >
                </div>
                <div class="tojournal col-12 col-md-5">
                    <a href="http://www.cdio.org/"
                       class="tojournal-link"
                    >
                        <img src="/images/for-teacher/cdio.jpg"
                             alt=""
                        >
                        <span>Перейти на сайт</span>
                    </a>
                </div>
            </div>
            <p>
                Инициатива CDIO состоит из более чем 120 школ по всему миру, организованных в 7 регионов; Европа,
                Северная Америка, Азия, Великобритания-Ирландия, Латинская Америка, Австралия, Новая Зеландия и Африка.
                Их возглавляет один или несколько региональных лидеров, назначаемых каждым регионом.Инициатива CDIO
                организует ежегодную Международную конференцию CDIO в июне и осеннюю встречу каждый год. Все регионы
                также проводят 1-2 региональных собрания ежегодно, чтобы представить работу и исследования в рамках
                инженерного образования, выбрать региональных лидеров и послушать презентации новых школ,
                присоединившихся к Инициативе. Лидеры CDIO, все представители школ, встречаются раз в два месяца на
                телеконференции, чтобы обсудить и управлять различными мероприятиями Инициативы.
            </p>
        </div>
        <div class="container mb-5">
            <department-schedule />
        </div>
    </div>
</template>

<script>
import DepartmentSchedule from '../components/site/departments/DepartmentSchedule';
import AttachmentRow from '../components/common/AttachmentRow';

export default {
    name: 'ForTeacher',
    components: {
        DepartmentSchedule,
        AttachmentRow,
    },
    data() {
        return {
            d_files: [
                {
                    name: 'Правила внутреннего трудового распорядка, с изменениями от 24.12.2020 г., протокол УС №10',
                    url: 'asd.pdf',
                },
                {
                    name: 'Расписание звонков',
                    url: 'asd.pdf',
                },
            ],
        };
    },
};
</script>

<style scoped lang="scss">
.tojournal-link {
    position: relative;

    span {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        text-align: center;
        color: transparent;
        font-size: 28px;
    }
}

.tojournal-link:hover {
    span {
        color: white;
    }

    img {
        filter: brightness(.5);
    }
}

/*

*/
</style>
