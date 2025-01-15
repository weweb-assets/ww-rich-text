---
name: ww-rich-text
description: The ww-rich-text component renders rich text content with customizable styles for various HTML elements, supports markdown and HTML input, and offers a lightbox effect for images, ensuring versatile and visually appealing text presentation.
keywords:
  - rich text rendering
  - customizable styles
  - markdown support
  - html input
  - multi-language support
  - lightbox effect
  - image zoom
  - styling options
  - iframe styling
  - web component
---

#### ww-rich-text

Renders rich text content with customizable styles for various HTML elements such as headings, paragraphs, links, blockquotes, images, and iframes. Supports markdown and HTML input, and provides options to enable a lightbox effect for images.

Properties:
- text: { [lang]: string } | string - Content to be rendered as rich text. Default: { en: '' }
- h1: object - Styling options for h1 elements
- h2: object - Styling options for h2 elements
- h3: object - Styling options for h3 elements
- h4: object - Styling options for h4 elements
- p: object - Styling options for p elements
- a: object - Styling options for a elements
- blockquote: object - Styling options for blockquote elements
- img: object - Styling and behavior options for img elements
- zoomMargin: string - Margin around lightbox image. Default: "24px"
- zoomBackgroundColor: string - Background color for lightbox. Default: "rgba(0, 0, 0, 0.6)"
- iframe: object - Styling options for iframe elements. Default: {"width":"100%","height":"400px","marginTop":"6px","marginBottom":"6px"}

Children: none

Events: none

Variables: none
