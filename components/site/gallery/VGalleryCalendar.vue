<template>
    <div class="calendar">
        <div class="text-center">
            <span role="button"
                  class="calendar__prev"
                  @click="d_date = d_date.subtract(1, 'month')"
            >Предыдущий </span>
            <span class="calendar__month">{{ c_month }}</span>
            <span role="button"
                  class="calendar__next"
                  @click="d_date = d_date.add(1, 'month')"
            > Следующий</span>
        </div>
        <div class="calendar__content">
            <div class="calendar__date-wrap">
                <div class="calendar__date">
                    {{ c_date }}
                </div>
                <div>{{ c_year }} г.</div>
            </div>
            <div class="calendar__days">
                <div>Пн.</div>
                <div>Вт.</div>
                <div>Ср.</div>
                <div>Чт.</div>
                <div>Пт.</div>
                <div>Сб.</div>
                <div>Вс.</div>
                <div v-for="i in c_firstDayIdx"
                     :key="i"
                />
                <div v-for="day in c_daysCount"
                     :key="c_firstDayIdx + day"
                     class="calendar__day"
                     :class="{ 'calendar__day_current' : day === d_date.date() }"
                     @click="d_date = d_date.set('date', day)"
                >
                    {{ day }}
                </div>
            </div>
        </div>
        <div class="calendar__week">
            {{ c_week }}
        </div>
    </div>
</template>

<script>
import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import ru from 'dayjs/locale/ru';

dayjs.extend(weekOfYear);
dayjs.extend(weekday);

dayjs.locale(ru);

export default {
    name: 'GalleryCalendar',
    data() {
        return {
            d_date: dayjs(),
        };
    },
    computed: {
        c_month() {
            const month = this.d_date.format('MMMM');
            return month.charAt(0).toUpperCase() + month.slice(1);
        },
        c_week() {
            return this.d_date.week() % 2 ? 'Числитель' : 'Знаменатель';
        },
        c_date() {
            return this.d_date.format('D MMMM');
        },
        c_year() {
            return this.d_date.format('YYYY');
        },
        c_daysCount() {
            return this.d_date.daysInMonth();
        },
        c_firstDayIdx() {
            return this.d_date.date(1).weekday();
        },
    },
    watch: {
        d_date(val) {
            this.$emit('change', val);
        },
    },
    methods: {},
};
</script>

<style scoped lang="scss">
.calendar {
    background: $primary;
    padding: 15px;
    color: white;
    @include media-breakpoint-down(xs) {
    padding: 15px 0;
    }
}

.calendar__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    margin: 15px 0;
    font-size: 16px;

    @include media-breakpoint-down(md) {
        grid-gap: 5px;
    }
    @include media-breakpoint-down(xs) {
    grid-template-rows: auto 1fr;
    grid-template-columns:none;
    }
}

.calendar__days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 10px;
    
    @include media-breakpoint-down(md) {
        grid-gap: 0;
        padding:0 0 0 15px;
        place-items: center;
        text-align: center;
    }
    @include media-breakpoint-down(xs) {
        padding: 15px 15px 0;
    }

    @include media-breakpoint-down(md) {
        grid-gap: 0;
    }
}

.calendar__day {
    text-align: center;
    width: 30px;
    height: 30px;
    line-height: 30px;
    cursor: pointer;
    border-radius: 50%;
    transition: all .1s ease-in;
    user-select: none;

    &:hover {
        background: rgba(black, 0.2);
        transform: scale(1.1);
    }
}

.calendar__day_current {
    background: rgba(black, 0.6);
    color: white;
}

.calendar__month, .calendar__week, .calendar__date {
    text-align: center;
    font-size: 24px;
    line-height: 58px;

    @include media-breakpoint-down(md) {
        font-size: 16px;
    }
}

.calendar__month {
    margin: 0 15px;
    @include media-breakpoint-down(xs) {
    line-height: initial;
    }

}

.calendar__date {
    font-size: 64px;
    margin: -1px 25px 25px;
    @include media-breakpoint-down(xs) {
    font-size: 52px;
    margin: 0 15px 15px;
    }
}

.calendar__date-wrap {
    background: $light;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-left: -50px;
    position: relative;
    font-size: 28px;
    @include media-breakpoint-down(md) {
        margin-left: -25px;
    }
    @include media-breakpoint-down(xs) {
        margin-left: 0;
        padding: 15px;
        &:before {
            content: none;
        }
    }

    &:before {
        content: '';
        position: absolute;
        width: 70px;
        height: 50px;
        background: #bababa;
        top: 0;
        left: 0;
        transform: rotate(-35deg);
        transform-origin: 0 0;
        z-index: -1;
    }
}

.text-center {
    padding: 10px;
}

.calendar__prev, .calendar__next {
    @include media-breakpoint-down(md) {
        font-size: 14px;
    }
}
</style>
