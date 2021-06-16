<template>
    <nav class="navbar">
        <div class="container navbar__container">
            <nuxt-link class="navbar__logo"
                       to="/"
            >
                <img src="/images/nav/logo-white.svg"
                     alt=""
                >
                <div>Политехнический<br>институт</div>
            </nuxt-link>
            <ul class="navbar__list">
                <li>
                    <nuxt-link to="/"
                               class="navbar__link"
                    >
                        <img src="/images/nav/homepage.svg"
                             alt=""
                        >
                        Главная
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/departments"
                               class="navbar__link"
                    >
                        <img src="/images/nav/student.svg"
                             alt=""
                        >
                        Студентам
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/applicants"
                               class="navbar__link"
                    >
                        <img src="/images/nav/backpack.svg"
                             alt=""
                        >
                        Абитуриентам
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/for-teacher"
                               class="navbar__link"
                    >
                        <img src="/images/nav/speech.svg"
                             alt=""
                        >
                        Преподавателям
                    </nuxt-link>
                </li>
            </ul>
            <div class="navbar__profile">
                profile
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'VNavbar',
};
</script>

<style scoped lang="scss">
.navbar {
    box-shadow: 0 3px 20px #0000001a;
}

.navbar__container {
    display: flex;
    align-items: center;
}

.navbar__logo {
    padding: 15px 50px;
    background: $primary;
    font-weight: bold;
    text-align: right;
    color: white;
    margin-right: 30px;
    letter-spacing: 0.54px;
    font-size: 20px;
    line-height: 22px;
    margin-bottom: -50px;

    &:hover {
        background: lighten($primary, 5%);
    }
}

.navbar__list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-auto-flow: column;
    grid-gap: 50px;

    a {
        color: $dark;

        &:hover {
            color: $primary;
        }
    }
}

.navbar__profile {
    margin-left: auto;
}
</style>
