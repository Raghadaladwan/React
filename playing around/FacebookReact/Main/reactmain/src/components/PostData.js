export function PostData(type, userData){
    let BaseUrl = 'https://api.thewallscript.com/restful';

    return new Promise((resolve, reject)=>{
      
        fetch(BaseUrl+type,{
            method:'POST',
            body: JSON.strindify(userData)
        })
        .then((respone)=>respone.json())
        .then((responseJosn)=>{
           resolve(responseJosn);
        })
        .catch((error)=>{
            reject();
        });
    });
}