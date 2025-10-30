// Données des composants Web Awesome générées automatiquement
export interface ComponentInfo {
  tagName: string;
  name: string;
  description: string;
  category: string;
  properties: Array<{
    name: string;
    type: string;
    description: string;
    default?: string;
  }>;
  events: Array<{
    name: string;
    description: string;
  }>;
  slots: Array<{
    name: string;
    description: string;
  }>;
  cssParts: Array<{
    name: string;
    description: string;
  }>;
}

export const components: ComponentInfo[] = [
  {
    tagName: 'wa-animated-image',
    name: 'Animated Image',
    description: 'A component for displaying animated GIFs and WEBPs that play and pause on interaction.',
    category: 'Imagery',
    properties: [
        {
            "name": "play",
            "type": "boolean",
            "description": "Plays the animation. When this attribute is remove, the animation will pause."
        }
    ],
    events: [
        {
            "name": "wa",
            "description": "load - Emitted when the image loads successfully."
        },
        {
            "name": "wa",
            "description": "error - Emitted when the image fails to load."
        }
    ],
    slots: [
        {
            "name": "play",
            "description": "icon - Optional play icon to use instead of the default. Works best with `<wa-icon>`."
        },
        {
            "name": "pause",
            "description": "icon - Optional pause icon to use instead of the default. Works best with `<wa-icon>`."
        }
    ],
    cssParts: [
        {
            "name": "control",
            "description": "box - The container that surrounds the pause/play icons and provides their background."
        }
    ],
  },
  {
    tagName: 'wa-animation',
    name: 'Animation',
    description: 'Animate elements declaratively with nearly 100 baked-in presets, or roll your own with custom keyframes.',
    category: 'Utilities',
    properties: [
        {
            "name": "play",
            "type": "boolean",
            "description": "Plays the animation. When omitted, the animation will be paused. This attribute will be automatically removed when the animation finishes or gets canceled. /",
            "default": "false"
        },
        {
            "name": "delay",
            "type": "number",
            "description": "The number of milliseconds to delay the start of the animation.",
            "default": "0"
        },
        {
            "name": "duration",
            "type": "number",
            "description": "The number of milliseconds each iteration of the animation takes to complete.",
            "default": "1000"
        },
        {
            "name": "endDelay",
            "type": "number",
            "description": "The number of milliseconds to delay after the active period of an animation sequence.",
            "default": "0"
        },
        {
            "name": "iterations",
            "type": "number",
            "description": "The number of iterations to run before the animation completes. Defaults to `Infinity`, which loops.",
            "default": "Infinity"
        },
        {
            "name": "iterationStart",
            "type": "number",
            "description": "The offset at which to start the animation, usually between 0 (start) and 1 (end).",
            "default": "0"
        },
        {
            "name": "playbackRate",
            "type": "number",
            "description": "Sets the animation's playback rate. The default is `1`, which plays the animation at a normal speed. Setting this to `2`, for example, will double the animation's speed. A negative value can be used to reverse the animation. This value can be changed without causing the animation to restart. /",
            "default": "1"
        }
    ],
    events: [
        {
            "name": "wa",
            "description": "cancel - Emitted when the animation is canceled."
        },
        {
            "name": "wa",
            "description": "finish - Emitted when the animation finishes."
        },
        {
            "name": "wa",
            "description": "start - Emitted when the animation starts or restarts."
        }
    ],
    slots: [],
    cssParts: [],
  },
  {
    tagName: 'wa-avatar',
    name: 'Avatar',
    description: 'Avatars are used to represent a person or object.',
    category: 'Imagery',
    properties: [
        {
            "name": "shape",
            "type": "'circle' | 'square' | 'rounded'",
            "description": "The shape of the avatar.",
            "default": "'circle'"
        }
    ],
    events: [
        {
            "name": "wa",
            "description": "error - The image could not be loaded. This may because of an invalid URL, a temporary network condition, or some"
        }
    ],
    slots: [
        {
            "name": "icon",
            "description": "The default icon to use when no image or initials are present. Works best with `<wa-icon>`."
        }
    ],
    cssParts: [
        {
            "name": "icon",
            "description": "The container that wraps the avatar's icon."
        },
        {
            "name": "initials",
            "description": "The container that wraps the avatar's initials."
        },
        {
            "name": "image",
            "description": "The avatar image. Only shown when the `image` attribute is set."
        }
    ],
  },
  {
    tagName: 'wa-badge',
    name: 'Badge',
    description: 'Badges are used to draw attention and display statuses or counts.',
    category: 'Feedback & Status',
    properties: [
        {
            "name": "variant",
            "type": "'brand' | 'neutral' | 'success' | 'warning' | 'danger'",
            "description": "The badge's theme variant. Defaults to `brand` if not within another element with a variant.",
            "default": "'brand'"
        },
        {
            "name": "appearance",
            "type": "'accent' | 'filled' | 'outlined' | 'filled-outlined'",
            "description": "The badge's visual appearance.",
            "default": "'accent'"
        },
        {
            "name": "pill",
            "type": "boolean",
            "description": "Draws a pill-style badge with rounded edges.",
            "default": "false"
        },
        {
            "name": "attention",
            "type": "'none' | 'pulse' | 'bounce'",
            "description": "Adds an animation to draw attention to the badge.",
            "default": "'none'"
        }
    ],
    events: [],
    slots: [],
    cssParts: [
        {
            "name": "base",
            "description": "The component's base wrapper."
        }
    ],
  },
  {
    tagName: 'wa-breadcrumb-item',
    name: 'Breadcrumb Item',
    description: 'Breadcrumb Items are used inside breadcrumbs to represent different links.',
    category: 'Navigation',
    properties: [],
    events: [],
    slots: [
        {
            "name": "start",
            "description": "An element, such as `<wa-icon>`, placed before the label."
        },
        {
            "name": "end",
            "description": "An element, such as `<wa-icon>`, placed after the label."
        },
        {
            "name": "separator",
            "description": "The separator to use for the breadcrumb item. This will only change the separator for this item. If"
        }
    ],
    cssParts: [
        {
            "name": "label",
            "description": "The breadcrumb item's label."
        },
        {
            "name": "start",
            "description": "The container that wraps the `start` slot."
        },
        {
            "name": "end",
            "description": "The container that wraps the `end` slot."
        },
        {
            "name": "separator",
            "description": "The container that wraps the separator."
        }
    ],
  },
  {
    tagName: 'wa-breadcrumb',
    name: 'Breadcrumb',
    description: 'Breadcrumbs provide a group of links so users can easily navigate a website\'s hierarchy.',
    category: 'Navigation',
    properties: [],
    events: [],
    slots: [
        {
            "name": "separator",
            "description": "The separator to use between breadcrumb items. Works best with `<wa-icon>`."
        }
    ],
    cssParts: [
        {
            "name": "base",
            "description": "The component's base wrapper."
        }
    ],
  },
  {
    tagName: 'wa-button-group',
    name: 'Button Group',
    description: 'Button groups can be used to group related buttons into sections.',
    category: 'Actions',
    properties: [
        {
            "name": "orientation",
            "type": "'horizontal' | 'vertical'",
            "description": "The button group's orientation.",
            "default": "'horizontal'"
        }
    ],
    events: [],
    slots: [],
    cssParts: [
        {
            "name": "base",
            "description": "The component's base wrapper."
        }
    ],
  },
  {
    tagName: 'wa-button',
    name: 'Button',
    description: 'Buttons represent actions that are available to the user.',
    category: 'Actions',
    properties: [
        {
            "name": "variant",
            "type": "'neutral' | 'brand' | 'success' | 'warning' | 'danger'",
            "description": "The button's theme variant. Defaults to `neutral` if not within another element with a variant.",
            "default": "'neutral'"
        },
        {
            "name": "appearance",
            "type": "'accent' | 'filled' | 'outlined' | 'filled-outlined' | 'plain'",
            "description": "The button's visual appearance.",
            "default": "'accent'"
        },
        {
            "name": "size",
            "type": "'small' | 'medium' | 'large'",
            "description": "The button's size.",
            "default": "'medium'"
        },
        {
            "name": "withCaret",
            "type": "boolean",
            "description": "Draws the button with a caret. Used to indicate that the button triggers a dropdown menu or similar behavior.",
            "default": "false"
        },
        {
            "name": "disabled",
            "type": "boolean",
            "description": "Disables the button. Does not apply to link buttons.",
            "default": "false"
        },
        {
            "name": "loading",
            "type": "boolean",
            "description": "Draws the button in a loading state.",
            "default": "false"
        },
        {
            "name": "pill",
            "type": "boolean",
            "description": "Draws a pill-style button with rounded edges.",
            "default": "false"
        },
        {
            "name": "name",
            "type": "string",
            "description": "The name of the button, submitted as a name/value pair with form data, but only when this button is the submitter. This attribute is ignored when `href` is present. /"
        },
        {
            "name": "value",
            "type": "string",
            "description": "The value of the button, submitted as a pair with the button's name as part of the form data, but only when this button is the submitter. This attribute is ignored when `href` is present. /"
        },
        {
            "name": "href",
            "type": "string",
            "description": "When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`."
        },
        {
            "name": "form",
            "type": "string | null",
            "description": "The \"form owner\" to associate the button with. If omitted, the closest containing form will be used instead. The value of this attribute must be an id of a form in the same document or shadow root as the button. /",
            "default": "null"
        },
        {
            "name": "formAction",
            "type": "string",
            "description": "Used to override the form owner's `action` attribute."
        },
        {
            "name": "formMethod",
            "type": "'post' | 'get'",
            "description": "Used to override the form owner's `method` attribute."
        },
        {
            "name": "formNoValidate",
            "type": "boolean",
            "description": "Used to override the form owner's `novalidate` attribute."
        },
        {
            "name": "formTarget",
            "type": "'_self' | '_blank' | '_parent' | '_top' | string",
            "description": "Used to override the form owner's `target` attribute."
        }
    ],
    events: [
        {
            "name": "blur",
            "description": "Emitted when the button loses focus."
        },
        {
            "name": "focus",
            "description": "Emitted when the button gains focus."
        },
        {
            "name": "wa",
            "description": "invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied."
        }
    ],
    slots: [
        {
            "name": "start",
            "description": "An element, such as `<wa-icon>`, placed before the label."
        },
        {
            "name": "end",
            "description": "An element, such as `<wa-icon>`, placed after the label."
        }
    ],
    cssParts: [
        {
            "name": "base",
            "description": "The component's base wrapper."
        },
        {
            "name": "start",
            "description": "The container that wraps the `start` slot."
        },
        {
            "name": "label",
            "description": "The button's label."
        },
        {
            "name": "end",
            "description": "The container that wraps the `end` slot."
        },
        {
            "name": "caret",
            "description": "The button's caret icon, a `<wa-icon>` element."
        },
        {
            "name": "spinner",
            "description": "The spinner that shows when the button is in the loading state."
        }
    ],
  },
  {
    tagName: 'wa-callout',
    name: 'Callout',
    description: 'Callouts are used to display important messages inline.',
    category: 'Feedback & Status',
    properties: [
        {
            "name": "variant",
            "type": "'brand' | 'neutral' | 'success' | 'warning' | 'danger'",
            "description": "The callout's theme variant. Defaults to `brand` if not within another element with a variant.",
            "default": "'brand'"
        },
        {
            "name": "appearance",
            "type": "'accent' | 'filled' | 'outlined' | 'plain' | 'filled-outlined'",
            "description": "The callout's visual appearance."
        },
        {
            "name": "size",
            "type": "'small' | 'medium' | 'large'",
            "description": "The callout's size.",
            "default": "'medium'"
        }
    ],
    events: [],
    slots: [
        {
            "name": "icon",
            "description": "An icon to show in the callout. Works best with `<wa-icon>`."
        }
    ],
    cssParts: [
        {
            "name": "icon",
            "description": "The container that wraps the optional icon."
        },
        {
            "name": "message",
            "description": "The container that wraps the callout's main content."
        }
    ],
  },
  {
    tagName: 'wa-card',
    name: 'Card',
    description: 'Cards can be used to group related subjects in a container.',
    category: 'Organization',
    properties: [
        {
            "name": "withHeader",
            "type": "boolean",
            "description": "Renders the card with a header. Only needed for SSR, otherwise is automatically added.",
            "default": "false"
        },
        {
            "name": "withMedia",
            "type": "boolean",
            "description": "Renders the card with an image. Only needed for SSR, otherwise is automatically added.",
            "default": "false"
        },
        {
            "name": "withFooter",
            "type": "boolean",
            "description": "Renders the card with a footer. Only needed for SSR, otherwise is automatically added.",
            "default": "false"
        }
    ],
    events: [],
    slots: [
        {
            "name": "header",
            "description": "An optional header for the card."
        },
        {
            "name": "footer",
            "description": "An optional footer for the card."
        },
        {
            "name": "media",
            "description": "An optional media section to render at the start of the card."
        },
        {
            "name": "actions",
            "description": "An optional actions section to render at the end for the horizontal card."
        },
        {
            "name": "header",
            "description": "actions - An optional actions section to render in the header of the vertical card."
        },
        {
            "name": "footer",
            "description": "actions - An optional actions section to render in the footer of the vertical card."
        }
    ],
    cssParts: [
        {
            "name": "media",
            "description": "The container that wraps the card's media."
        },
        {
            "name": "header",
            "description": "The container that wraps the card's header."
        },
        {
            "name": "body",
            "description": "The container that wraps the card's main content."
        },
        {
            "name": "footer",
            "description": "The container that wraps the card's footer."
        }
    ],
  },
  {
    tagName: 'wa-carousel-item',
    name: 'Carousel Item',
    description: 'A carousel item represent a slide within a carousel.',
    category: 'Imagery',
    properties: [],
    events: [],
    slots: [],
    cssParts: [],
  },
  {
    tagName: 'wa-carousel',
    name: 'Carousel',
    description: 'Carousels display an arbitrary number of content slides along a horizontal or vertical axis.',
    category: 'Imagery',
    properties: [
        {
            "name": "loop",
            "type": "boolean",
            "description": "When set, allows the user to navigate the carousel in the same direction indefinitely.",
            "default": "false"
        },
        {
            "name": "slides",
            "type": "number",
            "description": "",
            "default": "0"
        },
        {
            "name": "currentSlide",
            "type": "number",
            "description": "",
            "default": "0"
        },
        {
            "name": "navigation",
            "type": "boolean",
            "description": "When set, show the carousel's navigation.",
            "default": "false"
        },
        {
            "name": "pagination",
            "type": "boolean",
            "description": "When set, show the carousel's pagination indicators.",
            "default": "false"
        },
        {
            "name": "autoplay",
            "type": "boolean",
            "description": "When set, the slides will scroll automatically when the user is not interacting with them.",
            "default": "false"
        },
        {
            "name": "autoplayInterval",
            "type": "number",
            "description": "Specifies the amount of time, in milliseconds, between each automatic scroll.",
            "default": "3000"
        },
        {
            "name": "slidesPerPage",
            "type": "number",
            "description": "Specifies how many slides should be shown at a given time.",
            "default": "1"
        },
        {
            "name": "slidesPerMove",
            "type": "number",
            "description": "Specifies the number of slides the carousel will advance when scrolling, useful when specifying a `slides-per-page` greater than one. It can't be higher than `slides-per-page`. /",
            "default": "1"
        },
        {
            "name": "mouseDragging",
            "type": "boolean",
            "description": "When set, it is possible to scroll through the slides by dragging them with the mouse.",
            "default": "false"
        }
    ],
    events: [],
    slots: [
        {
            "name": "next",
            "description": "icon - Optional next icon to use instead of the default. Works best with `<wa-icon>`."
        },
        {
            "name": "previous",
            "description": "icon - Optional previous icon to use instead of the default. Works best with `<wa-icon>`."
        }
    ],
    cssParts: [
        {
            "name": "base",
            "description": "The carousel's internal wrapper."
        },
        {
            "name": "scroll",
            "description": "container - The scroll container that wraps the slides."
        },
        {
            "name": "pagination",
            "description": "The pagination indicators wrapper."
        },
        {
            "name": "pagination",
            "description": "item - The pagination indicator."
        },
        {
            "name": "pagination",
            "description": "item-active - Applied when the item is active."
        },
        {
            "name": "navigation",
            "description": "The navigation wrapper."
        },
        {
            "name": "navigation",
            "description": "button - The navigation button."
        },
        {
            "name": "navigation",
            "description": "button-previous - Applied to the previous button."
        },
        {
            "name": "navigation",
            "description": "button-next - Applied to the next button."
        }
    ],
  },
  {
    tagName: 'wa-checkbox',
    name: 'Checkbox',
    description: 'Checkboxes allow the user to toggle an option on or off.',
    category: 'Form Controls',
    properties: [
        {
            "name": "name",
            "type": "string",
            "description": "The name of the checkbox, submitted as a name/value pair with form data.",
            "default": "''"
        },
        {
            "name": "size",
            "type": "'small' | 'medium' | 'large'",
            "description": "The checkbox's size.",
            "default": "'medium'"
        },
        {
            "name": "disabled",
            "type": "boolean",
            "description": "Disables the checkbox.",
            "default": "false"
        },
        {
            "name": "indeterminate",
            "type": "boolean",
            "description": "Draws the checkbox in an indeterminate state. This is usually applied to checkboxes that represents a \"select all/none\" behavior when associated checkboxes have a mix of checked and unchecked states. /",
            "default": "false"
        },
        {
            "name": "checked",
            "type": "boolean",
            "description": "Draws the checkbox in a checked state.",
            "default": "this.hasAttribute('checked')"
        },
        {
            "name": "form",
            "type": "string",
            "description": "By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you to place the form control outside of a form and associate it with the form that has this `id`. The form must be in the same document or shadow root for this to work. /",
            "default": "null"
        },
        {
            "name": "required",
            "type": "boolean",
            "description": "Makes the checkbox a required field.",
            "default": "false"
        }
    ],
    events: [
        {
            "name": "blur",
            "description": "Emitted when the checkbox loses focus."
        },
        {
            "name": "change",
            "description": "Emitted when the checked state changes."
        },
        {
            "name": "focus",
            "description": "Emitted when the checkbox gains focus."
        },
        {
            "name": "input",
            "description": "Emitted when the checkbox receives input."
        },
        {
            "name": "wa",
            "description": "invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied."
        }
    ],
    slots: [
        {
            "name": "hint",
            "description": "Text that describes how to use the checkbox. Alternatively, you can use the `hint` attribute."
        }
    ],
    cssParts: [
        {
            "name": "base",
            "description": "The component's label ."
        },
        {
            "name": "control",
            "description": "The square container that wraps the checkbox's checked state."
        },
        {
            "name": "checked",
            "description": "icon - The checked icon, a `<wa-icon>` element."
        },
        {
            "name": "indeterminate",
            "description": "icon - The indeterminate icon, a `<wa-icon>` element."
        },
        {
            "name": "label",
            "description": "The container that wraps the checkbox's label."
        },
        {
            "name": "hint",
            "description": "The hint's wrapper."
        }
    ],
  },
  {
    tagName: 'wa-color-picker',
    name: 'Color Picker',
    description: 'Color pickers allow the user to select a color.',
    category: 'Form Controls',
    properties: [
        {
            "name": "defaultValue",
            "type": "string | null",
            "description": "The default value of the form control. Primarily used for resetting the form control.",
            "default": "this.getAttribute('value') || null"
        },
        {
            "name": "withLabel",
            "type": "boolean",
            "description": "",
            "default": "false"
        },
        {
            "name": "withHint",
            "type": "boolean",
            "description": "",
            "default": "false"
        },
        {
            "name": "hint",
            "type": "string",
            "description": "The color picker's hint. If you need to display HTML, use the `hint` slot instead. /",
            "default": "''"
        },
        {
            "name": "size",
            "type": "'small' | 'medium' | 'large'",
            "description": "Determines the size of the color picker's trigger",
            "default": "'medium'"
        },
        {
            "name": "withoutFormatToggle",
            "type": "boolean",
            "description": "Removes the button that lets users toggle between format.",
            "default": "false"
        },
        {
            "name": "name",
            "type": "string | null",
            "description": "The name of the form control, submitted as a name/value pair with form data.",
            "default": "null"
        },
        {
            "name": "disabled",
            "type": "boolean",
            "description": "Disables the color picker.",
            "default": "false"
        },
        {
            "name": "open",
            "type": "boolean",
            "description": "Indicates whether or not the popup is open. You can toggle this attribute to show and hide the popup, or you can use the `show()` and `hide()` methods and this attribute will reflect the popup's open state. /",
            "default": "false"
        },
        {
            "name": "opacity",
            "type": "boolean",
            "description": "Shows the opacity slider. Enabling this will cause the formatted value to be HEXA, RGBA, or HSLA.",
            "default": "false"
        },
        {
            "name": "uppercase",
            "type": "boolean",
            "description": "By default, values are lowercase. With this attribute, values will be uppercase instead.",
            "default": "false"
        },
        {
            "name": "form",
            "type": "string",
            "description": "By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you to place the form control outside of a form and associate it with the form that has this `id`. The form must be in the same document or shadow root for this to work. /",
            "default": "null"
        },
        {
            "name": "required",
            "type": "boolean",
            "description": "Makes the color picker a required field.",
            "default": "false"
        }
    ],
    events: [
        {
            "name": "blur",
            "description": "Emitted when the color picker loses focus."
        },
        {
            "name": "change",
            "description": "Emitted when the color picker's value changes."
        },
        {
            "name": "focus",
            "description": "Emitted when the color picker receives focus."
        },
        {
            "name": "input",
            "description": "Emitted when the color picker receives input."
        },
        {
            "name": "wa",
            "description": "invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied."
        }
    ],
    slots: [
        {
            "name": "label",
            "description": "The color picker's form label. Alternatively, you can use the `label` attribute."
        },
        {
            "name": "hint",
            "description": "The color picker's form hint. Alternatively, you can use the `hint` attribute."
        }
    ],
    cssParts: [
        {
            "name": "base",
            "description": "The component's base wrapper."
        },
        {
            "name": "trigger",
            "description": "The color picker's dropdown trigger."
        },
        {
            "name": "swatches",
            "description": "The container that holds the swatches."
        },
        {
            "name": "swatch",
            "description": "Each individual swatch."
        },
        {
            "name": "grid",
            "description": "The color grid."
        },
        {
            "name": "grid",
            "description": "handle - The color grid's handle."
        },
        {
            "name": "slider",
            "description": "Hue and opacity sliders."
        },
        {
            "name": "slider",
            "description": "handle - Hue and opacity slider handles."
        },
        {
            "name": "hue",
            "description": "slider - The hue slider."
        },
        {
            "name": "hue",
            "description": "slider-handle - The hue slider's handle."
        },
        {
            "name": "opacity",
            "description": "slider - The opacity slider."
        },
        {
            "name": "opacity",
            "description": "slider-handle - The opacity slider's handle."
        },
        {
            "name": "preview",
            "description": "The preview color."
        },
        {
            "name": "input",
            "description": "The text input."
        },
        {
            "name": "eyedropper",
            "description": "button - The eye dropper button."
        },
        {
            "name": "eyedropper",
            "description": "button__base - The eye dropper button's exported `button` part."
        },
        {
            "name": "eyedropper",
            "description": "button__start - The eye dropper button's exported `start` part."
        },
        {
            "name": "eyedropper",
            "description": "button__label - The eye dropper button's exported `label` part."
        },
        {
            "name": "eyedropper",
            "description": "button__end - The eye dropper button's exported `end` part."
        },
        {
            "name": "eyedropper",
            "description": "button__caret - The eye dropper button's exported `caret` part."
        },
        {
            "name": "format",
            "description": "button - The format button."
        },
        {
            "name": "format",
            "description": "button__base - The format button's exported `button` part."
        },
        {
            "name": "format",
            "description": "button__start - The format button's exported `start` part."
        },
        {
            "name": "format",
            "description": "button__label - The format button's exported `label` part."
        },
        {
            "name": "format",
            "description": "button__end - The format button's exported `end` part."
        },
        {
            "name": "format",
            "description": "button__caret - The format button's exported `caret` part."
        }
    ],
  },
  {
    tagName: 'wa-comparison',
    name: 'Comparison',
    description: 'Compare visual differences between similar content with a sliding panel.',
    category: 'Imagery',
    properties: [
        {
            "name": "position",
            "type": "number",
            "description": "The position of the divider as a percentage.",
            "default": "50"
        }
    ],
    events: [
        {
            "name": "change",
            "description": "Emitted when the position changes."
        }
    ],
    slots: [
        {
            "name": "before",
            "description": "The before content, often an `<img>` or `<svg>` element."
        },
        {
            "name": "after",
            "description": "The after content, often an `<img>` or `<svg>` element."
        },
        {
            "name": "handle",
            "description": "The icon used inside the handle."
        }
    ],
    cssParts: [
        {
            "name": "base",
            "description": "The container that wraps the before and after content."
        },
        {
            "name": "before",
            "description": "The container that wraps the before content."
        },
        {
            "name": "after",
            "description": "The container that wraps the after content."
        },
        {
            "name": "divider",
            "description": "The divider that separates the before and after content."
        },
        {
            "name": "handle",
            "description": "The handle that the user drags to expose the after content."
        }
    ],
  },
  {
    tagName: 'wa-copy-button',
    name: 'Copy Button',
    description: 'Copies data to the clipboard when the user clicks the button.',
    category: 'Actions',
    properties: [
        {
            "name": "disabled",
            "type": "boolean",
            "description": "Disables the copy button.",
            "default": "false"
        },
        {
            "name": "copyLabel",
            "type": "string",
            "description": "A custom label to show in the tooltip.",
            "default": "''"
        },
        {
            "name": "successLabel",
            "type": "string",
            "description": "A custom label to show in the tooltip after copying.",
            "default": "''"
        },
        {
            "name": "errorLabel",
            "type": "string",
            "description": "A custom label to show in the tooltip when a copy error occurs.",
            "default": "''"
        },
        {
            "name": "feedbackDuration",
            "type": "number",
            "description": "The length of time to show feedback before restoring the default trigger.",
            "default": "1000"
        },
        {
            "name": "tooltipPlacement",
            "type": "'top' | 'right' | 'bottom' | 'left'",
            "description": "The preferred placement of the tooltip.",
            "default": "'top'"
        }
    ],
    events: [
        {
            "name": "wa",
            "description": "copy - Emitted when the data has been copied."
        },
        {
            "name": "wa",
            "description": "error - Emitted when the data could not be copied."
        }
    ],
    slots: [
        {
            "name": "copy",
            "description": "icon - The icon to show in the default copy state. Works best with `<wa-icon>`."
        },
        {
            "name": "success",
            "description": "icon - The icon to show when the content is copied. Works best with `<wa-icon>`."
        },
        {
            "name": "error",
            "description": "icon - The icon to show when a copy error occurs. Works best with `<wa-icon>`."
        }
    ],
    cssParts: [
        {
            "name": "button",
            "description": "The internal `<button>` element."
        },
        {
            "name": "copy",
            "description": "icon - The container that holds the copy icon."
        },
        {
            "name": "success",
            "description": "icon - The container that holds the success icon."
        },
        {
            "name": "error",
            "description": "icon - The container that holds the error icon."
        },
        {
            "name": "tooltip__base",
            "description": "The tooltip's exported `base` part."
        },
        {
            "name": "tooltip__base__popup",
            "description": "The tooltip's exported `popup` part."
        },
        {
            "name": "tooltip__base__arrow",
            "description": "The tooltip's exported `arrow` part."
        },
        {
            "name": "tooltip__body",
            "description": "The tooltip's exported `body` part."
        }
    ],
  },
  {
    tagName: 'wa-details',
    name: 'Details',
    description: 'Details show a brief summary and expand to show additional content.',
    category: 'Organization',
    properties: [
        {
            "name": "open",
            "type": "boolean",
            "description": "Indicates whether or not the details is open. You can toggle this attribute to show and hide the details, or you can use the `show()` and `hide()` methods and this attribute will reflect the details' open state. /",
            "default": "false"
        },
        {
            "name": "name",
            "type": "string",
            "description": "Groups related details elements. When one opens, others with the same name will close."
        },
        {
            "name": "disabled",
            "type": "boolean",
            "description": "Disables the details so it can't be toggled.",
            "default": "false"
        },
        {
            "name": "appearance",
            "type": "'filled' | 'outlined' | 'filled-outlined' | 'plain'",
            "description": "The element's visual appearance.",
            "default": "'outlined'"
        },
        {
            "name": "iconPlacement",
            "type": "'start' | 'end'",
            "description": "The location of the expand/collapse icon.",
            "default": "'end'"
        }
    ],
    events: [
        {
            "name": "wa",
            "description": "show - Emitted when the details opens."
        },
        {
            "name": "wa",
            "description": "after-show - Emitted after the details opens and all animations are complete."
        },
        {
            "name": "wa",
            "description": "hide - Emitted when the details closes."
        },
        {
            "name": "wa",
            "description": "after-hide - Emitted after the details closes and all animations are complete."
        }
    ],
    slots: [
        {
            "name": "summary",
            "description": "The details' summary. Alternatively, you can use the `summary` attribute."
        },
        {
            "name": "expand",
            "description": "icon - Optional expand icon to use instead of the default. Works best with `<wa-icon>`."
        },
        {
            "name": "collapse",
            "description": "icon - Optional collapse icon to use instead of the default. Works best with `<wa-icon>`."
        }
    ],
    cssParts: [
        {
            "name": "base",
            "description": "The inner `<details>` element used to render the component."
        },
        {
            "name": "header",
            "description": "The header that wraps both the summary and the expand/collapse icon."
        },
        {
            "name": "summary",
            "description": "The container that wraps the summary."
        },
        {
            "name": "icon",
            "description": "The container that wraps the expand/collapse icons."
        },
        {
            "name": "content",
            "description": "The details content."
        }
    ],
  },
  {
    tagName: 'wa-dialog',
    name: 'Dialog',
    description: 'Dialogs, sometimes called "modals", appear above the page and require the user\'s immediate attention.',
    category: 'Organization',
    properties: [
        {
            "name": "open",
            "type": "boolean",
            "description": "Indicates whether or not the dialog is open. Toggle this attribute to show and hide the dialog.",
            "default": "false"
        },
        {
            "name": "label",
            "type": "string",
            "description": "The dialog's label as displayed in the header. You should always include a relevant label, as it is required for proper accessibility. If you need to display HTML, use the `label` slot instead. /",
            "default": "''"
        },
        {
            "name": "withoutHeader",
            "type": "boolean",
            "description": "Disables the header. This will also remove the default close button.",
            "default": "false"
        },
        {
            "name": "lightDismiss",
            "type": "boolean",
            "description": "When enabled, the dialog will be closed when the user clicks outside of it.",
            "default": "false"
        }
    ],
    events: [
        {
            "name": "wa",
            "description": "show - Emitted when the dialog opens."
        },
        {
            "name": "wa",
            "description": "after-show - Emitted after the dialog opens and all animations are complete."
        },
        {
            "name": "wa",
            "description": "after-hide - Emitted after the dialog closes and all animations are complete."
        }
    ],
    slots: [
        {
            "name": "label",
            "description": "The dialog's label. Alternatively, you can use the `label` attribute."
        },
        {
            "name": "header",
            "description": "actions - Optional actions to add to the header. Works best with `<wa-button>`."
        },
        {
            "name": "footer",
            "description": "The dialog's footer, usually one or more buttons representing various options."
        }
    ],
    cssParts: [
        {
            "name": "dialog",
            "description": "The dialog's internal `<dialog>` element."
        },
        {
            "name": "header",
            "description": "The dialog's header. This element wraps the title and header actions."
        },
        {
            "name": "header",
            "description": "actions - Optional actions to add to the header. Works best with `<wa-button>`."
        },
        {
            "name": "title",
            "description": "The dialog's title."
        },
        {
            "name": "close",
            "description": "button - The close button, a `<wa-button>`."
        },
        {
            "name": "close",
            "description": "button__base - The close button's exported `base` part."
        },
        {
            "name": "body",
            "description": "The dialog's body."
        },
        {
            "name": "footer",
            "description": "The dialog's footer."
        }
    ],
  },
  {
    tagName: 'wa-divider',
    name: 'Divider',
    description: 'Dividers are used to visually separate or group elements.',
    category: 'Organization',
    properties: [
        {
            "name": "orientation",
            "type": "'horizontal' | 'vertical'",
            "description": "Sets the divider's orientation.",
            "default": "'horizontal'"
        }
    ],
    events: [],
    slots: [],
    cssParts: [],
  },
  {
    tagName: 'wa-drawer',
    name: 'Drawer',
    description: 'Drawers slide in from a container to expose additional options and information.',
    category: 'Organization',
    properties: [
        {
            "name": "open",
            "type": "boolean",
            "description": "Indicates whether or not the drawer is open. Toggle this attribute to show and hide the drawer.",
            "default": "false"
        },
        {
            "name": "label",
            "type": "string",
            "description": "The drawer's label as displayed in the header. You should always include a relevant label, as it is required for proper accessibility. If you need to display HTML, use the `label` slot instead. /",
            "default": "''"
        },
        {
            "name": "placement",
            "type": "'top' | 'end' | 'bottom' | 'start'",
            "description": "The direction from which the drawer will open.",
            "default": "'end'"
        },
        {
            "name": "withoutHeader",
            "type": "boolean",
            "description": "Disables the header. This will also remove the default close button.",
            "default": "false"
        },
        {
            "name": "lightDismiss",
            "type": "boolean",
            "description": "When enabled, the drawer will be closed when the user clicks outside of it.",
            "default": "true"
        }
    ],
    events: [
        {
            "name": "wa",
            "description": "show - Emitted when the drawer opens."
        },
        {
            "name": "wa",
            "description": "after-show - Emitted after the drawer opens and all animations are complete."
        },
        {
            "name": "wa",
            "description": "hide - Emitted when the drawer closes."
        },
        {
            "name": "wa",
            "description": "after-hide - Emitted after the drawer closes and all animations are complete."
        }
    ],
    slots: [
        {
            "name": "label",
            "description": "The drawer's label. Alternatively, you can use the `label` attribute."
        },
        {
            "name": "header",
            "description": "actions - Optional actions to add to the header. Works best with `<wa-button>`."
        },
        {
            "name": "footer",
            "description": "The drawer's footer, usually one or more buttons representing various options."
        }
    ],
    cssParts: [
        {
            "name": "dialog",
            "description": "The drawer's internal `<dialog>` element."
        },
        {
            "name": "header",
            "description": "The drawer's header. This element wraps the title and header actions."
        },
        {
            "name": "header",
            "description": "actions - Optional actions to add to the header. Works best with `<wa-button>`."
        },
        {
            "name": "title",
            "description": "The drawer's title."
        },
        {
            "name": "close",
            "description": "button - The close button, a `<wa-button>`."
        },
        {
            "name": "close",
            "description": "button__base - The close button's exported `base` part."
        },
        {
            "name": "body",
            "description": "The drawer's body."
        },
        {
            "name": "footer",
            "description": "The drawer's footer."
        }
    ],
  },
  {
    tagName: 'wa-dropdown-item',
    name: 'Dropdown Item',
    description: 'Description of component.',
    category: 'Actions',
    properties: [
        {
            "name": "active",
            "type": "boolean",
            "description": "@internal The controller will set this property to true when the item is active.",
            "default": "false"
        },
        {
            "name": "variant",
            "type": "'danger' | 'default'",
            "description": "The type of menu item to render.",
            "default": "'default'"
        },
        {
            "name": "size",
            "type": "'small' | 'medium' | 'large'",
            "description": "@internal The dropdown item's size. /",
            "default": "'medium'"
        },
        {
            "name": "checkboxAdjacent",
            "type": "boolean",
            "description": "@internal The controller will set this property to true when at least one checkbox exists in the dropdown. This allows non-checkbox items to draw additional space to align properly with checkbox items. /",
            "default": "false"
        },
        {
            "name": "submenuAdjacent",
            "type": "boolean",
            "description": "@internal The controller will set this property to true when at least one item with a submenu exists in the dropdown. This allows non-submenu items to draw additional space to align properly with items that have submenus. /",
            "default": "false"
        },
        {
            "name": "type",
            "type": "'normal' | 'checkbox'",
            "description": "Set to `checkbox` to make the item a checkbox.",
            "default": "'normal'"
        },
        {
            "name": "checked",
            "type": "boolean",
            "description": "Set to true to check the dropdown item. Only valid when `type` is `checkbox`.",
            "default": "false"
        },
        {
            "name": "disabled",
            "type": "boolean",
            "description": "Disables the dropdown item.",
            "default": "false"
        },
        {
            "name": "submenuOpen",
            "type": "boolean",
            "description": "Whether the submenu is currently open.",
            "default": "false"
        }
    ],
    events: [
        {
            "name": "blur",
            "description": "Emitted when the dropdown item loses focus."
        },
        {
            "name": "focus",
            "description": "Emitted when the dropdown item gains focus."
        }
    ],
    slots: [
        {
            "name": "icon",
            "description": "An optional icon to display before the label."
        },
        {
            "name": "details",
            "description": "Additional content or details to display after the label."
        },
        {
            "name": "submenu",
            "description": "Submenu items, typically `<wa-dropdown-item>` elements, to create a nested menu."
        }
    ],
    cssParts: [
        {
            "name": "checkmark",
            "description": "The checkmark icon (a `<wa-icon>` element) when the item is a checkbox."
        },
        {
            "name": "icon",
            "description": "The container for the icon slot."
        },
        {
            "name": "label",
            "description": "The container for the label slot."
        },
        {
            "name": "details",
            "description": "The container for the details slot."
        },
        {
            "name": "submenu",
            "description": "icon - The submenu indicator icon (a `<wa-icon>` element)."
        },
        {
            "name": "submenu",
            "description": "The submenu container."
        }
    ],
  },
  {
    tagName: 'wa-dropdown',
    name: 'Dropdown',
    description: 'Dropdowns expose additional content that "drops down" in a panel.',
    category: 'Actions',
    properties: [
        {
            "name": "open",
            "type": "boolean",
            "description": "Opens or closes the dropdown.",
            "default": "false"
        },
        {
            "name": "size",
            "type": "'small' | 'medium' | 'large'",
            "description": "The dropdown's size.",
            "default": "'medium'"
        },
        {
            "name": "distance",
            "type": "number",
            "description": "The distance of the dropdown menu from its trigger.",
            "default": "0"
        },
        {
            "name": "skidding",
            "type": "number",
            "description": "The offset of the dropdown menu along its trigger.",
            "default": "0"
        }
    ],
    events: [
        {
            "name": "wa",
            "description": "show - Emitted when the dropdown is about to show."
        },
        {
            "name": "wa",
            "description": "after-show - Emitted after the dropdown has been shown."
        },
        {
            "name": "wa",
            "description": "hide - Emitted when the dropdown is about to hide."
        },
        {
            "name": "wa",
            "description": "after-hide - Emitted after the dropdown has been hidden."
        },
        {
            "name": "wa",
            "description": "select - Emitted when an item in the dropdown is selected."
        }
    ],
    slots: [
        {
            "name": "trigger",
            "description": "The element that triggers the dropdown, such as a `<wa-button>` or `<button>`."
        }
    ],
    cssParts: [
        {
            "name": "base",
            "description": "The component's host element."
        },
        {
            "name": "menu",
            "description": "The dropdown menu container."
        }
    ],
  },
  {
    tagName: 'wa-format-bytes',
    name: 'Format Bytes',
    description: 'Formats a number as a human readable bytes value.',
    category: 'Utilities',
    properties: [
        {
            "name": "value",
            "type": "number",
            "description": "The number to format in bytes.",
            "default": "0"
        }
    ],
    events: [],
    slots: [],
    cssParts: [],
  },
  {
    tagName: 'wa-format-date',
    name: 'Format Date',
    description: 'Formats a date/time using the specified locale and options.',
    category: 'Utilities',
    properties: [
        {
            "name": "timeZoneName",
            "type": "'short' | 'long'",
            "description": "The format for displaying the time."
        },
        {
            "name": "timeZone",
            "type": "string",
            "description": "The time zone to express the time in."
        },
        {
            "name": "hourFormat",
            "type": "'auto' | '12' | '24'",
            "description": "The format for displaying the hour.",
            "default": "'auto'"
        }
    ],
    events: [],
    slots: [],
    cssParts: [],
  },
  {
    tagName: 'wa-format-number',
    name: 'Format Number',
    description: 'Formats a number using the specified locale and options.',
    category: 'Utilities',
    properties: [
        {
            "name": "value",
            "type": "number",
            "description": "The number to format.",
            "default": "0"
        },
        {
            "name": "withoutGrouping",
            "type": "boolean",
            "description": "Turns off grouping separators.",
            "default": "false"
        },
        {
            "name": "currencyDisplay",
            "type": "'symbol' | 'narrowSymbol' | 'code' | 'name'",
            "description": "How to display the currency.",
            "default": "'symbol'"
        },
        {
            "name": "minimumIntegerDigits",
            "type": "number",
            "description": "The minimum number of integer digits to use. Possible values are 1-21."
        },
        {
            "name": "minimumFractionDigits",
            "type": "number",
            "description": "The minimum number of fraction digits to use. Possible values are 0-100."
        },
        {
            "name": "maximumFractionDigits",
            "type": "number",
            "description": "The maximum number of fraction digits to use. Possible values are 0-100."
        },
        {
            "name": "minimumSignificantDigits",
            "type": "number",
            "description": "The minimum number of significant digits to use. Possible values are 1-21."
        },
        {
            "name": "maximumSignificantDigits",
            "type": "number",
            "description": "The maximum number of significant digits to use,. Possible values are 1-21."
        }
    ],
    events: [],
    slots: [],
    cssParts: [],
  },
  {
    tagName: 'wa-icon',
    name: 'Icon',
    description: 'Icons are symbols that can be used to represent various options within an application.',
    category: 'Imagery',
    properties: [
        {
            "name": "family",
            "type": "string",
            "description": "The family of icons to choose from. For Font Awesome Free, valid options include `classic` and `brands`. For Font Awesome Pro subscribers, valid options include, `classic`, `sharp`, `duotone`, `sharp-duotone`, and `brands`. A valid kit code must be present to show pro icons via CDN. You can set `<html data-fa-kit-code=\"...\">` to provide one. /"
        },
        {
            "name": "variant",
            "type": "string",
            "description": "The name of the icon's variant. For Font Awesome, valid options include `thin`, `light`, `regular`, and `solid` for the `classic` and `sharp` families. Some variants require a Font Awesome Pro subscription. Custom icon libraries may or may not use this property. /"
        },
        {
            "name": "autoWidth",
            "type": "boolean",
            "description": "Sets the width of the icon to match the cropped SVG viewBox. This operates like the Font `fa-width-auto` class.",
            "default": "false"
        },
        {
            "name": "swapOpacity",
            "type": "boolean",
            "description": "Swaps the opacity of duotone icons.",
            "default": "false"
        },
        {
            "name": "library",
            "type": "string",
            "description": "The name of a registered custom icon library.",
            "default": "'default'"
        }
    ],
    events: [
        {
            "name": "wa",
            "description": "load - Emitted when the icon has loaded. When using `spriteSheet: true` this will not emit."
        },
        {
            "name": "wa",
            "description": "error - Emitted when the icon fails to load due to an error. When using `spriteSheet: true` this will not emit."
        }
    ],
    slots: [],
    cssParts: [
        {
            "name": "svg",
            "description": "The internal SVG element."
        },
        {
            "name": "use",
            "description": "The `<use>` element generated when using `spriteSheet: true`"
        }
    ],
  },
  {
    tagName: 'wa-include',
    name: 'Include',
    description: 'Includes give you the power to embed external HTML files into the page.',
    category: 'Utilities',
    properties: [
        {
            "name": "allowScripts",
            "type": "boolean",
            "description": "Allows included scripts to be executed. Be sure you trust the content you are including as it will be executed as code and can result in XSS attacks. /",
            "default": "false"
        }
    ],
    events: [
        {
            "name": "wa",
            "description": "load - Emitted when the included file is loaded."
        }
    ],
    slots: [],
    cssParts: [],
  },
  {
    tagName: 'wa-input',
    name: 'Input',
    description: 'Inputs collect data from the user.',
    category: 'Form Controls',
    properties: [
        {
            "name": "defaultValue",
            "type": "string | null",
            "description": "The default value of the form control. Primarily used for resetting the form control.",
            "default": "this.getAttribute('value') || null"
        },
        {
            "name": "size",
            "type": "'small' | 'medium' | 'large'",
            "description": "The input's size.",
            "default": "'medium'"
        },
        {
            "name": "appearance",
            "type": "'filled' | 'outlined' | 'filled-outlined'",
            "description": "The input's visual appearance.",
            "default": "'outlined'"
        },
        {
            "name": "pill",
            "type": "boolean",
            "description": "Draws a pill-style input with rounded edges.",
            "default": "false"
        },
        {
            "name": "hint",
            "type": "string",
            "description": "The input's hint. If you need to display HTML, use the `hint` slot instead.",
            "default": "''"
        },
        {
            "name": "withClear",
            "type": "boolean",
            "description": "Adds a clear button when the input is not empty.",
            "default": "false"
        },
        {
            "name": "readonly",
            "type": "boolean",
            "description": "Makes the input readonly.",
            "default": "false"
        },
        {
            "name": "passwordToggle",
            "type": "boolean",
            "description": "Adds a button to toggle the password's visibility. Only applies to password types.",
            "default": "false"
        },
        {
            "name": "passwordVisible",
            "type": "boolean",
            "description": "Determines whether or not the password is currently visible. Only applies to password input types.",
            "default": "false"
        },
        {
            "name": "withoutSpinButtons",
            "type": "boolean",
            "description": "Hides the browser's built-in increment/decrement spin buttons for number inputs.",
            "default": "false"
        },
        {
            "name": "form",
            "type": "string",
            "description": "By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you to place the form control outside of a form and associate it with the form that has this `id`. The form must be in the same document or shadow root for this to work. /",
            "default": "null"
        },
        {
            "name": "required",
            "type": "boolean",
            "description": "Makes the input a required field.",
            "default": "false"
        },
        {
            "name": "minlength",
            "type": "number",
            "description": "The minimum length of input that will be considered valid."
        },
        {
            "name": "maxlength",
            "type": "number",
            "description": "The maximum length of input that will be considered valid."
        },
        {
            "name": "autofocus",
            "type": "boolean",
            "description": "Indicates that the input should receive focus on page load."
        },
        {
            "name": "withLabel",
            "type": "boolean",
            "description": "Used for SSR. Will determine if the SSRed component will have the label slot rendered on initial paint. /",
            "default": "false"
        },
        {
            "name": "withHint",
            "type": "boolean",
            "description": "Used for SSR. Will determine if the SSRed component will have the hint slot rendered on initial paint. /",
            "default": "false"
        }
    ],
    events: [
        {
            "name": "blur",
            "description": "Emitted when the control loses focus."
        },
        {
            "name": "change",
            "description": "Emitted when an alteration to the control's value is committed by the user."
        },
        {
            "name": "focus",
            "description": "Emitted when the control gains focus."
        },
        {
            "name": "input",
            "description": "Emitted when the control receives input."
        },
        {
            "name": "wa",
            "description": "clear - Emitted when the clear button is activated."
        },
        {
            "name": "wa",
            "description": "invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied."
        }
    ],
    slots: [
        {
            "name": "label",
            "description": "The input's label. Alternatively, you can use the `label` attribute."
        },
        {
            "name": "start",
            "description": "An element, such as `<wa-icon>`, placed at the start of the input control."
        },
        {
            "name": "end",
            "description": "An element, such as `<wa-icon>`, placed at the end of the input control."
        },
        {
            "name": "clear",
            "description": "icon - An icon to use in lieu of the default clear icon."
        },
        {
            "name": "show",
            "description": "password-icon - An icon to use in lieu of the default show password icon."
        },
        {
            "name": "hide",
            "description": "password-icon - An icon to use in lieu of the default hide password icon."
        },
        {
            "name": "hint",
            "description": "Text that describes how to use the input. Alternatively, you can use the `hint` attribute."
        }
    ],
    cssParts: [
        {
            "name": "label",
            "description": "The label"
        },
        {
            "name": "hint",
            "description": "The hint's wrapper."
        },
        {
            "name": "base",
            "description": "The wrapper being rendered as an input"
        },
        {
            "name": "input",
            "description": "The internal `<input>` control."
        },
        {
            "name": "start",
            "description": "The container that wraps the `start` slot."
        },
        {
            "name": "clear",
            "description": "button - The clear button."
        },
        {
            "name": "password",
            "description": "toggle-button - The password toggle button."
        },
        {
            "name": "end",
            "description": "The container that wraps the `end` slot."
        }
    ],
  },
  {
    tagName: 'wa-intersection-observer',
    name: 'Intersection Observer',
    description: 'Tracks immediate child elements and fires events as they move in and out of view.',
    category: 'Other',
    properties: [
        {
            "name": "rootMargin",
            "type": "string",
            "description": "Offset space around the root boundary. Accepts values like CSS margin syntax.",
            "default": "'0px'"
        },
        {
            "name": "intersectClass",
            "type": "string",
            "description": "CSS class applied to elements during intersection. Automatically removed when elements leave the viewport, enabling pure CSS styling based on visibility state. /",
            "default": "''"
        },
        {
            "name": "once",
            "type": "boolean",
            "description": "If enabled, observation ceases after initial intersection.",
            "default": "false"
        },
        {
            "name": "disabled",
            "type": "boolean",
            "description": "Deactivates the intersection observer functionality.",
            "default": "false"
        }
    ],
    events: [],
    slots: [],
    cssParts: [],
  },
  {
    tagName: 'wa-mutation-observer',
    name: 'Mutation Observer',
    description: 'The Mutation Observer component offers a thin, declarative interface to the MutationObserver API.',
    category: 'Utilities',
    properties: [
        {
            "name": "attr",
            "type": "string",
            "description": "Watches for changes to attributes. To watch only specific attributes, separate them by a space, e.g. `attr=\"class id title\"`. To watch all attributes, use `*`. /"
        },
        {
            "name": "attrOldValue",
            "type": "boolean",
            "description": "Indicates whether or not the attribute's previous value should be recorded when monitoring changes.",
            "default": "false"
        },
        {
            "name": "charData",
            "type": "boolean",
            "description": "Watches for changes to the character data contained within the node.",
            "default": "false"
        },
        {
            "name": "charDataOldValue",
            "type": "boolean",
            "description": "Indicates whether or not the previous value of the node's text should be recorded.",
            "default": "false"
        },
        {
            "name": "childList",
            "type": "boolean",
            "description": "Watches for the addition or removal of new child nodes.",
            "default": "false"
        },
        {
            "name": "disabled",
            "type": "boolean",
            "description": "Disables the observer.",
            "default": "false"
        }
    ],
    events: [],
    slots: [],
    cssParts: [],
  },
  {
    tagName: 'wa-option',
    name: 'Option',
    description: 'Options define the selectable items within various form controls such as select.',
    category: 'Form Controls',
    properties: [
        {
            "name": "value",
            "type": "string",
            "description": "The option's value. When selected, the containing form control will receive this value. The value must be unique from other options in the same group. Values may not contain spaces, as spaces are used as delimiters when listing multiple values. /",
            "default": "''"
        },
        {
            "name": "disabled",
            "type": "boolean",
            "description": "Draws the option in a disabled state, preventing selection.",
            "default": "false"
        },
        {
            "name": "selected",
            "type": "boolean",
            "description": "@internal",
            "default": "false"
        },
        {
            "name": "defaultSelected",
            "type": "boolean",
            "description": "Selects an option initially.",
            "default": "false"
        }
    ],
    events: [],
    slots: [
        {
            "name": "start",
            "description": "An element, such as `<wa-icon>`, placed before the label."
        },
        {
            "name": "end",
            "description": "An element, such as `<wa-icon>`, placed after the label."
        }
    ],
    cssParts: [
        {
            "name": "checked",
            "description": "icon - The checked icon, a `<wa-icon>` element."
        },
        {
            "name": "label",
            "description": "The option's label."
        },
        {
            "name": "start",
            "description": "The container that wraps the `start` slot."
        },
        {
            "name": "end",
            "description": "The container that wraps the `end` slot."
        }
    ],
  },
  {
    tagName: 'wa-popover',
    name: 'Popover',
    description: 'Popovers display interactive content when their anchor element is clicked.',
    category: 'Utilities',
    properties: [
        {
            "name": "open",
            "type": "boolean",
            "description": "Shows or hides the popover.",
            "default": "false"
        },
        {
            "name": "distance",
            "type": "number",
            "description": "The distance in pixels from which to offset the popover away from its target.",
            "default": "8"
        },
        {
            "name": "skidding",
            "type": "number",
            "description": "The distance in pixels from which to offset the popover along its target.",
            "default": "0"
        },
        {
            "name": "withoutArrow",
            "type": "boolean",
            "description": "Removes the arrow from the popover.",
            "default": "false"
        }
    ],
    events: [
        {
            "name": "wa",
            "description": "show - Emitted when the popover begins to show. Canceling this event will stop the popover from showing."
        },
        {
            "name": "wa",
            "description": "after-show - Emitted after the popover has shown and all animations are complete."
        },
        {
            "name": "wa",
            "description": "hide - Emitted when the popover begins to hide. Canceling this event will stop the popover from hiding."
        },
        {
            "name": "wa",
            "description": "after-hide - Emitted after the popover has hidden and all animations are complete."
        }
    ],
    slots: [],
    cssParts: [
        {
            "name": "dialog",
            "description": "The native dialog element that contains the popover content."
        },
        {
            "name": "body",
            "description": "The popover's body where its content is rendered."
        },
        {
            "name": "popup",
            "description": "The internal `<wa-popup>` element that positions the popover."
        },
        {
            "name": "popup__popup",
            "description": "The popup's exported `popup` part. Use this to target the popover's popup container."
        },
        {
            "name": "popup__arrow",
            "description": "The popup's exported `arrow` part. Use this to target the popover's arrow."
        }
    ],
  },
  {
    tagName: 'wa-popup',
    name: 'Popup',
    description: 'Popup is a utility that lets you declaratively anchor "popup" containers to another element.',
    category: 'Utilities',
    properties: [
        {
            "name": "active",
            "type": "boolean",
            "description": "Activates the positioning logic and shows the popup. When this attribute is removed, the positioning logic is torn down and the popup will be hidden. /",
            "default": "false"
        },
        {
            "name": "distance",
            "type": "number",
            "description": "The distance in pixels from which to offset the panel away from its anchor.",
            "default": "0"
        },
        {
            "name": "skidding",
            "type": "number",
            "description": "The distance in pixels from which to offset the panel along its anchor.",
            "default": "0"
        },
        {
            "name": "arrow",
            "type": "boolean",
            "description": "Attaches an arrow to the popup. The arrow's size and color can be customized using the `--arrow-size` and `--arrow-color` custom properties. For additional customizations, you can also target the arrow using `::part(arrow)` in your stylesheet. /",
            "default": "false"
        },
        {
            "name": "arrowPlacement",
            "type": "'start' | 'end' | 'center' | 'anchor'",
            "description": "The placement of the arrow. The default is `anchor`, which will align the arrow as close to the center of the anchor as possible, considering available space and `arrow-padding`. A value of `start`, `end`, or `center` will align the arrow to the start, end, or center of the popover instead. /",
            "default": "'anchor'"
        },
        {
            "name": "arrowPadding",
            "type": "number",
            "description": "The amount of padding between the arrow and the edges of the popup. If the popup has a border-radius, for example, this will prevent it from overflowing the corners. /",
            "default": "10"
        },
        {
            "name": "flip",
            "type": "boolean",
            "description": "When set, placement of the popup will flip to the opposite site to keep it in view. You can use `flipFallbackPlacements` to further configure how the fallback placement is determined. /",
            "default": "false"
        },
        {
            "name": "flipFallbackStrategy",
            "type": "'best-fit' | 'initial'",
            "description": "When neither the preferred placement nor the fallback placements fit, this value will be used to determine whether the popup should be positioned using the best available fit based on available space or as it was initially preferred. /",
            "default": "'best-fit'"
        },
        {
            "name": "flipBoundary",
            "type": "Element | Element[]",
            "description": "The flip boundary describes clipping element(s) that overflow will be checked relative to when flipping. By default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can change the boundary by passing a reference to one or more elements to this property. /"
        },
        {
            "name": "flipPadding",
            "type": "number",
            "description": "The amount of padding, in pixels, to exceed before the flip behavior will occur.",
            "default": "0"
        },
        {
            "name": "shift",
            "type": "boolean",
            "description": "Moves the popup along the axis to keep it in view when clipped.",
            "default": "false"
        },
        {
            "name": "shiftBoundary",
            "type": "Element | Element[]",
            "description": "The shift boundary describes clipping element(s) that overflow will be checked relative to when shifting. By default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can change the boundary by passing a reference to one or more elements to this property. /"
        },
        {
            "name": "shiftPadding",
            "type": "number",
            "description": "The amount of padding, in pixels, to exceed before the shift behavior will occur.",
            "default": "0"
        },
        {
            "name": "autoSize",
            "type": "'horizontal' | 'vertical' | 'both'",
            "description": "When set, this will cause the popup to automatically resize itself to prevent it from overflowing."
        },
        {
            "name": "autoSizeBoundary",
            "type": "Element | Element[]",
            "description": "The auto-size boundary describes clipping element(s) that overflow will be checked relative to when resizing. By default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can change the boundary by passing a reference to one or more elements to this property. /"
        },
        {
            "name": "autoSizePadding",
            "type": "number",
            "description": "The amount of padding, in pixels, to exceed before the auto-size behavior will occur.",
            "default": "0"
        },
        {
            "name": "hoverBridge",
            "type": "boolean",
            "description": "When a gap exists between the anchor and the popup element, this option will add a \"hover bridge\" that fills the gap using an invisible element. This makes listening for events such as `mouseenter` and `mouseleave` more sane because the pointer never technically leaves the element. The hover bridge will only be drawn when the popover is active. /",
            "default": "false"
        }
    ],
    events: [
        {
            "name": "wa",
            "description": "reposition - Emitted when the popup is repositioned. This event can fire a lot, so avoid putting expensive"
        }
    ],
    slots: [
        {
            "name": "anchor",
            "description": "The element the popup will be anchored to. If the anchor lives outside of the popup, you can use the"
        }
    ],
    cssParts: [
        {
            "name": "arrow",
            "description": "The arrow's container. Avoid setting `top|bottom|left|right` properties, as these values are"
        },
        {
            "name": "popup",
            "description": "The popup's container. Useful for setting a background color, box shadow, etc."
        },
        {
            "name": "hover",
            "description": "bridge - The hover bridge element. Only available when the `hover-bridge` option is enabled."
        }
    ],
  },
  {
    tagName: 'wa-progress-bar',
    name: 'Progress Bar',
    description: 'Progress bars are used to show the status of an ongoing operation.',
    category: 'Feedback & Status',
    properties: [
        {
            "name": "value",
            "type": "number",
            "description": "The current progress as a percentage, 0 to 100.",
            "default": "0"
        },
        {
            "name": "indeterminate",
            "type": "boolean",
            "description": "When true, percentage is ignored, the label is hidden, and the progress bar is drawn in an indeterminate state.",
            "default": "false"
        }
    ],
    events: [],
    slots: [],
    cssParts: [
        {
            "name": "base",
            "description": "The component's base wrapper."
        },
        {
            "name": "indicator",
            "description": "The progress bar's indicator."
        },
        {
            "name": "label",
            "description": "The progress bar's label."
        }
    ],
  },
  {
    tagName: 'wa-progress-ring',
    name: 'Progress Ring',
    description: 'Progress rings are used to show the progress of a determinate operation in a circular fashion.',
    category: 'Feedback & Status',
    properties: [
        {
            "name": "value",
            "type": "number",
            "description": "The current progress as a percentage, 0 to 100.",
            "default": "0"
        }
    ],
    events: [],
    slots: [],
    cssParts: [
        {
            "name": "base",
            "description": "The component's base wrapper."
        },
        {
            "name": "label",
            "description": "The progress ring label."
        }
    ],
  },
  {
    tagName: 'wa-qr-code',
    name: 'QR Code',
    description: 'Generates a QR code and renders it using the Canvas API.',
    category: 'Actions',
    properties: [
        {
            "name": "size",
            "type": "number",
            "description": "The size of the QR code, in pixels.",
            "default": "128"
        },
        {
            "name": "radius",
            "type": "number",
            "description": "The edge radius of each module. Must be between 0 and 0.5.",
            "default": "0"
        },
        {
            "name": "errorCorrection",
            "type": "'L' | 'M' | 'Q' | 'H'",
            "description": "The level of error correction to use. [Learn more](https://www.qrcode.com/en/about/error_correction.html)",
            "default": "'H'"
        }
    ],
    events: [],
    slots: [],
    cssParts: [
        {
            "name": "base",
            "description": "The component's base wrapper."
        }
    ],
  },
  {
    tagName: 'wa-radio-group',
    name: 'Radio Group',
    description: 'Radio groups are used to group multiple radios so they function as a single form control.',
    category: 'Form Controls',
    properties: [
        {
            "name": "hint",
            "type": "string",
            "description": "The radio groups's hint. If you need to display HTML, use the `hint` slot instead.",
            "default": "''"
        },
        {
            "name": "name",
            "type": "string | null",
            "description": "The name of the radio group, submitted as a name/value pair with form data.",
            "default": "null"
        },
        {
            "name": "disabled",
            "type": "boolean",
            "description": "Disables the radio group and all child radios.",
            "default": "false"
        },
        {
            "name": "orientation",
            "type": "'horizontal' | 'vertical'",
            "description": "The orientation in which to show radio items.",
            "default": "'vertical'"
        },
        {
            "name": "defaultValue",
            "type": "string | null",
            "description": "The default value of the form control. Primarily used for resetting the form control.",
            "default": "this.getAttribute('value') || null"
        },
        {
            "name": "size",
            "type": "'small' | 'medium' | 'large'",
            "description": "The radio group's size. This size will be applied to all child radios and radio buttons, except when explicitly overridden.",
            "default": "'medium'"
        },
        {
            "name": "required",
            "type": "boolean",
            "description": "Ensures a child radio is checked before allowing the containing form to submit.",
            "default": "false"
        },
        {
            "name": "withLabel",
            "type": "boolean",
            "description": "Used for SSR. if true, will show slotted label on initial render. /",
            "default": "false"
        },
        {
            "name": "withHint",
            "type": "boolean",
            "description": "Used for SSR. if true, will show slotted hint on initial render. /",
            "default": "false"
        }
    ],
    events: [
        {
            "name": "change",
            "description": "Emitted when the radio group's selected value changes."
        },
        {
            "name": "input",
            "description": "Emitted when the radio group receives user input."
        },
        {
            "name": "wa",
            "description": "invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied."
        }
    ],
    slots: [
        {
            "name": "label",
            "description": "The radio group's label. Required for proper accessibility. Alternatively, you can use the `label`"
        },
        {
            "name": "hint",
            "description": "Text that describes how to use the radio group. Alternatively, you can use the `hint` attribute."
        }
    ],
    cssParts: [
        {
            "name": "form",
            "description": "control - The form control that wraps the label, input, and hint."
        },
        {
            "name": "form",
            "description": "control-label - The label's wrapper."
        },
        {
            "name": "form",
            "description": "control-input - The input's wrapper."
        },
        {
            "name": "radios",
            "description": "The wrapper than surrounds radio items, styled as a flex container by default."
        },
        {
            "name": "hint",
            "description": "The hint's wrapper."
        }
    ],
  },
  {
    tagName: 'wa-radio',
    name: 'Radio',
    description: 'Radios allow the user to select a single option from a group.',
    category: 'Form Controls',
    properties: [
        {
            "name": "form",
            "type": "string | null",
            "description": "The string pointing to a form's id. /",
            "default": "null"
        },
        {
            "name": "value",
            "type": "string",
            "description": "The radio's value. When selected, the radio group will receive this value."
        },
        {
            "name": "appearance",
            "type": "'default' | 'button'",
            "description": "The radio's visual appearance.",
            "default": "'default'"
        },
        {
            "name": "size",
            "type": "'small' | 'medium' | 'large'",
            "description": "The radio's size. When used inside a radio group, the size will be determined by the radio group's size so this attribute can typically be omitted. /",
            "default": "'medium'"
        },
        {
            "name": "disabled",
            "type": "boolean",
            "description": "Disables the radio.",
            "default": "false"
        }
    ],
    events: [
        {
            "name": "blur",
            "description": "Emitted when the control loses focus."
        },
        {
            "name": "focus",
            "description": "Emitted when the control gains focus."
        }
    ],
    slots: [],
    cssParts: [
        {
            "name": "control",
            "description": "The circular container that wraps the radio's checked state."
        },
        {
            "name": "checked",
            "description": "icon - The checked icon."
        },
        {
            "name": "label",
            "description": "The container that wraps the radio's label."
        }
    ],
  },
  {
    tagName: 'wa-rating',
    name: 'Rating',
    description: 'Ratings give users a way to quickly view and provide feedback.',
    category: 'Form Controls',
    properties: [
        {
            "name": "value",
            "type": "number",
            "description": "The current rating.",
            "default": "0"
        },
        {
            "name": "max",
            "type": "number",
            "description": "The highest rating to show.",
            "default": "5"
        },
        {
            "name": "precision",
            "type": "number",
            "description": "The precision at which the rating will increase and decrease. For example, to allow half-star ratings, set this attribute to `0.5`. /",
            "default": "1"
        },
        {
            "name": "readonly",
            "type": "boolean",
            "description": "Makes the rating readonly.",
            "default": "false"
        },
        {
            "name": "disabled",
            "type": "boolean",
            "description": "Disables the rating.",
            "default": "false"
        },
        {
            "name": "size",
            "type": "'small' | 'medium' | 'large'",
            "description": "The component's size.",
            "default": "'medium'"
        }
    ],
    events: [
        {
            "name": "change",
            "description": "Emitted when the rating's value changes."
        }
    ],
    slots: [],
    cssParts: [
        {
            "name": "base",
            "description": "The component's base wrapper."
        }
    ],
  },
  {
    tagName: 'wa-relative-time',
    name: 'Relative Time',
    description: 'Outputs a localized time phrase relative to the current date and time.',
    category: 'Utilities',
    properties: [
        {
            "name": "sync",
            "type": "boolean",
            "description": "Keep the displayed value up to date as time passes.",
            "default": "false"
        }
    ],
    events: [],
    slots: [],
    cssParts: [],
  },
  {
    tagName: 'wa-resize-observer',
    name: 'Resize Observer',
    description: 'The Resize Observer component offers a thin, declarative interface to the ResizeObserver API.',
    category: 'Utilities',
    properties: [
        {
            "name": "disabled",
            "type": "boolean",
            "description": "Disables the observer.",
            "default": "false"
        }
    ],
    events: [],
    slots: [],
    cssParts: [],
  },
  {
    tagName: 'wa-scroller',
    name: 'Scroller',
    description: 'Scrollers create an accessible container while providing visual cues that help users identify and navigate through content that scrolls.',
    category: 'Organization',
    properties: [
        {
            "name": "orientation",
            "type": "'horizontal' | 'vertical'",
            "description": "The scroller's orientation.",
            "default": "'horizontal'"
        },
        {
            "name": "withoutScrollbar",
            "type": "boolean",
            "description": "Removes the visible scrollbar.",
            "default": "false"
        },
        {
            "name": "withoutShadow",
            "type": "boolean",
            "description": "Removes the shadows.",
            "default": "false"
        }
    ],
    events: [],
    slots: [],
    cssParts: [
        {
            "name": "content",
            "description": "The container that wraps the slotted content."
        }
    ],
  },
  {
    tagName: 'wa-select',
    name: 'Select',
    description: 'Selects allow you to choose items from a menu of predefined options.',
    category: 'Form Controls',
    properties: [
        {
            "name": "size",
            "type": "'small' | 'medium' | 'large'",
            "description": "The select's size.",
            "default": "'medium'"
        },
        {
            "name": "multiple",
            "type": "boolean",
            "description": "Allows more than one option to be selected.",
            "default": "false"
        },
        {
            "name": "maxOptionsVisible",
            "type": "number",
            "description": "The maximum number of selected options to show when `multiple` is true. After the maximum, \"+n\" will be shown to indicate the number of additional items that are selected. Set to 0 to remove the limit. /",
            "default": "3"
        },
        {
            "name": "disabled",
            "type": "boolean",
            "description": "Disables the select control.",
            "default": "false"
        },
        {
            "name": "withClear",
            "type": "boolean",
            "description": "Adds a clear button when the select is not empty.",
            "default": "false"
        },
        {
            "name": "open",
            "type": "boolean",
            "description": "Indicates whether or not the select is open. You can toggle this attribute to show and hide the menu, or you can use the `show()` and `hide()` methods and this attribute will reflect the select's open state. /",
            "default": "false"
        },
        {
            "name": "appearance",
            "type": "'filled' | 'outlined' | 'filled-outlined'",
            "description": "The select's visual appearance.",
            "default": "'outlined'"
        },
        {
            "name": "pill",
            "type": "boolean",
            "description": "Draws a pill-style select with rounded edges.",
            "default": "false"
        },
        {
            "name": "placement",
            "type": "'top' | 'bottom'",
            "description": "The preferred placement of the select's menu. Note that the actual placement may vary as needed to keep the listbox inside of the viewport. /",
            "default": "'bottom'"
        },
        {
            "name": "hint",
            "type": "string",
            "description": "The select's hint. If you need to display HTML, use the `hint` slot instead.",
            "default": "''"
        },
        {
            "name": "withLabel",
            "type": "boolean",
            "description": "Used for SSR purposes when a label is slotted in. Will show the label on first render. /",
            "default": "false"
        },
        {
            "name": "withHint",
            "type": "boolean",
            "description": "Used for SSR purposes when hint is slotted in. Will show the hint on first render. /",
            "default": "false"
        },
        {
            "name": "form",
            "type": "string",
            "description": "By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you to place the form control outside of a form and associate it with the form that has this `id`. The form must be in the same document or shadow root for this to work. /",
            "default": "null"
        },
        {
            "name": "required",
            "type": "boolean",
            "description": "The select's required attribute.",
            "default": "false"
        }
    ],
    events: [
        {
            "name": "change",
            "description": "Emitted when the control's value changes."
        },
        {
            "name": "input",
            "description": "Emitted when the control receives input."
        },
        {
            "name": "focus",
            "description": "Emitted when the control gains focus."
        },
        {
            "name": "blur",
            "description": "Emitted when the control loses focus."
        },
        {
            "name": "wa",
            "description": "clear - Emitted when the control's value is cleared."
        },
        {
            "name": "wa",
            "description": "show - Emitted when the select's menu opens."
        },
        {
            "name": "wa",
            "description": "after-show - Emitted after the select's menu opens and all animations are complete."
        },
        {
            "name": "wa",
            "description": "hide - Emitted when the select's menu closes."
        },
        {
            "name": "wa",
            "description": "after-hide - Emitted after the select's menu closes and all animations are complete."
        },
        {
            "name": "wa",
            "description": "invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied."
        }
    ],
    slots: [
        {
            "name": "label",
            "description": "The input's label. Alternatively, you can use the `label` attribute."
        },
        {
            "name": "start",
            "description": "An element, such as `<wa-icon>`, placed at the start of the combobox."
        },
        {
            "name": "end",
            "description": "An element, such as `<wa-icon>`, placed at the end of the combobox."
        },
        {
            "name": "clear",
            "description": "icon - An icon to use in lieu of the default clear icon."
        },
        {
            "name": "expand",
            "description": "icon - The icon to show when the control is expanded and collapsed. Rotates on open and close."
        },
        {
            "name": "hint",
            "description": "Text that describes how to use the input. Alternatively, you can use the `hint` attribute."
        }
    ],
    cssParts: [
        {
            "name": "form",
            "description": "control - The form control that wraps the label, input, and hint."
        },
        {
            "name": "form",
            "description": "control-label - The label's wrapper."
        },
        {
            "name": "form",
            "description": "control-input - The select's wrapper."
        },
        {
            "name": "hint",
            "description": "The hint's wrapper."
        },
        {
            "name": "combobox",
            "description": "The container the wraps the start, end, value, clear icon, and expand button."
        },
        {
            "name": "start",
            "description": "The container that wraps the `start` slot."
        },
        {
            "name": "end",
            "description": "The container that wraps the `end` slot."
        },
        {
            "name": "display",
            "description": "input - The element that displays the selected option's label, an `<input>` element."
        },
        {
            "name": "listbox",
            "description": "The listbox container where options are slotted."
        },
        {
            "name": "tags",
            "description": "The container that houses option tags when `multiselect` is used."
        },
        {
            "name": "tag",
            "description": "The individual tags that represent each multiselect option."
        },
        {
            "name": "tag__content",
            "description": "The tag's content part."
        },
        {
            "name": "tag__remove",
            "description": "button - The tag's remove button."
        },
        {
            "name": "tag__remove",
            "description": "button__base - The tag's remove button base part."
        },
        {
            "name": "clear",
            "description": "button - The clear button."
        },
        {
            "name": "expand",
            "description": "icon - The container that wraps the expand icon."
        }
    ],
  },
  {
    tagName: 'wa-skeleton',
    name: 'Skeleton',
    description: 'Skeletons are used to provide a visual representation of where content will eventually be drawn.',
    category: 'Feedback & Status',
    properties: [
        {
            "name": "effect",
            "type": "'pulse' | 'sheen' | 'none'",
            "description": "Determines which effect the skeleton will use.",
            "default": "'none'"
        }
    ],
    events: [],
    slots: [],
    cssParts: [
        {
            "name": "indicator",
            "description": "The skeleton's indicator which is responsible for its color and animation."
        }
    ],
  },
  {
    tagName: 'wa-slider',
    name: 'Slider',
    description: 'Ranges allow the user to select a single value within a given range using a slider.',
    category: 'Form Controls',
    properties: [
        {
            "name": "hint",
            "type": "string",
            "description": "The slider hint. If you need to display HTML, use the hint slot instead.",
            "default": "''"
        },
        {
            "name": "name",
            "type": "string",
            "description": "The name of the slider. This will be submitted with the form as a name/value pair."
        },
        {
            "name": "minValue",
            "type": "number",
            "description": "The minimum value of a range selection. Used only when range attribute is set.",
            "default": "0"
        },
        {
            "name": "maxValue",
            "type": "number",
            "description": "The maximum value of a range selection. Used only when range attribute is set.",
            "default": "50"
        },
        {
            "name": "range",
            "type": "boolean",
            "description": "Converts the slider to a range slider with two thumbs.",
            "default": "false"
        },
        {
            "name": "disabled",
            "type": "boolean",
            "description": "Disables the slider.",
            "default": "false"
        },
        {
            "name": "readonly",
            "type": "boolean",
            "description": "Makes the slider a read-only field.",
            "default": "false"
        },
        {
            "name": "orientation",
            "type": "'horizontal' | 'vertical'",
            "description": "The orientation of the slider.",
            "default": "'horizontal'"
        },
        {
            "name": "size",
            "type": "'small' | 'medium' | 'large'",
            "description": "The slider's size.",
            "default": "'medium'"
        },
        {
            "name": "indicatorOffset",
            "type": "number",
            "description": "The starting value from which to draw the slider's fill, which is based on its current value."
        },
        {
            "name": "form",
            "type": "string",
            "description": "The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of this attribute must be an ID of a form in the same document or shadow root. /",
            "default": "null"
        },
        {
            "name": "min",
            "type": "number",
            "description": "The minimum value allowed.",
            "default": "0"
        },
        {
            "name": "max",
            "type": "number",
            "description": "The maximum value allowed.",
            "default": "100"
        },
        {
            "name": "step",
            "type": "number",
            "description": "The granularity the value must adhere to when incrementing and decrementing.",
            "default": "1"
        },
        {
            "name": "required",
            "type": "boolean",
            "description": "Makes the slider a required field.",
            "default": "false"
        },
        {
            "name": "autofocus",
            "type": "boolean",
            "description": "Tells the browser to focus the slider when the page loads or a dialog is shown."
        },
        {
            "name": "tooltipDistance",
            "type": "number",
            "description": "The distance of the tooltip from the slider's thumb.",
            "default": "8"
        },
        {
            "name": "withMarkers",
            "type": "boolean",
            "description": "Draws markers at each step along the slider.",
            "default": "false"
        },
        {
            "name": "withTooltip",
            "type": "boolean",
            "description": "Draws a tooltip above the thumb when the control has focus or is dragged.",
            "default": "false"
        },
        {
            "name": "valueFormatter",
            "type": "(value: number)",
            "description": "A custom formatting function to apply to the value. This will be shown in the tooltip and announced by screen readers. Must be set with JavaScript. Property only. /",
            "default": "> string"
        }
    ],
    events: [
        {
            "name": "blur",
            "description": "Emitted when the control loses focus."
        },
        {
            "name": "change",
            "description": "Emitted when an alteration to the control's value is committed by the user."
        },
        {
            "name": "focus",
            "description": "Emitted when the control gains focus."
        },
        {
            "name": "input",
            "description": "Emitted when the control receives input."
        },
        {
            "name": "wa",
            "description": "invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied."
        }
    ],
    slots: [
        {
            "name": "label",
            "description": "The slider label. Alternatively, you can use the `label` attribute."
        },
        {
            "name": "hint",
            "description": "Text that describes how to use the input. Alternatively, you can use the `hint` attribute."
        },
        {
            "name": "reference",
            "description": "One or more reference labels to show visually below the slider."
        }
    ],
    cssParts: [
        {
            "name": "label",
            "description": "The element that contains the sliders's label."
        },
        {
            "name": "hint",
            "description": "The element that contains the slider's description."
        },
        {
            "name": "slider",
            "description": "The focusable element with `role=\"slider\"`. Contains the track and reference slot."
        },
        {
            "name": "track",
            "description": "The slider's track."
        },
        {
            "name": "indicator",
            "description": "The colored indicator that shows from the start of the slider to the current value."
        },
        {
            "name": "markers",
            "description": "The container that holds all the markers when `with-markers` is used."
        },
        {
            "name": "marker",
            "description": "The individual markers that are shown when `with-markers` is used."
        },
        {
            "name": "references",
            "description": "The container that holds references that get slotted in."
        },
        {
            "name": "thumb",
            "description": "The slider's thumb."
        },
        {
            "name": "thumb",
            "description": "min - The min value thumb in a range slider."
        },
        {
            "name": "thumb",
            "description": "max - The max value thumb in a range slider."
        },
        {
            "name": "tooltip",
            "description": "The tooltip, a `<wa-tooltip>` element."
        },
        {
            "name": "tooltip__tooltip",
            "description": "The tooltip's `tooltip` part."
        },
        {
            "name": "tooltip__content",
            "description": "The tooltip's `content` part."
        },
        {
            "name": "tooltip__arrow",
            "description": "The tooltip's `arrow` part."
        }
    ],
  },
  {
    tagName: 'wa-spinner',
    name: 'Spinner',
    description: 'Spinners are used to show the progress of an indeterminate operation.',
    category: 'Feedback & Status',
    properties: [],
    events: [],
    slots: [],
    cssParts: [
        {
            "name": "base",
            "description": "The component's base wrapper."
        }
    ],
  },
  {
    tagName: 'wa-split-panel',
    name: 'Split Panel',
    description: 'Split panels display two adjacent panels, allowing the user to reposition them.',
    category: 'Organization',
    properties: [
        {
            "name": "position",
            "type": "number",
            "description": "The current position of the divider from the primary panel's edge as a percentage 0-100. Defaults to 50% of the container's initial size. /",
            "default": "50"
        },
        {
            "name": "positionInPixels",
            "type": "number",
            "description": "The current position of the divider from the primary panel's edge in pixels."
        },
        {
            "name": "orientation",
            "type": "'horizontal' | 'vertical'",
            "description": "Sets the split panel's orientation.",
            "default": "'horizontal'"
        },
        {
            "name": "disabled",
            "type": "boolean",
            "description": "Disables resizing. Note that the position may still change as a result of resizing the host element.",
            "default": "false"
        },
        {
            "name": "snapThreshold",
            "type": "number",
            "description": "How close the divider must be to a snap point until snapping occurs.",
            "default": "12"
        }
    ],
    events: [
        {
            "name": "wa",
            "description": "reposition - Emitted when the divider's position changes."
        }
    ],
    slots: [
        {
            "name": "start",
            "description": "Content to place in the start panel."
        },
        {
            "name": "end",
            "description": "Content to place in the end panel."
        },
        {
            "name": "divider",
            "description": "The divider. Useful for slotting in a custom icon that renders as a handle."
        }
    ],
    cssParts: [
        {
            "name": "start",
            "description": "The start panel."
        },
        {
            "name": "end",
            "description": "The end panel."
        },
        {
            "name": "panel",
            "description": "Targets both the start and end panels."
        },
        {
            "name": "divider",
            "description": "The divider that separates the start and end panels."
        }
    ],
  },
  {
    tagName: 'wa-switch',
    name: 'Switch',
    description: 'Switches allow the user to toggle an option on or off.',
    category: 'Form Controls',
    properties: [
        {
            "name": "name",
            "type": "string | null",
            "description": "The name of the switch, submitted as a name/value pair with form data.",
            "default": "null"
        },
        {
            "name": "size",
            "type": "'small' | 'medium' | 'large'",
            "description": "The switch's size.",
            "default": "'medium'"
        },
        {
            "name": "disabled",
            "type": "boolean",
            "description": "Disables the switch.",
            "default": "false"
        },
        {
            "name": "checked",
            "type": "boolean",
            "description": "Draws the switch in a checked state.",
            "default": "this.hasAttribute('checked')"
        },
        {
            "name": "form",
            "type": "string",
            "description": "By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you to place the form control outside of a form and associate it with the form that has this `id`. The form must be in the same document or shadow root for this to work. /",
            "default": "null"
        },
        {
            "name": "required",
            "type": "boolean",
            "description": "Makes the switch a required field.",
            "default": "false"
        },
        {
            "name": "hint",
            "type": "string",
            "description": "The switch's hint. If you need to display HTML, use the `hint` slot instead.",
            "default": "''"
        },
        {
            "name": "withHint",
            "type": "boolean",
            "description": "Used for SSR. If you slot in hint, make sure to add `with-hint` to your component to get it to properly render with SSR. /",
            "default": "false"
        }
    ],
    events: [
        {
            "name": "blur",
            "description": "Emitted when the control loses focus."
        },
        {
            "name": "change",
            "description": "Emitted when the control's checked state changes."
        },
        {
            "name": "input",
            "description": "Emitted when the control receives input."
        },
        {
            "name": "focus",
            "description": "Emitted when the control gains focus."
        },
        {
            "name": "wa",
            "description": "invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied."
        }
    ],
    slots: [
        {
            "name": "hint",
            "description": "Text that describes how to use the switch. Alternatively, you can use the `hint` attribute."
        }
    ],
    cssParts: [
        {
            "name": "base",
            "description": "The component's base wrapper."
        },
        {
            "name": "control",
            "description": "The control that houses the switch's thumb."
        },
        {
            "name": "thumb",
            "description": "The switch's thumb."
        },
        {
            "name": "label",
            "description": "The switch's label."
        },
        {
            "name": "hint",
            "description": "The hint's wrapper."
        }
    ],
  },
  {
    tagName: 'wa-tab-group',
    name: 'Tab Group',
    description: 'Tab groups organize content into a container that shows one section at a time.',
    category: 'Navigation',
    properties: [
        {
            "name": "active",
            "type": "string",
            "description": "Sets the active tab.",
            "default": "''"
        },
        {
            "name": "withoutScrollControls",
            "type": "boolean",
            "description": "Disables the scroll arrows that appear when tabs overflow.",
            "default": "false"
        }
    ],
    events: [],
    slots: [
        {
            "name": "nav",
            "description": "Used for grouping tabs in the tab group. Must be `<wa-tab>` elements. Note that `<wa-tab>` will set this"
        }
    ],
    cssParts: [
        {
            "name": "base",
            "description": "The component's base wrapper."
        },
        {
            "name": "nav",
            "description": "The tab group's navigation container where tabs are slotted in."
        },
        {
            "name": "tabs",
            "description": "The container that wraps the tabs."
        },
        {
            "name": "body",
            "description": "The tab group's body where tab panels are slotted in."
        },
        {
            "name": "scroll",
            "description": "button - The previous/next scroll buttons that show when tabs are scrollable, a `<wa-button>`."
        },
        {
            "name": "scroll",
            "description": "button-start - The starting scroll button."
        },
        {
            "name": "scroll",
            "description": "button-end - The ending scroll button."
        },
        {
            "name": "scroll",
            "description": "button__base - The scroll button's exported `base` part."
        }
    ],
  },
  {
    tagName: 'wa-tab-panel',
    name: 'Tab Panel',
    description: 'Tab panels are used inside tab groups to display tabbed content.',
    category: 'Navigation',
    properties: [
        {
            "name": "name",
            "type": "string",
            "description": "The tab panel's name.",
            "default": "''"
        },
        {
            "name": "active",
            "type": "boolean",
            "description": "When true, the tab panel will be shown.",
            "default": "false"
        }
    ],
    events: [],
    slots: [],
    cssParts: [
        {
            "name": "base",
            "description": "The component's base wrapper."
        }
    ],
  },
  {
    tagName: 'wa-tab',
    name: 'Tab',
    description: 'Tabs are used inside tab groups to represent and activate tab panels.',
    category: 'Navigation',
    properties: [
        {
            "name": "panel",
            "type": "string",
            "description": "The name of the tab panel this tab is associated with. The panel must be located in the same tab group.",
            "default": "''"
        },
        {
            "name": "active",
            "type": "boolean",
            "description": "@internal Draws the tab in an active state.",
            "default": "false"
        },
        {
            "name": "disabled",
            "type": "boolean",
            "description": "Disables the tab and prevents selection.",
            "default": "false"
        },
        {
            "name": "tabIndex",
            "type": "number",
            "description": "@internal Need to wrap in a `@property()` otherwise NextJS blows up. /",
            "default": "0"
        }
    ],
    events: [],
    slots: [],
    cssParts: [
        {
            "name": "base",
            "description": "The component's base wrapper."
        }
    ],
  },
  {
    tagName: 'wa-tag',
    name: 'Tag',
    description: 'Tags are used as labels to organize things or to indicate a selection.',
    category: 'Feedback & Status',
    properties: [
        {
            "name": "variant",
            "type": "'brand' | 'neutral' | 'success' | 'warning' | 'danger'",
            "description": "The tag's theme variant. Defaults to `neutral` if not within another element with a variant.",
            "default": "'neutral'"
        },
        {
            "name": "appearance",
            "type": "'accent' | 'filled' | 'outlined' | 'filled-outlined'",
            "description": "The tag's visual appearance.",
            "default": "'filled-outlined'"
        },
        {
            "name": "size",
            "type": "'small' | 'medium' | 'large'",
            "description": "The tag's size.",
            "default": "'medium'"
        },
        {
            "name": "pill",
            "type": "boolean",
            "description": "Draws a pill-style tag with rounded edges.",
            "default": "false"
        },
        {
            "name": "withRemove",
            "type": "boolean",
            "description": "Makes the tag removable and shows a remove button.",
            "default": "false"
        }
    ],
    events: [
        {
            "name": "wa",
            "description": "remove - Emitted when the remove button is activated."
        }
    ],
    slots: [],
    cssParts: [
        {
            "name": "base",
            "description": "The component's base wrapper."
        },
        {
            "name": "content",
            "description": "The tag's content."
        },
        {
            "name": "remove",
            "description": "button - The tag's remove button, a `<wa-button>`."
        },
        {
            "name": "remove",
            "description": "button__base - The remove button's exported `base` part."
        }
    ],
  },
  {
    tagName: 'wa-textarea',
    name: 'Textarea',
    description: 'Textareas collect data from the user and allow multiple lines of text.',
    category: 'Form Controls',
    properties: [
        {
            "name": "name",
            "type": "string | null",
            "description": "The name of the textarea, submitted as a name/value pair with form data.",
            "default": "null"
        },
        {
            "name": "defaultValue",
            "type": "string",
            "description": "The default value of the form control. Primarily used for resetting the form control.",
            "default": "this.getAttribute('value') ?? ''"
        },
        {
            "name": "size",
            "type": "'small' | 'medium' | 'large'",
            "description": "The textarea's size.",
            "default": "'medium'"
        },
        {
            "name": "appearance",
            "type": "'filled' | 'outlined' | 'filled-outlined'",
            "description": "The textarea's visual appearance.",
            "default": "'outlined'"
        },
        {
            "name": "hint",
            "type": "string",
            "description": "The textarea's hint. If you need to display HTML, use the `hint` slot instead.",
            "default": "''"
        },
        {
            "name": "rows",
            "type": "number",
            "description": "The number of rows to display by default.",
            "default": "4"
        },
        {
            "name": "resize",
            "type": "'none' | 'vertical' | 'horizontal' | 'both' | 'auto'",
            "description": "Controls how the textarea can be resized.",
            "default": "'vertical'"
        },
        {
            "name": "disabled",
            "type": "boolean",
            "description": "Disables the textarea.",
            "default": "false"
        },
        {
            "name": "readonly",
            "type": "boolean",
            "description": "Makes the textarea readonly.",
            "default": "false"
        },
        {
            "name": "form",
            "type": "string",
            "description": "By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you to place the form control outside of a form and associate it with the form that has this `id`. The form must be in the same document or shadow root for this to work. /",
            "default": "null"
        },
        {
            "name": "required",
            "type": "boolean",
            "description": "Makes the textarea a required field.",
            "default": "false"
        },
        {
            "name": "minlength",
            "type": "number",
            "description": "The minimum length of input that will be considered valid."
        },
        {
            "name": "maxlength",
            "type": "number",
            "description": "The maximum length of input that will be considered valid."
        },
        {
            "name": "autofocus",
            "type": "boolean",
            "description": "Indicates that the input should receive focus on page load."
        },
        {
            "name": "withLabel",
            "type": "boolean",
            "description": "Used for SSR. If you're slotting in a `label` element, make sure to set this to `true`. /",
            "default": "false"
        },
        {
            "name": "withHint",
            "type": "boolean",
            "description": "Used for SSR. If you're slotting in a `hint` element, make sure to set this to `true`. /",
            "default": "false"
        }
    ],
    events: [
        {
            "name": "blur",
            "description": "Emitted when the control loses focus."
        },
        {
            "name": "change",
            "description": "Emitted when an alteration to the control's value is committed by the user."
        },
        {
            "name": "focus",
            "description": "Emitted when the control gains focus."
        },
        {
            "name": "input",
            "description": "Emitted when the control receives input."
        },
        {
            "name": "wa",
            "description": "invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied."
        }
    ],
    slots: [
        {
            "name": "label",
            "description": "The textarea's label. Alternatively, you can use the `label` attribute."
        },
        {
            "name": "hint",
            "description": "Text that describes how to use the input. Alternatively, you can use the `hint` attribute."
        }
    ],
    cssParts: [
        {
            "name": "label",
            "description": "The label"
        },
        {
            "name": "form",
            "description": "control-input - The input's wrapper."
        },
        {
            "name": "hint",
            "description": "The hint's wrapper."
        },
        {
            "name": "textarea",
            "description": "The internal `<textarea>` control."
        },
        {
            "name": "base",
            "description": "The wrapper around the `<textarea>` control."
        }
    ],
  },
  {
    tagName: 'wa-tooltip',
    name: 'Tooltip',
    description: 'Tooltips display additional information based on a specific action.',
    category: 'Feedback & Status',
    properties: [
        {
            "name": "disabled",
            "type": "boolean",
            "description": "Disables the tooltip so it won't show when triggered.",
            "default": "false"
        },
        {
            "name": "distance",
            "type": "number",
            "description": "The distance in pixels from which to offset the tooltip away from its target.",
            "default": "8"
        },
        {
            "name": "open",
            "type": "boolean",
            "description": "Indicates whether or not the tooltip is open. You can use this in lieu of the show/hide methods.",
            "default": "false"
        },
        {
            "name": "skidding",
            "type": "number",
            "description": "The distance in pixels from which to offset the tooltip along its target.",
            "default": "0"
        },
        {
            "name": "showDelay",
            "type": "number",
            "description": "The amount of time to wait before showing the tooltip when the user mouses in.",
            "default": "150"
        },
        {
            "name": "hideDelay",
            "type": "number",
            "description": "The amount of time to wait before hiding the tooltip when the user mouses out..",
            "default": "0"
        },
        {
            "name": "withoutArrow",
            "type": "boolean",
            "description": "Removes the arrow from the tooltip.",
            "default": "false"
        }
    ],
    events: [
        {
            "name": "wa",
            "description": "show - Emitted when the tooltip begins to show."
        },
        {
            "name": "wa",
            "description": "after-show - Emitted after the tooltip has shown and all animations are complete."
        },
        {
            "name": "wa",
            "description": "hide - Emitted when the tooltip begins to hide."
        },
        {
            "name": "wa",
            "description": "after-hide - Emitted after the tooltip has hidden and all animations are complete."
        }
    ],
    slots: [],
    cssParts: [
        {
            "name": "base",
            "description": "The component's base wrapper, an `<wa-popup>` element."
        },
        {
            "name": "base__popup",
            "description": "The popup's exported `popup` part. Use this to target the tooltip's popup container."
        },
        {
            "name": "base__arrow",
            "description": "The popup's exported `arrow` part. Use this to target the tooltip's arrow."
        },
        {
            "name": "body",
            "description": "The tooltip's body where its content is rendered."
        }
    ],
  },
  {
    tagName: 'wa-tree-item',
    name: 'Tree Item',
    description: 'A tree item serves as a hierarchical node that lives inside a tree.',
    category: 'Navigation',
    properties: [
        {
            "name": "expanded",
            "type": "boolean",
            "description": "Expands the tree item.",
            "default": "false"
        },
        {
            "name": "selected",
            "type": "boolean",
            "description": "Draws the tree item in a selected state.",
            "default": "false"
        },
        {
            "name": "disabled",
            "type": "boolean",
            "description": "Disables the tree item.",
            "default": "false"
        },
        {
            "name": "lazy",
            "type": "boolean",
            "description": "Enables lazy loading behavior.",
            "default": "false"
        }
    ],
    events: [
        {
            "name": "wa",
            "description": "expand - Emitted when the tree item expands."
        },
        {
            "name": "wa",
            "description": "after-expand - Emitted after the tree item expands and all animations are complete."
        },
        {
            "name": "wa",
            "description": "collapse - Emitted when the tree item collapses."
        },
        {
            "name": "wa",
            "description": "after-collapse - Emitted after the tree item collapses and all animations are complete."
        },
        {
            "name": "wa",
            "description": "lazy-change - Emitted when the tree item's lazy state changes."
        },
        {
            "name": "wa",
            "description": "lazy-load - Emitted when a lazy item is selected. Use this event to asynchronously load data and append"
        }
    ],
    slots: [
        {
            "name": "expand",
            "description": "icon - The icon to show when the tree item is expanded."
        },
        {
            "name": "collapse",
            "description": "icon - The icon to show when the tree item is collapsed."
        }
    ],
    cssParts: [
        {
            "name": "base",
            "description": "The component's base wrapper."
        },
        {
            "name": "item",
            "description": "The tree item's container. This element wraps everything except slotted tree item children."
        },
        {
            "name": "indentation",
            "description": "The tree item's indentation container."
        },
        {
            "name": "expand",
            "description": "button - The container that wraps the tree item's expand button and spinner."
        },
        {
            "name": "spinner",
            "description": "The spinner that shows when a lazy tree item is in the loading state."
        },
        {
            "name": "spinner__base",
            "description": "The spinner's base part."
        },
        {
            "name": "label",
            "description": "The tree item's label."
        },
        {
            "name": "children",
            "description": "The container that wraps the tree item's nested children."
        },
        {
            "name": "checkbox",
            "description": "The checkbox that shows when using multiselect."
        },
        {
            "name": "checkbox__base",
            "description": "The checkbox's exported `base` part."
        },
        {
            "name": "checkbox__control",
            "description": "The checkbox's exported `control` part."
        },
        {
            "name": "checkbox__checked",
            "description": "icon - The checkbox's exported `checked-icon` part."
        },
        {
            "name": "checkbox__indeterminate",
            "description": "icon - The checkbox's exported `indeterminate-icon` part."
        },
        {
            "name": "checkbox__label",
            "description": "The checkbox's exported `label` part."
        }
    ],
  },
  {
    tagName: 'wa-tree',
    name: 'Tree',
    description: 'Trees allow you to display a hierarchical list of selectable tree items. Items with children can be expanded and collapsed as desired by the user.',
    category: 'Navigation',
    properties: [],
    events: [],
    slots: [
        {
            "name": "expand",
            "description": "icon - The icon to show when the tree item is expanded. Works best with `<wa-icon>`."
        },
        {
            "name": "collapse",
            "description": "icon - The icon to show when the tree item is collapsed. Works best with `<wa-icon>`."
        }
    ],
    cssParts: [
        {
            "name": "base",
            "description": "The component's base wrapper."
        }
    ],
  },
  {
    tagName: 'wa-zoomable-frame',
    name: 'Zoomable Frame',
    description: 'Zoomable frames render iframe content with zoom and interaction controls.',
    category: 'Imagery',
    properties: [
        {
            "name": "allowfullscreen",
            "type": "boolean",
            "description": "Allows fullscreen mode.",
            "default": "false"
        },
        {
            "name": "zoom",
            "type": "number",
            "description": "The current zoom of the frame, e.g. 0 = 0% and 1 = 100%.",
            "default": "1"
        },
        {
            "name": "zoomLevels",
            "type": "string",
            "description": "The zoom levels to step through when using zoom controls. This does not restrict programmatic changes to the zoom. /",
            "default": "'25% 50% 75% 100% 125% 150% 175% 200%'"
        },
        {
            "name": "withoutControls",
            "type": "boolean",
            "description": "Removes the zoom controls.",
            "default": "false"
        },
        {
            "name": "withoutInteraction",
            "type": "boolean",
            "description": "Disables interaction when present.",
            "default": "false"
        }
    ],
    events: [
        {
            "name": "load",
            "description": "Emitted when the internal iframe when it finishes loading."
        },
        {
            "name": "error",
            "description": "Emitted from the internal iframe when it fails to load."
        }
    ],
    slots: [
        {
            "name": "zoom",
            "description": "in-icon - The slot that contains the zoom in icon."
        },
        {
            "name": "zoom",
            "description": "out-icon - The slot that contains the zoom out icon."
        }
    ],
    cssParts: [
        {
            "name": "iframe",
            "description": "The internal `<iframe>` element."
        },
        {
            "name": "controls",
            "description": "The container that surrounds zoom control buttons."
        },
        {
            "name": "zoom",
            "description": "in-button - The zoom in button."
        },
        {
            "name": "zoom",
            "description": "out-button - The zoom out button."
        }
    ],
  }
];