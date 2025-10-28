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
    properties: [],
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
    properties: [],
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
    properties: [],
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
    tagName: 'wa-button',
    name: 'Button',
    description: 'Buttons represent actions that are available to the user.',
    category: 'Actions',
    properties: [],
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
    properties: [],
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
    properties: [],
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
    properties: [],
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
    properties: [],
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
    properties: [],
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
    properties: [],
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
    properties: [],
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
    properties: [],
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
    properties: [],
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
    properties: [],
    events: [],
    slots: [],
    cssParts: [],
  },
  {
    tagName: 'wa-drawer',
    name: 'Drawer',
    description: 'Drawers slide in from a container to expose additional options and information.',
    category: 'Organization',
    properties: [],
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
    properties: [],
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
    properties: [],
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
    properties: [],
    events: [],
    slots: [],
    cssParts: [],
  },
  {
    tagName: 'wa-format-date',
    name: 'Format Date',
    description: 'Formats a date/time using the specified locale and options.',
    category: 'Utilities',
    properties: [],
    events: [],
    slots: [],
    cssParts: [],
  },
  {
    tagName: 'wa-format-number',
    name: 'Format Number',
    description: 'Formats a number using the specified locale and options.',
    category: 'Utilities',
    properties: [],
    events: [],
    slots: [],
    cssParts: [],
  },
  {
    tagName: 'wa-icon',
    name: 'Icon',
    description: 'Icons are symbols that can be used to represent various options within an application.',
    category: 'Imagery',
    properties: [],
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
    properties: [],
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
    properties: [],
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
    properties: [],
    events: [],
    slots: [],
    cssParts: [],
  },
  {
    tagName: 'wa-mutation-observer',
    name: 'Mutation Observer',
    description: 'The Mutation Observer component offers a thin, declarative interface to the MutationObserver API.',
    category: 'Utilities',
    properties: [],
    events: [],
    slots: [],
    cssParts: [],
  },
  {
    tagName: 'wa-option',
    name: 'Option',
    description: 'Options define the selectable items within various form controls such as select.',
    category: 'Form Controls',
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
    properties: [],
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
    properties: [],
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
    properties: [],
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
    properties: [],
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
    tagName: 'wa-radio-group',
    name: 'Radio Group',
    description: 'Radio groups are used to group multiple radios so they function as a single form control.',
    category: 'Form Controls',
    properties: [],
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
    properties: [],
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
    properties: [],
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
    properties: [],
    events: [],
    slots: [],
    cssParts: [],
  },
  {
    tagName: 'wa-resize-observer',
    name: 'Resize Observer',
    description: 'The Resize Observer component offers a thin, declarative interface to the ResizeObserver API.',
    category: 'Utilities',
    properties: [],
    events: [],
    slots: [],
    cssParts: [],
  },
  {
    tagName: 'wa-scroller',
    name: 'Scroller',
    description: 'Scrollers create an accessible container while providing visual cues that help users identify and navigate through content that scrolls.',
    category: 'Organization',
    properties: [],
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
    properties: [],
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
    properties: [],
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
    properties: [],
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
    properties: [],
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
    properties: [],
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
    properties: [],
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
    tagName: 'wa-tab',
    name: 'Tab',
    description: 'Tabs are used inside tab groups to represent and activate tab panels.',
    category: 'Navigation',
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
    tagName: 'wa-tag',
    name: 'Tag',
    description: 'Tags are used as labels to organize things or to indicate a selection.',
    category: 'Feedback & Status',
    properties: [],
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
    properties: [],
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
    properties: [],
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
    properties: [],
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
    properties: [],
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