export default async function fetchData(url,method,body,setIsLoading) {
    let requestBody = null;
    switch (method) {
        case "GET":
        case "DELETE":
            requestBody = null;
            break;
        case "POST":
        case "PUT":
            requestBody = JSON.stringify(body);
            break;
    }
    try {
        let request = await fetch(url,{
            method:method,
            headers:{
                'Content-Type':'application/json'
            },
            body:requestBody
        })
        let response = await request.json();
        setIsLoading(true);
        return response;
    } catch (error) {
        console.log(error);
        setIsLoading(false);
    }finally{
        setIsLoading(false);
    }
}