const baseUrl = process.env.REACT_APP_API_URL;

export const fetchWithoutToken = ( endpoint, data, method = 'GET' )=>{

    const url = `${baseUrl}/${ endpoint }`; // localhost:3500/api/endpoint

    if ( method === 'GET' ){
        return fetch( url )
    } else{
        return fetch( url,  {
            method: method,
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify( data )
        })
    }
} 

export const fetchWithToken = ( endpoint, data, method = 'GET' )=>{
    
    const url = `${baseUrl}/${ endpoint }`; // localhost:3500/api/endpoint
    const token = localStorage.getItem('token') || '';

    if ( method === 'GET' ){
        return fetch( url, {
            method: method,
            headers: {
                'token': token,
            },
            body: JSON.stringify( data )
        } )
    } else{
        return fetch( url,  {
            method: method,
            headers: {
                'Content-type': 'application/json',
                'token': token,
            },
            body: JSON.stringify( data )
        })
    }
}

export const fetchWithTokenFormData = ( endpoint, data, method = 'GET' )=>{
    
    const url = `${baseUrl}/${ endpoint }`; // localhost:3500/api/endpoint
    const token = localStorage.getItem('token') || '';

    const formData = getFormData(data)


    if ( method === 'GET' ){
        return fetch( url, {
            method: method,
            headers: {
                'token': token,
            },
            body: JSON.stringify( data )
        } )
    } else{
        return fetch( url,  {
            method: method,
            headers: {
                'token': token,
            },
            body: formData
        })
    }
}

const getFormData= (object) => {
    const formData = new FormData();
    Object.keys(object).forEach(key => formData.append(key, object[key]));
    return formData;
}