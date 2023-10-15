export const authorization = async (item,id,token,refetch) => {
    

    // const url = `http://localhost:5000/addedClass/${id}`;
    const url = `https://project-summer-5h81.vercel.app/addedClass/${id}`;
    const headers = {
      "Content-Type": "application/json", 
      "Authorization": `Bearer ${token}`, 
    };

    // Make the POST request with headers and data using Fetch API
    fetch(url, {
      method: 'PATCH',
      headers: headers,
      body: JSON.stringify(item),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log("Post request successful!");
      console.log(data); 
        refetch()
    })
    .catch(error => {
      console.error("Post request failed:");
      console.error(error);
    });
    
}