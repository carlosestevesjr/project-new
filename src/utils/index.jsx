import { stubFalse } from "lodash";

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

export function validateEmail(email) 
{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

export function validateSenha(senha) {
    const senhaRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/
    return senhaRegex.test(String(senha))
  }
 
export function validateName(nome){
    nomeSobrenome = /\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\s[A-Za-zÀ-ú][A-Za-zÀ-ú]{2,19}\b/gi;
    // Regex para duas strings, separadas com espaço e com no mínimo 3 caracteres. Aceita acentuação e rejeita números.
    
    // Faz a validacao do regex no campo indicado
    if(!(nomeSobrenome.test(nome))){
       return false   
    }else{
        return true
    }
}

export function verifyApiAutorization(user){
   
    const tokenApi = ""
    if(user.api_token != undefined && user.api_token != "" ){
        return user.api_token 
    }else{
        return tokenApi 
    }
   
}