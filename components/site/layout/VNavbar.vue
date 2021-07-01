<template>
    <nav class="navbar"
         :class="{navbar_expand: d_menuIsActive}"
    >
        <div class="container navbar__container ">
            <nuxt-link class="navbar__logo"
                       to="/"
            >
                <img src="/images/nav/logo-white.svg"
                     alt=""
                >
                <div class="py-3">
                    Политехнический<br>институт
                </div>
            </nuxt-link>
            <div class="navbar__burger"
                 role="button"
                 @click="expandNavbar()"
            >
                <span />
            </div>
            <ul class="navbar__list">
                <li>
                    <nuxt-link to="/"
                               class="navbar__link"
                    >
                        <img src="/images/nav/homepage_nav.svg"
                             alt=""
                        >
                        Главная
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/departments"
                               class="navbar__link"
                    >
                        <img src="/images/nav/student_nav.svg"
                             alt=""
                        >
                        Студентам
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/applicants"
                               class="navbar__link"
                    >
                        <img src="/images/nav/backpack_nav.svg"
                             alt=""
                        >
                        Абитуриентам
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/for-teacher"
                               class="navbar__link"
                    >
                        <img src="/images/nav/speech_nav.svg"
                             alt=""
                        >
                        Преподавателям
                    </nuxt-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'VNavbar',
    data() {
        return {
            d_menuIsActive: false,
            d_navList: null,
            d_navContainer: null,
        };
    },
    watch: {
        $route: {
            deep: true,
            handler() {
                this.d_menuIsActive = false;
            },
        },
    },
    mounted() {
        this.d_navList = document.querySelector('.navbar__list');
        this.d_navContainer = document.querySelector('.navbar__container');
        this.d_menuIsActive = false;
        this.setNavListTopValue();
    },
    methods: {
        expandNavbar() {
            this.d_menuIsActive = !this.d_menuIsActive;
            this.setNavListTopValue();
        },
        setNavListTopValue() {
            if (this.d_menuIsActive) {
                this.d_navList.style.top = this.d_navContainer.clientHeight + 'px';
            } else {
                this.d_navList.style.top = (this.d_navList.clientHeight * -1) + 'px';
            }
        },
    },
};
</script>

<style scoped lang="scss">
.navbar {
    box-shadow: 0 3px 20px #0000001a;
}

.navbar__container {
    display: flex;
    align-items: center;
    @include media-breakpoint-down(md) {
        max-width: 100%;
        justify-content: space-between;
        position: fixed;
        z-index: 5;
        background: $primary;
    }
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

    @include media-breakpoint-down(md) {
        text-align: left;
        display: grid;
        grid-auto-flow: column;
        grid-gap: 15px;
        align-items: center;
        padding: 0;
        margin: 0;
        background: transparent;
        &:hover {
            opacity: .7;
            background: transparent;
        }
    }
}

.navbar__list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-auto-flow: column;
    grid-gap: 50px;
    font-size: 20px;

    a {
        color: $dark;

        &:hover {
            color: $primary;
        }
    }

    @include media-breakpoint-down(md) {
        position: absolute;
        background: white;
        //top: -180px;
        left: 0;
        width: 100%;
        display: grid;
        grid-auto-flow: row;
        grid-gap: 10px;
        box-shadow: none;
        opacity: 0;
        transition: top 1s, opacity .2s;
        li {
            padding: 0 15px;

            &:first-child {
                padding-top: 15px;
            }

            &:last-child {
                padding-bottom: 15px;
            }
        }
    }
}

.navbar__profile {
    margin-left: auto;
    @include media-breakpoint-down(md) {
        display: none;
    }
}

.navbar_expand {
    .navbar__burger {
        z-index: 5;

        span {
            transform: rotate(45deg);

            &:before {
                transform: rotate(-90deg) translate(-6px);
            }

            &:after {
                transform: rotate(-90deg) translate(6px);
                opacity: 0;
            }
        }
    }

    .navbar__list {
        @include media-breakpoint-down(md) {
            //top: 75px;
            opacity: 1;
            box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.5);
            transition: top .2s, opacity 250ms cubic-bezier(1, .01, .83, .67), box-shadow .2s;
        }
    }
}

.navbar__burger {
    z-index: 1000;
    background: transparent;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 15px;
    @include media-breakpoint-up(lg) {
        display: none;
    }

    span {
        background: $gray;
        position: relative;
        height: 2px;
        border-radius: 1px;
        width: 20px;
        display: inline-block;
        margin: 10px 0;
        transition: transform .2s;

        &:before, &:after {
            content: '';
            position: absolute;
            left: 0;
            height: 2px;
            width: 100%;
            background: $gray;
            transition: transform .2s;
        }

        &:before {
            top: -6px;
        }

        &:after {
            bottom: -6px;
            left: 0;
            transition: opacity .2s;
        }
    }
}
</style>
