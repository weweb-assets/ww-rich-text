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
import { getSettingsConfigurations } from './configuration';

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
        selectedTag: 'p',
        h1: {
            fontSize: wwLib.responsive('32px'),
            fontFamily: wwLib.responsive(''),
            fontWeight: wwLib.responsive(''),
            textAlign: wwLib.responsive(''),
            color: wwLib.responsive(''),
            lineHeight: wwLib.responsive('32px'),
        },
        h2: {
            fontSize: wwLib.responsive('24px'),
            fontFamily: wwLib.responsive(''),
            fontWeight: wwLib.responsive(''),
            textAlign: wwLib.responsive(''),
            color: wwLib.responsive(''),
            lineHeight: wwLib.responsive('32px'),
        },
        h3: {
            fontSize: wwLib.responsive('19px'),
            fontFamily: wwLib.responsive(''),
            fontWeight: wwLib.responsive(''),
            textAlign: wwLib.responsive(''),
            color: wwLib.responsive(''),
            lineHeight: wwLib.responsive('32px'),
        },
        h4: {
            fontSize: wwLib.responsive('16px'),
            fontFamily: wwLib.responsive(''),
            fontWeight: wwLib.responsive(''),
            textAlign: wwLib.responsive(''),
            color: wwLib.responsive(''),
            lineHeight: wwLib.responsive('32px'),
        },
        h5: {
            fontSize: wwLib.responsive('13px'),
            fontFamily: wwLib.responsive(''),
            fontWeight: wwLib.responsive(''),
            textAlign: wwLib.responsive(''),
            color: wwLib.responsive(''),
            lineHeight: wwLib.responsive('32px'),
        },
        h6: {
            fontSize: wwLib.responsive('10px'),
            fontFamily: wwLib.responsive(''),
            fontWeight: wwLib.responsive(''),
            textAlign: wwLib.responsive(''),
            color: wwLib.responsive(''),
            lineHeight: wwLib.responsive('32px'),
        },
        p: {
            fontSize: wwLib.responsive('16px'),
            fontFamily: wwLib.responsive(''),
            fontWeight: wwLib.responsive(''),
            textAlign: wwLib.responsive(''),
            color: wwLib.responsive(''),
            lineHeight: wwLib.responsive('25px'),
        },
        a: {
            fontSize: wwLib.responsive('16px'),
            fontFamily: wwLib.responsive(''),
            color: wwLib.responsive(''),
            isUnderline: true,
        },
        blockquote: {
            color: wwLib.responsive('rgb(153, 153, 153)'),
            borderColor: wwLib.responsive('rgb(223, 226, 229)'),
        },
    },
    data() {
        return {
            converter: new showdown.Converter({ tables: true, openLinksInNewWindow: true, emoji: true }),
        };
    },
    /* wwEditor:start */
    wwEditorConfiguration({ content }) {
        return getSettingsConfigurations(content);
    },
    /* wwEditor:end */
    computed: {
        html() {
            return this.converter.makeHtml(wwLib.wwLang.getText(this.content.text));
        },
        style() {
            return {
                // H1
                '--h1-fontSize': this.content.h1.fontSize,
                '--h1-fontFamily': this.content.h1.fontFamily,
                '--h1-fontWeight': this.content.h1.fontWeight,
                '--h1-textAlign': this.content.h1.textAlign,
                '--h1-color': this.content.h1.color,
                '--h1-lineHeight': this.content.h1.lineHeight,
                // H2
                '--h2-fontSize': this.content.h2.fontSize,
                '--h2-fontFamily': this.content.h2.fontFamily,
                '--h2-fontWeight': this.content.h2.fontWeight,
                '--h2-textAlign': this.content.h2.textAlign,
                '--h2-color': this.content.h2.color,
                '--h2-lineHeight': this.content.h2.lineHeight,
                // H3
                '--h3-fontSize': this.content.h3.fontSize,
                '--h3-fontFamily': this.content.h3.fontFamily,
                '--h3-fontWeight': this.content.h3.fontWeight,
                '--h3-textAlign': this.content.h3.textAlign,
                '--h3-color': this.content.h3.color,
                '--h3-lineHeight': this.content.h3.lineHeight,
                // H4
                '--h4-fontSize': this.content.h4.fontSize,
                '--h4-fontFamily': this.content.h4.fontFamily,
                '--h4-fontWeight': this.content.h4.fontWeight,
                '--h4-textAlign': this.content.h4.textAlign,
                '--h4-color': this.content.h4.color,
                '--h4-lineHeight': this.content.h4.lineHeight,
                // H5
                '--h5-fontSize': this.content.h3.fontSize,
                '--h5-fontFamily': this.content.h3.fontFamily,
                '--h5-fontWeight': this.content.h3.fontWeight,
                '--h5-textAlign': this.content.h3.textAlign,
                '--h5-color': this.content.h3.color,
                '--h5-lineHeight': this.content.h3.lineHeight,
                // H6
                '--h6-fontSize': this.content.h6.fontSize,
                '--h6-fontFamily': this.content.h6.fontFamily,
                '--h6-fontWeight': this.content.h6.fontWeight,
                '--h6-textAlign': this.content.h6.textAlign,
                '--h6-color': this.content.h6.color,
                '--h6-lineHeight': this.content.h6.lineHeight,
                // p
                '--p-fontSize': this.content.p.fontSize,
                '--p-fontFamily': this.content.p.fontFamily,
                '--p-fontWeight': this.content.p.fontWeight,
                '--p-textAlign': this.content.p.textAlign,
                '--p-color': this.content.p.color,
                '--p-lineHeight': this.content.p.lineHeight,
                // a
                '--a-fontSize': this.content.a.fontSize,
                '--a-fontFamily': this.content.a.fontFamily,
                '--a-fontWeight': this.content.a.fontWeight,
                '--a-textAlign': this.content.a.textAlign,
                '--a-color': this.content.a.color,
                '--a-lineHeight': this.content.a.lineHeight,
                '--a-underline': this.content.a.isUnderline ? 'underline' : 'none',
                // blockquote
                '--blockquote-color': this.content.blockquote.color,
                '--blockquote-borderColor': this.content.blockquote.borderColor,
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
    h1 {
        font-size: var(--h1-fontSize);
        font-family: var(--h1-fontFamily);
        font-weight: var(--h1-fontSize);
        text-align: var(--h1-textAlign);
        color: var(--h1-color);
        line-height: var(--h1-lineHeight);
    }
    h2 {
        font-size: var(--h2-fontSize);
        font-family: var(--h2-fontFamily);
        font-weight: var(--h2-fontSize);
        text-align: var(--h2-textAlign);
        color: var(--h2-color);
        line-height: var(--h2-lineHeight);
    }
    h3 {
        font-size: var(--h3-fontSize);
        font-family: var(--h3-fontFamily);
        font-weight: var(--h3-fontSize);
        text-align: var(--h3-textAlign);
        color: var(--h3-color);
        line-height: var(--h3-lineHeight);
    }
    h4 {
        font-size: var(--h4-fontSize);
        font-family: var(--h4-fontFamily);
        font-weight: var(--h4-fontSize);
        text-align: var(--h4-textAlign);
        color: var(--h4-color);
        line-height: var(--h4-lineHeight);
    }
    h5 {
        font-size: var(--h5-fontSize);
        font-family: var(--h5-fontFamily);
        font-weight: var(--h5-fontSize);
        text-align: var(--h5-textAlign);
        color: var(--h5-color);
        line-height: var(--h5-lineHeight);
    }
    h6 {
        font-size: var(--h6-fontSize);
        font-family: var(--h6-fontFamily);
        font-weight: var(--h6-fontSize);
        text-align: var(--h6-textAlign);
        color: var(--h6-color);
        line-height: var(--h6-lineHeight);
    }
    p {
        font-size: var(--p-fontSize);
        font-family: var(--p-fontFamily);
        font-weight: var(--p-fontSize);
        text-align: var(--p-textAlign);
        color: var(--p-color);
        line-height: var(--p-lineHeight);
    }
    a {
        display: initial;
        text-decoration: var(--a-underline);
        font-size: var(--a-fontSize);
        font-family: var(--a-fontFamily);
        font-weight: var(--a-fontSize);
        text-align: var(--a-textAlign);
        color: var(--a-color);
        line-height: var(--a-lineHeight);
    }
    font-size: var(--p-fontSize);
    font-family: var(--p-fontFamily);
    font-weight: var(--p-fontSize);
    text-align: var(--p-textAlign);
    color: var(--p-color);
    line-height: var(--p-lineHeight);

    table {
        width: 100%;
        display: table;
        border-collapse: collapse;
        box-sizing: border-box;
        text-indent: initial;
        border-spacing: 2px;
        border-color: grey;

        tr {
            border-top: 1px solid #dfe2e5;
        }
        td,
        th {
            border: 1px solid #dfe2e5;
            padding: 0.6em 1em;
        }
    }
    blockquote {
        color: var(--blockquote-color);
        border-left: 0.2rem solid var(--blockquote-borderColor);
        margin: 1rem 0;
        padding: 0.25rem 0 0.25rem 1rem;
    }
    img,
    video,
    iframe {
        max-width: 100%;
        width: 100%;
        margin: 24px auto;
    }
}
</style>
