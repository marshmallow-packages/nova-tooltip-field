<?php

namespace Marshmallow\NovaTooltipField;

use Laravel\Nova\Fields\Field;

class NovaTooltipField extends Field
{
    /**
     * The field's component.
     *
     * @var string
     */
    public $component = 'nova-tooltip-field';

    public function maxWith(int $maxWidth): self
    {
        return $this->withMeta([
            'maxWidth' => $maxWidth,
        ]);
    }

    public function theme(string $theme): self
    {
        return $this->withMeta([
            'theme' => $theme,
        ]);
    }

    public function preventOverflow(bool $preventOverflow): self
    {
        return $this->withMeta([
            'preventOverflow' => $preventOverflow,
        ]);
    }

    public function autoHide(bool $autoHide): self
    {
        return $this->withMeta([
            'autoHide' => $autoHide,
        ]);
    }

    public function triggers(array $triggers): self
    {
        return $this->withMeta([
            'triggers' => $triggers
        ]);
    }

    public function placement(string $placement): self
    {
        return $this->withMeta([
            'placement' => $placement
        ]);
    }

    public function distance(int $distance): self
    {
        return $this->withMeta([
            'distance' => $distance
        ]);
    }

    public function skidding(int $skidding): self
    {
        return $this->withMeta([
            'skidding' => $skidding
        ]);
    }

    public function boundary(string $boundary): self
    {
        return $this->withMeta([
            'boundary' => $boundary
        ]);
    }

    public function tooltip(string $tooltip): self
    {
        return $this->withMeta([
            'tooltip' => $tooltip
        ]);
    }

    public function tooltipIcon(string|callable $tooltipIcon): self
    {
        $tooltipIcon = is_callable($tooltipIcon) ? $tooltipIcon() : $tooltipIcon;
        return $this->withMeta([
            'tooltipIcon' => $tooltipIcon
        ]);
    }

    public function tooltipIconType(string $tooltipIconType = null): self
    {
        return $this->withMeta([
            'tooltipIconType' => $tooltipIconType
        ]);
    }

    public function tooltipTriggerStyling(string|callable $tooltipTriggerStyling = null, bool $asInlineStyle = false): self
    {
        return $this->tooltipTriggerTextStyling($tooltipTriggerStyling, $asInlineStyle)
            ->tooltipTriggerIconStyling($tooltipTriggerStyling, $asInlineStyle);
    }

    public function tooltipTriggerTextStyling(string|callable $tooltipTriggerTextStyling = null, bool $asInlineStyle = false): self
    {
        $tooltipTriggerTextStyling = is_callable($tooltipTriggerTextStyling) ? $tooltipTriggerTextStyling() : $tooltipTriggerTextStyling;
        return $this->withMeta([
            'tooltipTriggerTextStyling' => $tooltipTriggerTextStyling,
            'tooltipTriggerTextStylingAsInlineStyle' => $asInlineStyle,
        ]);
    }

    public function tooltipTriggerIconStyling(string|callable $tooltipTriggerIconStyling = null, bool $asInlineStyle = false): self
    {
        $tooltipTriggerIconStyling = is_callable($tooltipTriggerIconStyling) ? $tooltipTriggerIconStyling() : $tooltipTriggerIconStyling;
        return $this->withMeta([
            'tooltipTriggerIconStyling' => $tooltipTriggerIconStyling,
            'tooltipTriggerIconStylingAsInlineStyle' => $asInlineStyle,
        ]);
    }
}
