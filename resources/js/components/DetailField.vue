<template>
    <PanelItem :index="index" :field="field">
        <template #value>
            <TooltipField :field="field" />
        </template>
    </PanelItem>
</template>

<script>

import TooltipField from './TooltipField'

export default {
    components: {
        TooltipField,
    },
    props: ['index', 'resource', 'resourceName', 'resourceId', 'field'],
}
</script>
