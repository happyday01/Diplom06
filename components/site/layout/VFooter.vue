<template>
    <footer class="footer">
        <div class="container footer__container">
            <img src="/images/footer/logo-primary.svg"
                 alt=""
            >
            <div>
                <h4 class="font-weight-bold text-primary">
                    Меню
                </h4>
                <ul class="list-unstyled">
                    <li>
                        <nuxt-link to="/"
                                   class="footer__link"
                        >
                            Главная
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/departments"
                                   class="footer__link"
                        >
                            Студентам
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/applicants"
                                   class="footer__link"
                        >
                            Абитуриентам
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/for-teacher"
                                   class="footer__link"
                        >
                            Преподавателям
                        </nuxt-link>
                    </li>
                </ul>
            </div>
            <div>
                <h4 class="font-weight-bold text-primary">
                    Корпуса
                </h4>
                <ul class="list-unstyled">
                    <li>
                        Корабль (К) - Ленина 1;
                    </li>
                    <li>
                        Административный (А) - Энергетиков 22;
                    </li>
                    <li>
                        Уникит (У) - Энергетиков 22;
                    </li>
                    <li>
                        Гуманитарный (Г) - Энергетиков 8;
                    </li>
                    <li>
                        Дружба - 50 лет ВЛКСМ;
                    </li>
                </ul>
            </div>
            <div class="text-md-right">
                <h4 class="font-weight-bold text-primary">
                    Общежития
                </h4>
                <ul class="list-unstyled">
                    <li>
                        ул. Рабочая 31/2
                    </li>
                    <li>
                        ул. 30 лет Победы 60/1
                    </li>
                </ul>
                <div class="footer__social">
                    <a class="icon-vk"
                       href="https://vk.com/polytech.surgu"
                    />
                    <a class="icon-telegram"
                       href="https://t.me/YznaiDolgiBot"
                    />
                    <a class="icon-instagram"
                       href="https://www.instagram.com/surgu/?hl=ru"
                    />
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'VFooter',
};
</script>

<style scoped lang="scss">
.footer__container {
    display: flex;
    justify-content: space-between;
    padding: 50px 0;

    @include media-breakpoint-down(md) {
        flex-direction: column;
        padding: 15px;
    }
}

.footer__link {
    color: $dark;

    &:hover {
        color: $primary;
    }
}

.footer__social {
    font-size: 24px;
    display: grid;
    grid-template-columns: 45px 30px 30px;
    grid-gap: 15px;
    text-align: left;
    justify-content: flex-end;

    @include media-breakpoint-down(md) {
        justify-content: flex-start;
    }

    a {
        color: $dark;
        opacity: 0.35;

        &:hover {
            color: $dark;
            opacity: 1;
        }
    }
}
</style>
