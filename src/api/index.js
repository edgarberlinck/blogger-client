export const getPosts = () => 
    fetch(requestUri('Blogger_Posts_Fetch'), {
      method: 'POST',
      body: JSON.stringify({ name: 'Edgar' })
    });


const requestUri = (endPoint) => `${process.env.REACT_APP_API_URL}/${endPoint}?code=${process.env.REACT_APP_API_CODE}`;