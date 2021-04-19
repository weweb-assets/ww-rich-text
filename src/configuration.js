const H1 = {
    fontSize: {
        type: 'Length',
        label: {
            en: 'Size',
            fr: 'Taille',
        },
        options: {
            unitChoices: [{ value: 'px', label: 'px', min: 1, max: 100 }],
        },
        path: 'h1.fontSize',
    },
    fontFamily: {
        type: 'FontFamily',
        label: {
            en: 'Font family',
            fr: 'Font',
        },
        path: 'h1.fontFamily',
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
        path: 'h1.fontWeight',
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
        path: 'h1.textAlign',
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
        path: 'h1.color',
    },
    lineHeight: {
        label: {
            en: 'Line height',
            fr: 'Hauteur de ligne',
        },
        type: 'Length',
        options: {
            unitChoices: [{ value: 'px', label: 'px', min: 0, max: 100 }],
        },
        path: 'h1.lineHeight',
    },
    marginTop: {
        type: 'Length',
        label: {
            en: 'Margin top',
            fr: 'Margin top',
        },
        options: {
            unitChoices: [{ value: 'px', label: 'px', min: 1, max: 100 }],
        },
        path: 'h1.marginTop',
    },
    marginBottom: {
        type: 'Length',
        label: {
            en: 'Margin bottom',
            fr: 'Margin bottom',
        },
        options: {
            unitChoices: [{ value: 'px', label: 'px', min: 1, max: 100 }],
        },
        path: 'h1.marginBottom',
    },
};

const H2 = {
    fontSize: {
        type: 'Length',
        label: {
            en: 'Size',
            fr: 'Taille',
        },
        options: {
            unitChoices: [{ value: 'px', label: 'px', min: 1, max: 100 }],
        },
        path: 'h2.fontSize',
    },
    fontFamily: {
        type: 'FontFamily',
        label: {
            en: 'Font family',
            fr: 'Font',
        },
        path: 'h2.fontFamily',
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
        path: 'h2.fontWeight',
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
        path: 'h2.textAlign',
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
        path: 'h2.color',
    },
    lineHeight: {
        label: {
            en: 'Line height',
            fr: 'Hauteur de ligne',
        },
        type: 'Length',
        options: {
            unitChoices: [{ value: 'px', label: 'px', min: 0, max: 100 }],
        },
        path: 'h2.lineHeight',
    },
    marginTop: {
        type: 'Length',
        label: {
            en: 'Margin top',
            fr: 'Margin top',
        },
        options: {
            unitChoices: [{ value: 'px', label: 'px', min: 1, max: 100 }],
        },
        path: 'h2.marginTop',
    },
    marginBottom: {
        type: 'Length',
        label: {
            en: 'Margin bottom',
            fr: 'Margin bottom',
        },
        options: {
            unitChoices: [{ value: 'px', label: 'px', min: 1, max: 100 }],
        },
        path: 'h2.marginBottom',
    },
};

const H3 = {
    fontSize: {
        type: 'Length',
        label: {
            en: 'Size',
            fr: 'Taille',
        },
        options: {
            unitChoices: [{ value: 'px', label: 'px', min: 1, max: 100 }],
        },
        path: 'h3.fontSize',
    },
    fontFamily: {
        type: 'FontFamily',
        label: {
            en: 'Font family',
            fr: 'Font',
        },
        path: 'h3.fontFamily',
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
        path: 'h3.fontWeight',
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
        path: 'h3.textAlign',
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
        path: 'h3.color',
    },
    lineHeight: {
        label: {
            en: 'Line height',
            fr: 'Hauteur de ligne',
        },
        type: 'Length',
        options: {
            unitChoices: [{ value: 'px', label: 'px', min: 0, max: 100 }],
        },
        path: 'h3.lineHeight',
    },
    marginTop: {
        type: 'Length',
        label: {
            en: 'Margin top',
            fr: 'Margin top',
        },
        options: {
            unitChoices: [{ value: 'px', label: 'px', min: 1, max: 100 }],
        },
        path: 'h3.marginTop',
    },
    marginBottom: {
        type: 'Length',
        label: {
            en: 'Margin bottom',
            fr: 'Margin bottom',
        },
        options: {
            unitChoices: [{ value: 'px', label: 'px', min: 1, max: 100 }],
        },
        path: 'h3.marginBottom',
    },
};

const H4 = {
    fontSize: {
        type: 'Length',
        label: {
            en: 'Size',
            fr: 'Taille',
        },
        options: {
            unitChoices: [{ value: 'px', label: 'px', min: 1, max: 100 }],
        },
        path: 'h4.fontSize',
    },
    fontFamily: {
        type: 'FontFamily',
        label: {
            en: 'Font family',
            fr: 'Font',
        },
        path: 'h4.fontFamily',
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
        path: 'h4.fontWeight',
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
        path: 'h4.textAlign',
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
        path: 'h4.color',
    },
    lineHeight: {
        label: {
            en: 'Line height',
            fr: 'Hauteur de ligne',
        },
        type: 'Length',
        options: {
            unitChoices: [{ value: 'px', label: 'px', min: 0, max: 100 }],
        },
        path: 'h4.lineHeight',
    },
    marginTop: {
        type: 'Length',
        label: {
            en: 'Margin top',
            fr: 'Margin top',
        },
        options: {
            unitChoices: [{ value: 'px', label: 'px', min: 1, max: 100 }],
        },
        path: 'h4.marginTop',
    },
    marginBottom: {
        type: 'Length',
        label: {
            en: 'Margin bottom',
            fr: 'Margin bottom',
        },
        options: {
            unitChoices: [{ value: 'px', label: 'px', min: 1, max: 100 }],
        },
        path: 'h4.marginBottom',
    },
};

