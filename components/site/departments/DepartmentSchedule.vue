<template>
    <div>
        <h3>Расписание занятий</h3>
        <v-tabs v-model="d_tab"
                class="mb-3"
                :tabs="['Очная форма', 'Заочная форма', 'Магистратура']"
        />
        <div class="department-schedule__files">
            <attachment v-for="(item, idx) in d_attachments"
                        :key="idx"
                        :attachment="item"
            />
        </div>
    </div>
</template>

<script>
import Attachment from '@/components/common/AttachmentRow';
import VTabs from '../../common/VTabs';

export default {
    name: 'DepartmentSchedule',
    components: { VTabs, Attachment },
    data() {
        return {
            d_tab: 'Очная форма',
            d_attachments: [
                {
                    name: '1 курс',
                    url: 'asd.pdf',
                },
                {
                    name: '2 курс',
                    url: 'asd.pdf',
                },
                {
                    name: '3 курс',
                    url: 'asd.pdf',
                },
                {
                    name: '4 курс',
                    url: 'asd.pdf',
                },
            ],
        };
    },
};
</script>

<style scoped lang="scss">
.department-schedule__files {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 30px;
}
</style>
