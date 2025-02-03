<template>
  <div>
    <TooltipField :field="field"/>
  </div>
</template>

<script>
import TooltipField from './TooltipField'

export default {
    components: {
        TooltipField,
    },
    props: ['resourceName', 'field'],
}
</script>
