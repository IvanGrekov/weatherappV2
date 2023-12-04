import { extendTheme } from 'native-base';

const SECONDARY_COLOR = '#164863';

const COLORS = {
    primary: {
        900: '#a0e3f2',
    },
    primaryOpacity: {
        900: 'rgba(160, 227, 242, 0.7)',
    },
    secondary: {
        900: SECONDARY_COLOR,
    },
    secondaryOpacity: {
        900: 'rgba(22, 72, 99, 0.7)',
    },
    secondaryInvisible: {
        900: 'rgba(22, 72, 99, 0.2)',
    },
    redOpacity: {
        900: 'rgba(244, 80, 80, 0.7)',
    },
    info: {
        900: '#49a5fc',
    },
    white: {
        900: '#fafafa',
    },
    text: {
        900: SECONDARY_COLOR,
        800: SECONDARY_COLOR,
        700: SECONDARY_COLOR,
        600: SECONDARY_COLOR,
        500: SECONDARY_COLOR,
        400: SECONDARY_COLOR,
        300: SECONDARY_COLOR,
        200: SECONDARY_COLOR,
        100: SECONDARY_COLOR,
        50: SECONDARY_COLOR,
    },
};

const FONT_SIZES = {
    '2xs': 10,
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48,
    '6xl': 60,
    '7xl': 72,
    '8xl': 96,
    '9xl': 128,
};

const SIZE = {
    0: 0,
    '0.5': 2,
    1: 4,
    '1.5': 6,
    2: 8,
    '2.5': 10,
    3: 12,
    '3.5': 14,
    4: 16,
    '4.5': 18,
    5: 20,
    6: 24,
    7: 28,
    8: 32,
    9: 36,
    10: 40,
    12: 48,
    16: 64,
    20: 80,
    24: 96,
    32: 128,
    40: 160,
    48: 192,
    56: 224,
    64: 256,
    72: 288,
    80: 320,
    96: 384,
    px: 1,
    '1/2': '50%',
    '1/3': '33.333%',
    '2/3': '66.666%',
    '1/4': '25%',
    '3/4': '75%',
    '1/5': '20%',
    '2/5': '40%',
    '3/5': '60%',
    '4/5': '80%',
    '1/6': '16.666%',
    '5/6': '83.333%',
    full: '100%',
};

export const THEME = extendTheme({
    colors: COLORS,
    fontSizes: FONT_SIZES,
    size: SIZE,
    components: {
        Button: {
            variants: {
                solid: {
                    bg: COLORS.primary[900],
                    borderRadius: SIZE['2'],
                    _pressed: {
                        bg: COLORS.primaryOpacity[900],
                    },
                    _text: {
                        color: COLORS.secondary[900],
                    },
                },
            },
        },
    },
});

export const STYLE_VARIABLES = {
    bgColor: COLORS.primary[900],
    bgOpacity: COLORS.primaryOpacity[900],
    fgColor: COLORS.secondary[900],
    fgOpacity: COLORS.secondaryOpacity[900],
    fgInvisible: COLORS.secondaryInvisible[900],

    red: THEME.colors.rose[600],
    redOpacity: COLORS.redOpacity[900],
    gray: THEME.colors.gray[300],
    grayOpacity: THEME.colors.gray[400],
    white: THEME.colors.white[900],
    black: THEME.colors.gray[900],
    blackOpacity: 'rgba(0, 0, 0, 0.3)',
    blackInvisible: 'rgba(0, 0, 0, 0.1)',
    blue: THEME.colors.info[900],

    mdPadding: SIZE['4.5'],
    smPadding: SIZE['3.5'],
    xsPadding: SIZE['2'],
    xxsPadding: SIZE['0.5'],

    mdRadius: SIZE['5'],
    smRadius: SIZE['3.5'],
    xsRadius: SIZE['2.5'],

    coinImgSize: SIZE['10'],
    imgSize: SIZE['20'],

    xlSpacing: SIZE['4'],
    lgSpacing: SIZE['2'],
    mdSpacing: SIZE['1'],
    smSpacing: SIZE['0.5'],
    xsSpacing: SIZE.px,

    xsFontSize: FONT_SIZES.xs,
    smFontSize: FONT_SIZES.md,
    mdFontSize: FONT_SIZES.lg,
    lgFontSize: FONT_SIZES.xl,
    xlFontSize: FONT_SIZES['3xl'],
    xxlFontSize: FONT_SIZES['5xl'],
};
