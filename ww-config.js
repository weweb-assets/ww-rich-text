const textOptions = {
    fontSize: {
        type: 'Length',
        label: {
            en: 'Size',
            fr: 'Taille',
        },
        options: {
            unitChoices: [{ value: 'px', label: 'px', min: 1, max: 100 }],
        },
        responsive: true,
    },
    fontFamily: {
        type: 'FontFamily',
        label: {
            en: 'Font family',
            fr: 'Font',
        },
        responsive: true,
    },
    fontWeight: {
        label: {
            en: 'Font weight',
            fr: 'Graisse',
        },
        type: 'TextSelect',
        options: {
            options: [
                { value: null, label: { en: 'Default', fr: 'Par défaut' } },
                { value: 100, label: { en: '100 - Thin' } },
                { value: 200, label: { en: '200 - Extra Light' } },
                { value: 300, label: { en: '300 - Light' } },
                { value: 400, label: { en: '400 - Normal' } },
                { value: 500, label: { en: '500 - Medium' } },
                { value: 600, label: { en: '600 - Semi Bold' } },
                { value: 700, label: { en: '700 - Bold' } },
                { value: 800, label: { en: '800 - Extra Bold' } },
                { value: 900, label: { en: '900 - Black' } },
            ],
        },
        responsive: true,
    },
    textAlign: {
        type: 'TextRadioGroup',
        options: {
            choices: [
                {
                    value: 'left',
                    default: true,
                    title: { en: 'Left', fr: 'Gauche' },
                    icon: 'text-align-left',
                },
                {
                    value: 'center',
                    title: { en: 'Center', fr: 'Milieu' },
                    icon: 'text-align-center',
                },
                {
                    value: 'right',
                    title: { en: 'Right', fr: 'Droite' },
                    icon: 'text-align-right',
                },
                {
                    value: 'justify',
                    title: { en: 'Justify', fr: 'Justifié' },
                    icon: 'text-align-justify',
                },
            ],
        },
        label: {
            en: 'Alignement',
            fr: 'Alignement',
        },
        responsive: true,
        bindable: true,
    },
    color: {
        type: 'Color',
        label: {
            en: 'Text color',
            fr: 'Couleur du texte',
        },
        responsive: true,
        bindable: true,
        options: {
            nullable: true,
        },
    },
    lineHeight: {
        label: {
            en: 'Line height',
            fr: 'Hauteur de ligne',
        },
        responsive: true,
        type: 'Length',
        options: {
            unitChoices: [{ value: 'px', label: 'px', min: 0, max: 100 }],
        },
        bindable: true,
    },
    marginTop: {
        type: 'Length',
        responsive: true,
        label: {
            en: 'Margin top',
            fr: 'Margin top',
        },
        options: {
            unitChoices: [{ value: 'px', label: 'px', min: 1, max: 100 }],
        },
        bindable: true,
    },
    marginBottom: {
        type: 'Length',
        responsive: true,
        label: {
            en: 'Margin bottom',
            fr: 'Margin bottom',
        },
        options: {
            unitChoices: [{ value: 'px', label: 'px', min: 1, max: 100 }],
        },
        bindable: true,
    },
};

