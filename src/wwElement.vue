<template>
    <div class="ww-rich-text-temp">
        <div v-if="html.length" class="ww-rich-text-temp" v-html="html" :style="style"></div>
        <!-- wwEditor:start -->
        <div v-else class="ww-rich-text-temp__placeholder caption-m">
            Enter markdown or html in the sidebar to preview the result.
        </div>
        <!-- wwEditor:end -->
    </div>
</template>

<script>
import showdown from 'showdown';

export default {
    name: '__COMPONENT_NAME__',
    props: {
        content: Object,
        /* wwEditor:start */
        wwEditorState: Object,
        /* wwEditor:end */
    },
    wwDefaultContent: {
        text: {
            en: '',
        },
        fontSize: wwLib.responsive('16px'),
        fontFamily: wwLib.responsive(''),
        textAlign: wwLib.responsive(''),
        color: wwLib.responsive(''),
        lineHeight: wwLib.responsive(''),
    },
    data() {
        return {
            converter: new showdown.Converter(),
        };
    },
    computed: {
        html() {
            return this.converter.makeHtml(wwLib.wwLang.getText(this.content.text));
        },
        style() {
            return {
                fontSize: this.content.fontSize,
                fontFamily: this.content.fontFamily,
                textAlign: this.content.textAlign,
                color: this.content.color,
                lineHeight: this.content.lineHeight,
            };
        },
    },
};
</script>

<style lang="scss" scoped>
.ww-rich-text-temp {
    /* wwEditor:start */
    min-height: 50px;
    &__placeholder {
        background-color: var(--ww-color-dark-300);
        padding: var(--ww-spacing-05);
    }
    /* wwEditor:end */
}
</style>

<style lang="scss">
.ww-rich-text-temp {
    a {
        display: initial;
        color: rgb(0, 125, 255);
        text-decoration: underline;
    }
    img,
    video,
    iframe {
        max-width: 100%;
        width: 100%;
        margin: 0 auto;
    }
}
</style>