const P = {
    fontSize: {
        type: 'Length',
        label: {
            en: 'Size',
            fr: 'Taille',
        },
        options: {
            unitChoices: [{ value: 'px', label: 'px', min: 1, max: 100 }],
        },
        path: 'p.fontSize',
    },
    fontFamily: {
        type: 'FontFamily',
        label: {
            en: 'Font family',
            fr: 'Font',
        },
        path: 'p.fontFamily',
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
        path: 'p.textAlign',
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
        path: 'p.color',
    },
    lineHeight: {
        label: {
            en: 'Line height',
            fr: 'Hauteur de ligne',
        },
        type: 'Length',
        options: {
            unitChoices: [{ value: 'px', label: 'px', min: 0, max: 100 }],
        },
        path: 'p.lineHeight',
    },
    marginTop: {
        type: 'Length',
        label: {
            en: 'Margin top',
            fr: 'Margin top',
        },
        options: {
            unitChoices: [{ value: 'px', label: 'px', min: 1, max: 100 }],
        },
        path: 'p.marginTop',
    },
    marginBottom: {
        type: 'Length',
        label: {
            en: 'Margin bottom',
            fr: 'Margin bottom',
        },
        options: {
            unitChoices: [{ value: 'px', label: 'px', min: 1, max: 100 }],
        },
        path: 'p.marginBottom',
    },
};

const A = {
    fontSize: {
        type: 'Length',
        label: {
            en: 'Size',
            fr: 'Taille',
        },
        options: {
            unitChoices: [{ value: 'px', label: 'px', min: 1, max: 100 }],
        },
        path: 'a.fontSize',
    },
    fontFamily: {
        type: 'FontFamily',
        label: {
            en: 'Font family',
            fr: 'Font',
        },
        path: 'a.fontFamily',
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
        path: 'a.color',
    },
    isUnderline: {
        type: 'OnOff',
        label: {
            en: 'Underline',
            fr: 'Soulingé',
        },
        path: 'a.isUnderline',
    },
};

const BLOCKQUOTE = {
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
        path: 'blockquote.color',
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
        path: 'blockquote.borderColor',
    },
    marginTop: {
        type: 'Length',
        label: {
            en: 'Margin top',
            fr: 'Margin top',
        },
        options: {
            unitChoices: [{ value: 'px', label: 'px', min: 1, max: 100 }],
        },
        path: 'blockquote.marginTop',
    },
    marginBottom: {
        type: 'Length',
        label: {
            en: 'Margin bottom',
            fr: 'Margin bottom',
        },
        options: {
            unitChoices: [{ value: 'px', label: 'px', min: 1, max: 100 }],
        },
        path: 'blockquote.marginBottom',
    },
};

const IMG = {
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
        path: 'img.width',
    },
    zoomEffect: {
        type: 'OnOff',
        label: {
            en: 'Lightbox on click',
            fr: 'Lightbox au click',
        },
        path: 'zoomEffect',
    },
    marginTop: {
        type: 'Length',
        label: {
            en: 'Margin top',
            fr: 'Margin top',
        },
        options: {
            unitChoices: [{ value: 'px', label: 'px', min: 1, max: 100 }],
        },
        path: 'img.marginTop',
    },
    marginBottom: {
        type: 'Length',
        label: {
            en: 'Margin bottom',
            fr: 'Margin bottom',
        },
        options: {
            unitChoices: [{ value: 'px', label: 'px', min: 1, max: 100 }],
        },
        path: 'img.marginBottom',
    },
};

const IMG_ZOOM_EFFECT = {
    zoomMargin: {
        type: 'Length',
        label: {
            en: 'Lightbox spacing',
            fr: 'Lightbox spacing',
        },
        options: {
            unitChoices: [{ value: 'px', label: 'px', min: 0, max: 200 }],
        },
        path: 'zoomMargin',
    },
    zoomBackgroundColor: {
        type: 'Color',
        label: {
            en: 'Lightbox background color',
            fr: 'Lightbox background color',
        },
        path: 'zoomBackgroundColor',
    },
};

const IFRAME = {
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
        path: 'iframe.width',
    },
    marginTop: {
        type: 'Length',
        label: {
            en: 'Margin top',
            fr: 'Margin top',
        },
        options: {
            unitChoices: [{ value: 'px', label: 'px', min: 1, max: 100 }],
        },
        path: 'iframe.marginTop',
    },
    marginBottom: {
        type: 'Length',
        label: {
            en: 'Margin bottom',
            fr: 'Margin bottom',
        },
        options: {
            unitChoices: [{ value: 'px', label: 'px', min: 1, max: 100 }],
        },
        path: 'iframe.marginBottom',
    },
};

export const getSettingsConfigurations = content => {
    const IMG_OPTIONS = content.zoomEffect ? { ...IMG, ...IMG_ZOOM_EFFECT } : { ...IMG };

    switch (content.selectedTag) {
        case 'h1':
            return { styleOptions: { ...H1 } };
        case 'h2':
            return { styleOptions: { ...H2 } };
        case 'h3':
            return { styleOptions: { ...H3 } };
        case 'h4':
            return { styleOptions: { ...H4 } };
        case 'p':
            return { styleOptions: { ...P } };
        case 'a':
            return { styleOptions: { ...A } };
        case 'blockquote':
            return { styleOptions: { ...BLOCKQUOTE } };
        case 'img':
            return { styleOptions: { ...IMG_OPTIONS } };
        case 'iframe':
            return { styleOptions: { ...IFRAME } };

        default:
            return { styleOptions: { ...P } };
    }
};
