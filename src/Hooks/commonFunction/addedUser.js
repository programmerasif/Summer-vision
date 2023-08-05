export const addedUser = async (user,setloading,navigate,token) => {
    setloading(true);
    console.log(user);
    // sending all users data into data base
    const person = { name: user?.displayName, email: user?.email, role: 'user' };

    const url = `http://localhost:5000/user/${user.email}`;
    const headers = {
      "Content-Type": "application/json", 
      "Authorization": `Bearer ${token}`, 
    };

    // Make the POST request with headers and data using Fetch API
    fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(person),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log("Post request successful!");
      console.log(data); // If the server returns JSON response

      setloading(false); // Set loading state to false after the request is complete
      navigate('/');
    })
    .catch(error => {
      console.error("Post request failed:");
      console.error(error);
    });
    
}