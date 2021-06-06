<template>
    <div class="tabs">
        <div>
            <div v-if="$slots.title"
                 class="tabs__title"
            >
                <slot name="title" />
            </div>

            <ul class="tabs__head">
                <li v-for="tab in tabs"
                    :key="tab"
                    class="tabs__item"
                    :class="{active: c_value === tab}"
                    @click="c_value = tab"
                >
                    {{ tab }}
                </li>
            </ul>
        </div>
        <div v-if="!c_value && $slots.default"
             class="tabs__default"
        >
            <slot name="default" />
        </div>

        <template v-for="tab in tabs">
            <slot v-if="tab === c_value"
                  :name="tab"
                  :class="{tabs__content: columnStyle}"
            />
        </template>
    </div>
</template>

<script>
export default {
    name: 'VTabs',
    props: {
        value: {
            type: String,
            default: null,
        },
        tabs: {
            type: Array,
            default() {
                return [];
            },
        },
    },
    computed: {
        c_value: {
            get() {
                return this.value;
            },
            set(val) {
                this.$emit('input', val);
            },
        },
    },
};
</script>

<style lang="scss" scoped>
.tabs {
    //display: grid;
    //grid-auto-flow: column;
    //grid-auto-columns: 0.4fr 1fr;
    //overflow: hidden;
    //height: 100%;
}

.tabs__select {
    margin-bottom: 15px;
}

.tabs__head {
    display: inline-flex;
    list-style: none;
    padding: 0;
    justify-content: space-between;
    background: white;
    border: 1px solid $primary;
    border-radius: 7px;
    overflow: hidden;
    position: relative;
    margin: 0 0 10px;
}

.tabs__title {
    display: block;
    font-size: 32px;
    line-height: 36px;
    font-weight: 500;
    margin: 30px 0 15px 30px;

    @include media-breakpoint-down(md) {
        margin: 0 0 15px;
    }
}

.tabs__item {
    list-style: none;
    padding: 7px 30px;
    width: 100%;
    text-align: center;
    cursor: pointer;
    border-right: 1px solid $primary;
    color: $dark;
    white-space: nowrap;

    &:last-child {
        border-right: none;
    }

    &:hover {
        background: lighten($primary, 50%);
    }

    &.active {
        background: $primary;
        color: white;
    }
}

.tabs__default {
    background: $light;
    height: 100%;
    color: $dark;
    padding: 30px;
}

.tabs_column {
    @include media-breakpoint-up(lg) {
        display: grid;
        grid-template-columns: 300px auto;
        height: 100%;
    }
}
</style>
