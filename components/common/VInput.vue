<template>
    <div class="input">
        <input ref="input"
               v-model="c_value"
               class="input__input"
               :placeholder="placeholder"
               :class="c_inputClass"
               :type="d_showPassword ? 'text' : type"
               :step="step"
               :disabled="disabled"
               :required="required"
               :min="min"
               :max="max"
        >
        <label class="input__label">
            {{ label }}
        </label>
        <i v-if="type === 'password'"
           class="input__show-password"
           role="button"
           :class="d_showPassword ? 'icon-eye-slash' : 'icon-eye'"
           @click="togglePasswordVisibility"
        />
    </div>
</template>

<script>

export default {
    name: 'VInput',
    props: {
        disabled: {
            type: Boolean,
            default: false,
        },
        value: {
            type: [Number, String, Boolean],
            default: null,
        },
        step: {
            type: [Number, String],
            default: undefined,
        },
        type: {
            type: String,
            default: 'text',
        },
        placeholder: {
            type: String,
            default: null,
        },
        label: {
            type: String,
            default: undefined,
        },
        error: {
            type: [String, Boolean, Array],
            default: false,
        },
        required: {
            type: Boolean,
            default: false,
        },
        min: {
            type: [Number, String],
            default: null,
        },
        max: {
            type: [Number, String],
            default: null,
        },
    },
    data() {
        return {
            d_showPassword: false,
        };
    },
    computed: {
        c_error() {
            if (Array.isArray(this.error)) {
                return this.error.length;
            } else {
                return this.error;
            }
        },
        c_value: {
            get() {
                return this.value;
            },
            set(val) {
                this.$emit('input', val);
            },
        },
        c_inputClass() {
            const res = [];
            if (this.c_value) {
                res.push('input__input_filled');
            }
            if (this.c_error) {
                res.push('input__input_error');
            }
            return res.join(' ');
        },
    },
    methods: {
        togglePasswordVisibility() {
            this.d_showPassword = !this.d_showPassword;
        },
        focus() {
            this.$refs.input.focus();
        },
    },
};
</script>

<style lang="scss">
.input {
    background: none;
    font-size: 14px;
    position: relative;
    padding-top: 5px;
}

.input__input {
    border: none;
    background: none;
    outline: none !important;
    border-bottom: 1px solid $light;
    color: $dark;
    appearance: none;
    font: $base-font;
    width: 100%;
    height: 40px;
    padding: 0;

    &:focus {
        border-bottom: 2px solid $primary;
        height: 41px;
        margin-bottom: -1px;
    }

    &::placeholder {
        font-size: 14px;
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 30px white inset !important;
        font: $base-font !important;
    }
}

.input__label {
    margin-bottom: 0;
    display: inline-flex;
    white-space: nowrap;
    width: 100%;
    color: $gray;
    position: absolute;
    left: 0;
    top: 10px;
    transition: all .1s linear;
    cursor: text;
    pointer-events: none;
}

.input__input:focus, .input__input_filled, {
    & + .input__label {
        font-size: 12px;
        top: -4px;
    }
}

.input__input_error {
    border-bottom: 2px solid $danger;
    height: 41px;
    margin-bottom: -1px;
}

.input__show-password {
    font-size: 25px;
    position: absolute;
    right: 0;
    bottom: 0;
    top: 0;
    height: 24px;
    margin: auto;
    cursor: pointer;
    opacity: 0.5;

    &:hover {
        opacity: 1;
    }
}
</style>
