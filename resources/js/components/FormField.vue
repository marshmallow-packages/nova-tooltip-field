<template>
    <DefaultField
        :field="field"
        :errors="errors"
        :show-help-text="showHelpText"
        :full-width-content="fullWidthContent">
        <template #field>
            <TooltipField :field="field" />
        </template>
    </DefaultField>
</template>

<script>
import TooltipField from './TooltipField'
import { FormField, HandlesValidationErrors } from 'laravel-nova'

export default {
    components: {
        TooltipField,
    },
    mixins: [FormField, HandlesValidationErrors],

    props: ['resourceName', 'resourceId', 'field'],

    methods: {
        /*
        * Set the initial, internal value for the field.
        */
        setInitialValue() {
            this.value = this.field.value || ''
        },

        /**
         * Fill the given FormData object with the field's internal value.
         */
        fill(formData) {
            formData.append(this.fieldAttribute, this.value || '')
        },
    },
}
</script>