export default {
    editor: {
        label: {
            en: 'Rich text',
            fr: 'Rich texte',
        },
        icon: 'text-align-left',
    },
    properties: {
        selectedTag: {
            label: {
                en: 'Tag to edit',
                fr: 'Tag à éditer',
            },
            type: 'TextSelect',
            editorOnly: true,
            options: {
                options: [
                    { value: 'h1', label: { en: 'h1' } },
                    { value: 'h2', label: { en: 'h2' } },
                    { value: 'h3', label: { en: 'h3' } },
                    { value: 'h4', label: { en: 'h4' } },
                    { value: 'p', label: { en: 'p' } },
                    { value: 'a', label: { en: 'a' } },
                    { value: 'blockquote', label: { en: 'blockquote' } },
                    { value: 'img', label: { en: 'image' } },
                    { value: 'iframe', label: { en: 'iframe & video' } },
                ],
            },
            defaultValue: 'p',
        },
        text: {
            type: 'Textarea',
            section: 'settings',
            label: {
                en: 'Content',
                fr: 'Contenu',
            },
            bindable: true,
            multiLang: true,
            options: {
                row: 20,
            },
            defaultValue: {
                en: '',
            },
        },
        h1: {
            type: 'Object',
            hidden: (content, sidepanelContent) => {
                return sidepanelContent.selectedTag !== 'h1';
            },
            options: {
                item: textOptions,
            },
            defaultValue: {
                fontSize: '32px',
                fontFamily: '',
                fontWeight: '',
                textAlign: '',
                color: '',
                lineHeight: '',
                marginTop: '',
                marginBottom: '',
            },
        },
        h2: {
            type: 'Object',
            hidden: (content, sidepanelContent) => {
                return sidepanelContent.selectedTag !== 'h2';
            },
            options: {
                item: textOptions,
            },
            defaultValue: {
                fontSize: '24px',
                fontFamily: '',
                fontWeight: '',
                textAlign: '',
                color: '',
                lineHeight: '',
                marginTop: '',
                marginBottom: '',
            },
        },
        h3: {
            type: 'Object',
            hidden: (content, sidepanelContent) => {
                return sidepanelContent.selectedTag !== 'h3';
            },
            options: {
                item: textOptions,
            },
            defaultValue: {
                fontSize: '19px',
                fontFamily: '',
                fontWeight: '',
                textAlign: '',
                color: '',
                lineHeight: '',
                marginTop: '',
                marginBottom: '',
            },
        },
        h4: {
            type: 'Object',
            hidden: (content, sidepanelContent) => {
                return sidepanelContent.selectedTag !== 'h4';
            },
            options: {
                item: textOptions,
            },
            defaultValue: {
                fontSize: '16px',
                fontFamily: '',
                fontWeight: '',
                textAlign: '',
                color: '',
                lineHeight: '',
                marginTop: '',
                marginBottom: '',
            },
        },
        p: {
            type: 'Object',
            hidden: (content, sidepanelContent) => {
                return sidepanelContent.selectedTag !== 'p';
            },
            options: {
                item: textOptions,
            },
            defaultValue: {
                fontSize: '16px',
                fontFamily: '',
                fontWeight: '',
                textAlign: '',
                color: '',
                lineHeight: '',
                marginTop: '',
                marginBottom: '',
            },
        },
        a: {
            type: 'Object',
            hidden: (content, sidepanelContent) => {
                return sidepanelContent.selectedTag !== 'a';
            },
            options: {
                item: {
                    fontSize: {
                        type: 'Length',
                        label: {
                            en: 'Size',
                            fr: 'Taille',
                        },
                        options: {
                            unitChoices: [{ value: 'px', label: 'px', min: 1, max: 100 }],
                        },
                        bindable: true,
                        responsive: true,
                    },
                    fontFamily: {
                        type: 'FontFamily',
                        label: {
                            en: 'Font family',
                            fr: 'Font',
                        },
                        bindable: true,
                        responsive: true,
                    },
                    color: {
                        type: 'Color',
                        label: {
                            en: 'Text color',
                            fr: 'Couleur du texte',
                        },
                        bindable: true,
                        options: {
                            nullable: true,
                        },
                        responsive: true,
                    },
                    isUnderline: {
                        type: 'OnOff',
                        label: {
                            en: 'Underline',
                            fr: 'Soulingé',
                        },
                        bindable: true,
                    },
                },
            },
            defaultValue: {
                fontSize: '16px',
                fontFamily: '',
                color: '',
                isUnderline: true,
            },
        },
        blockquote: {
            type: 'Object',
            hidden: (content, sidepanelContent) => {
                return sidepanelContent.selectedTag !== 'blockquote';
            },
            options: {
                item: {
                    color: {
                        type: 'Color',
                        label: {
                            en: 'Text color',
                            fr: 'Couleur du texte',
                        },
                        bindable: true,
                        options: {
                            nullable: true,
                        },
                        responsive: true,
                    },
                    borderColor: {
                        type: 'Color',
                        label: {
                            en: 'Blockquote color',
                            fr: 'Couleur de la bordure',
                        },
                        bindable: true,
                        options: {
                            nullable: true,
                        },
                        responsive: true,
                    },
                    marginTop: {
                        type: 'Length',
                        label: {
                            en: 'Margin top',
                            fr: 'Margin top',
                        },
                        bindable: true,
                        options: {
                            unitChoices: [{ value: 'px', label: 'px', min: 1, max: 100 }],
                        },
                        responsive: true,
                    },
                    marginBottom: {
                        type: 'Length',
                        label: {
                            en: 'Margin bottom',
                            fr: 'Margin bottom',
                        },
                        bindable: true,
                        options: {
                            unitChoices: [{ value: 'px', label: 'px', min: 1, max: 100 }],
                        },
                        responsive: true,
                    },
                },
            },
            defaultValue: {
                color: 'rgb(153, 153, 153)',
                borderColor: 'rgb(223, 226, 229)',
                marginTop: '6px',
                marginBottom: '6px',
            },
        },
        img: {
            type: 'Object',
            hidden: (content, sidepanelContent) => {
                return sidepanelContent.selectedTag !== 'img';
            },
            options: {
                item: {
                    width: {
                        type: 'Length',
                        label: {
                            en: 'Size',
                            fr: 'Taille',
                        },
                        options: {
                            unitChoices: [
                                { value: '%', label: '%', min: 1, max: 100 },
                                { value: 'px', label: 'px', min: 1 },
                            ],
                        },
                        bindable: true,
                        responsive: true,
                    },
                    zoomEffect: {
                        type: 'OnOff',
                        label: {
                            en: 'Lightbox on click',
                            fr: 'Lightbox au click',
                        },
                        bindable: true,
                        responsive: true,
                    },
                    marginTop: {
                        type: 'Length',
                        label: {
                            en: 'Margin top',
                            fr: 'Margin top',
                        },
                        bindable: true,
                        options: {
                            unitChoices: [{ value: 'px', label: 'px', min: 1, max: 100 }],
                        },
                        responsive: true,
                    },
                    marginBottom: {
                        type: 'Length',
                        label: {
                            en: 'Margin bottom',
                            fr: 'Margin bottom',
                        },
                        bindable: true,
                        options: {
                            unitChoices: [{ value: 'px', label: 'px', min: 1, max: 100 }],
                        },
                        responsive: true,
                    },
                },
            },
            defaultValue: {
                width: '100%',
                zoomEffect: false,
                marginTop: '6px',
                marginBottom: '6px',
            },
        },
        zoomMargin: {
            type: 'Length',
            hidden: content => {
                return !(content.img && content.img.zoomEffect);
            },
            label: {
                en: 'Lightbox spacing',
                fr: 'Lightbox spacing',
            },
            options: {
                unitChoices: [{ value: 'px', label: 'px', min: 0, max: 200 }],
            },
            defaultValue: '24px',
        },
        zoomBackgroundColor: {
            type: 'Color',
            hidden: content => {
                return !(content.img && content.img.zoomEffect);
            },
            label: {
                en: 'Lightbox background color',
                fr: 'Lightbox background color',
            },
            defaultValue: 'rgba(0, 0, 0, 0.6)',
        },
        iframe: {
            type: 'Object',
            hidden: (content, sidepanelContent) => {
                return sidepanelContent.selectedTag !== 'iframe';
            },
            options: {
                item: {
                    width: {
                        type: 'Length',
                        label: {
                            en: 'Size',
                            fr: 'Taille',
                        },
                        options: {
                            unitChoices: [
                                { value: '%', label: '%', min: 1, max: 100 },
                                { value: 'px', label: 'px', min: 1 },
                            ],
                        },
                        bindable: true,
                        responsive: true,
                    },
                    marginTop: {
                        type: 'Length',
                        label: {
                            en: 'Margin top',
                            fr: 'Margin top',
                        },
                        bindable: true,
                        options: {
                            unitChoices: [{ value: 'px', label: 'px', min: 1, max: 100 }],
                        },
                        responsive: true,
                    },
                    marginBottom: {
                        type: 'Length',
                        label: {
                            en: 'Margin bottom',
                            fr: 'Margin bottom',
                        },
                        bindable: true,
                        options: {
                            unitChoices: [{ value: 'px', label: 'px', min: 1, max: 100 }],
                        },
                        responsive: true,
                    },
                },
            },
            defaultValue: {
                width: '100%',
                marginTop: '6px',
                marginBottom: '6px',
            },
        },
    },
};