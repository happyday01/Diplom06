<template>
    <div>
        <v-navbar />
        <Nuxt class="layout__content" />
        <v-footer />
    </div>
</template>

<style lang="scss">
.layout__content {
    padding-top: 100px;
}
</style>
<script>
import VNavbar from '../components/site/layout/VNavbar';
import VFooter from '../components/site/layout/VFooter';
export default {
    components: { VFooter, VNavbar },
};
</script>
