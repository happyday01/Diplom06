<template>
    <div class="index-header">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6">
                    <h1>Политехнический институт СурГУ</h1>
                    <h3 class="font-weight-light">
                        Поступить на бюджет и стать программистом с нуля в Сургуте теперь в 2 раза проще
                    </h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'IndexHeader',
};
</script>

<style scoped lang="scss">
.index-header {
    background: linear-gradient(to right, rgba(21, 10, 52, 0.41), transparent),
    url('/images/main/girl-student-with-laptop-standing-by-window-corridor.jpg') top right;
    background-size: cover;
    color: white;
    padding: 150px 0;
}
</style>
