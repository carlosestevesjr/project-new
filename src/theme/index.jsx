
//link gerar paleta de cores http://mcg.mbitson.com/#!?primary=%23344955&secundary=%23f9aa33&themename=procob

//Primary
export const primary50 = '#ede5ef';
export const primary100 = '#d2bed7';
export const primary200 = '#b593bd'; //Primary Variant Light
export const primary300 = '#9768a3';
export const primary400 = '#80478f';
export const primary500 = '#6a277b'; //Cor Base Da Aplicação
export const primary600 = '#622373';
export const primary700 = '#571d68'; //Variant Dark
export const primary800 = '#4d175e';
export const primary900 = '#3c0e4b';
export const primaryA100 = '#dd83ff';
export const primaryA200 = '#ce50ff';
export const primaryA400 = '#c01dff';
export const primaryA700 = '#b903ff';

//Secundary
export const secundary50 = '#ebfdf7';
export const secundary100 = '#ccfbea';
export const secundary200 = '#aaf9dd'; //Cor Secundária
export const secundary300 = '#88f6cf';
export const secundary400 = '#6ff4c4';
export const secundary500 = '#55f2ba';
export const secundary600 = '#4ef0b3';
export const secundary700 = '#44eeab';
export const secundary800 = '#3beca3';
export const secundary900 = '#2ae894';
export const secundaryA100 = '#ffffff';
export const secundaryA200 = '#f4fffa';
export const secundaryA400 = '#c1ffe2';
export const secundaryA700 = '#a7ffd6';

//Alerts
export const textSuccess = '#155724';
export const textDanger = '#721c24';
export const textWarning = '#856404';
export const textInfo = '#0c5460';

export const bgSuccess = '#d4edda';
export const bgDanger = '#f8d7da';
export const bgWarning = '#fff3cd';
export const bgInfo = '#d1ecf1';

//Divider
export const divider = primary50;

//Sizes
export const extraSmall = 13;
export const small = 19;
export const medium = 25;
export const large = 31;
export const extraLarge = 37;

//Text
export const light = '#FFFFFF';
export const dark = '#000000';

//Background
export const background = '#f3f3f3';

//Surface( Superfice - Box Cards )
export const surface = '#FFFFFF';

//Gradient
export const gradientStart = '#fff';
export const gradientEnd = '#dddddd';

export default theme = {
    colors: {
        primary: primary500,
        secundary: secundary200,
        light,
        dark,
        success:textSuccess,
        error:textDanger,
        divider,
        platform: {
            ios: {
               
            },
            android: {
                // Same as ios
            },
            web: {
                // Same as ios
            },
        },
    },
    sizes: {
        extraSmall,
        small,
        medium,
        large,
        extraLarge,
    },
    fonts: {
        web: {
            regular: {
                fontFamily: 'sans-serif',
                fontWeight: 'normal',
            },
            medium: {
                fontFamily: 'sans-serif-medium',
                fontWeight: 'normal',
            },
            light: {
                fontFamily: 'sans-serif-light',
                fontWeight: 'normal',
            },
            thin: {
                fontFamily: 'sans-serif-thin',
                fontWeight: 'normal',
            },
        },
        ios: {
            regular: {
                fontFamily: 'sans-serif',
                fontWeight: 'normal',
            },
            medium: {
                fontFamily: 'sans-serif-medium',
                fontWeight: 'normal',
            },
            light: {
                fontFamily: 'sans-serif-light',
                fontWeight: 'normal',
            },
            thin: {
                fontFamily: 'sans-serif-thin',
                fontWeight: 'normal',
            },
        },
        android: {
            regular: {
                fontFamily: 'sans-serif',
                fontWeight: 'normal',
            },
            medium: {
                fontFamily: 'sans-serif-medium',
                fontWeight: 'normal',
            },
            light: {
                fontFamily: 'sans-serif-light',
                fontWeight: 'normal',
            },
            thin: {
                fontFamily: 'sans-serif-thin',
                fontWeight: 'normal',
            },
        }
    }
}

