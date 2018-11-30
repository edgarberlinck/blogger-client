export const blogInfo = () => 
    fetch(requestUri('Blog_Info'), {
      method: 'GET'
    })
    .then(response => response.json());


const requestUri = (endPoint) => `${process.env.REACT_APP_API_URL}/${endPoint}?code=${process.env.REACT_APP_API_CODE}`;