
//link gerar paleta de cores http://mcg.mbitson.com/#!?primary=%23344955&secundary=%23f9aa33&themename=procob

//Primary
export const primary50 = '#e7e9eb';
export const primary100 = '#c2c8cc';
export const primary200 = '#9aa4aa';
export const primary300 = '#718088';
export const primary400 = '#52646f';
export const primary500 = '#344955'; //Cor Base Da Aplicação
export const primary600 = '#2f424e';
export const primary700 = '#273944';
export const primary800 = '#21313b';
export const primary900 = '#15212a';
export const primaryA100 = '#6dbeff';
export const primaryA200 = '#3aa7ff';
export const primaryA400 = '#0791ff';
export const primaryA700 = '#0083ec';

//Secundary
export const secundary50 = '#fef5e7';
export const secundary100 = '#fde6c2';
export const secundary200 = '#fcd599'; //Cor Secundária
export const secundary300 = '#fbc470';
export const secundary400 = '#fab752';
export const secundary500 = '#f9aa33';
export const secundary600 = '#f8a32e';
export const secundary700 = '#f79927';
export const secundary800 = '#f69020';
export const secundary900 = '#f57f14';
export const secundaryA100 = '#ffffff';
export const secundaryA200 = '#fff7f1';
export const secundaryA400 = '#ffdabe';
export const secundaryA700 = '#ffcca4';

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
export const extraSmall = 15;
export const small = 22;
export const medium = 28;
export const large = 34;
export const extraLarge = 40;

//Text
export const light = '#FFFFFF';
export const dark = '#000000';

//Background
export const background = '#F5F5F6';

//Surface( Superfice - Box Cards )
export const surface = '#FFFFFF';

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

