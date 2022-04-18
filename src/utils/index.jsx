
// export const host = 'http://www.nocinema.kinghost.net/'
// export const host_api = 'http://www.nocinema.kinghost.net/api/'

export const host = 'http://192.168.1.100/'
export const host_api = 'http://192.168.1.100/api/'

export function stripHtml(html){
    if(html){
        const regex = /(<([^>]+)>)/ig;
        const result = html.replace(regex, '');
        return result
    }else{
        return false
    }
   
}

export function formataDataBr(data) {
    var dia  = data.split("-")[0];
    var mes  = data.split("-")[1];
    var ano  = data.split("-")[2];
  
    return ano + '/' + ("0"+mes).slice(-2) + '/' + ("0"+dia).slice(1);
    // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
}