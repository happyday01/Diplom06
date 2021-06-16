<template>
    <div class="container">
        <applicant-header />
        <directions-slider />
        <files-slider />
    </div>
</template>

<script>
import ApplicantHeader from '../components/site/abiturients/ApplicantHeader';
import DirectionsSlider from '../components/site/directions/DirectionsSlider';
import FilesSlider from '../components/site/files/FilesSlider';
export default {
    name: 'Applicants',
    components: { FilesSlider, DirectionsSlider, ApplicantHeader },
};
</script>

<style scoped lang="scss">
</style>
