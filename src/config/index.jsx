
let LOCAL_HOST_NOCINEMA = ""
let LOCAL_API_NOCINEMA = ""

if (__DEV__) {
    LOCAL_HOST_NOCINEMA = 'http://192.168.15.3/meuhype/public/'
    LOCAL_API_NOCINEMA = 'http://192.168.15.3/meuhype/public/api/'
}else{
    LOCAL_HOST_NOCINEMA = 'http://meuhype.com.br/'
    LOCAL_API_NOCINEMA = 'http://meuhype.com.br/api/'
}

export default {
    LOCAL_HOST_NOCINEMA : LOCAL_HOST_NOCINEMA,
    LOCAL_API_NOCINEMA : LOCAL_API_NOCINEMA,
    API_POKEMON:'https://pokeapi.co/api/v2/'
}
