<template>
    <div class="applicants-header">
        <div class="row">
            <div class="col-12 col-md-7">
                <h1 class="h2">
                    Пройди мини опрос и узнай какая специальность подходит именно тебе!
                </h1>
                <p class="mb-3">
                    Кафедра автоматики и компьютерных систем организована в 1997 году. При открытии она называлась
                    «кафедра автоматики и процессов управления». В связи с расширением специальностей и изменением
                    специфики деятельности в 2002 произведено переименование. Сегодня это кафедра автоматики и
                    компьютерных систем.
                </p>
                <div data-marquiz-id="608fbced19933d0049b80662" />
                <script>
                    (function (t, p) {
                    window.Marquiz ? Marquiz.add([t, p]) : document.addEventListener('marquizLoaded', function () {
                    Marquiz.add([t, p]);
                    let btn = document.querySelector('.marquiz__button');
                    btn.style.borderRadius = '7px';
                    btn.style.padding = '21px 95px';
                    })
                    })('Button', {
                    id: '608fbced19933d0049b80662',
                    buttonText: 'Пройти тест!',
                    bgColor: '#fedfb0',
                    textColor: '#000000',
                    blicked: true
                    })
                </script>
            </div>
            <div class="col-12 col-md-5">
                <img src="/images/applicant.png">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ApplicantHeader',
    methods: {},
};
</script>

<style scoped lang="scss">
.marquiz__container {
    text-align: left;
}

.marquiz__button-custom {
    border-radius: 7px !important;
    padding: 21px 95px !important;
}
</style>
