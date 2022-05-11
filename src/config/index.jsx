
let LOCAL_HOST_NOCINEMA = ""
let LOCAL_API_NOCINEMA = ""

if (__DEV__) {
    LOCAL_HOST_NOCINEMA = 'http://192.168.1.10/meuhype/public/'
    LOCAL_API_NOCINEMA = 'http://192.168.1.10/meuhype/public/api/'
}else{
    LOCAL_HOST_NOCINEMA = 'http://www.nocinema.kinghost.net/'
    LOCAL_API_NOCINEMA = 'http://www.nocinema.kinghost.net/api/'
}

export default {
    LOCAL_HOST_NOCINEMA : LOCAL_HOST_NOCINEMA,
    LOCAL_API_NOCINEMA : LOCAL_API_NOCINEMA,
    API_POKEMON:'https://pokeapi.co/api/v2/'
}
