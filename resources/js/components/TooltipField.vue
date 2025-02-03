<template>
  <div>
    <Tooltip
        @tooltip-show="fetchOnce"
        :triggers="triggers"
        :distance="distance"
        :skidding="skidding"
        :popperTriggers="triggers"
        :placement="placement"
        :theme="theme"
        :preventOverflow="preventOverflow"
        :auto-hide="autoHide"
        :boundary="boundary"
    >
        <div class="inline-flex items-center gap-2 cursor-pointer">
            <Icon v-if="tooltipIcon"
                :type="tooltipIconType"
                :name="tooltipIcon"
                class="inline-block"
                :class="!tooltipTriggerIconStylingAsInlineStyle ? tooltipTriggerIconStyling : null"
                :style="tooltipTriggerIconStylingAsInlineStyle ? tooltipTriggerIconStyling : null"/>

            <div v-if="title"
                v-html="title"
                :class="!tooltipTriggerTextStylingAsInlineStyle ? tooltipTriggerTextStyling : null"
                :style="tooltipTriggerTextStylingAsInlineStyle ? tooltipTriggerTextStyling : null"
                ></div>
        </div>
        <template #content>
            <TooltipContent :max-width="width">
                <span v-html="fieldValue"></span>
            </TooltipContent>
        </template>
    </Tooltip>
  </div>
</template>

<script>
import { Icon } from 'laravel-nova-ui'

export default {
    components: {
        Icon,
    },
    props: ['field'],

    data() {
        return {
            width: this.field.maxWidth || 300,
            theme: this.field.theme || 'plain',
            preventOverflow: this.field.preventOverflow || true,
            autoHide: this.field.autoHide || true,
            triggers: this.field.triggers || ['hover'],
            placement: this.field.placement || 'top-start',
            distance: this.field.distance || 0,
            skidding: this.field.skidding || 3,
            boundary: this.field.boundary || 'window',
            title: this.field.tooltip || null,
            tooltipIcon: this.field.tooltipIcon || null,
            tooltipIconType: this.field.tooltipIconType || 'solid',
            tooltipTriggerTextStyling: this.field.tooltipTriggerTextStyling || 'text-gray-500 dark:text-gray-400',
            tooltipTriggerTextStylingAsInlineStyle: this.field.tooltipTriggerTextStylingAsInlineStyle || false,
            tooltipTriggerIconStyling: this.field.tooltipTriggerIconStyling || 'text-gray-500 dark:text-gray-400',
            tooltipTriggerIconStylingAsInlineStyle: this.field.tooltipTriggerIconStylingAsInlineStyle || false,
        }
    },

    computed: {
        fieldValue() {
            return this.field.displayedAs || this.field.value
        },
    }
}
</script>
