import Swal from "sweetalert2";

export const studentAddedClass = async (seclectedClass,token,id) => {
    

    // const url = `http://localhost:5000/selectedClass/${id}`;
    const url = `https://project-summer-5h81.vercel.app/selectedClass/${id}`;
    const headers = {
      "Content-Type": "application/json", 
      "Authorization": `Bearer ${token}`, 
    };

    // Make the POST request with headers and data using Fetch API
    fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(seclectedClass),
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
      if (data.acknowledged) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your class has been saved',
          showConfirmButton: false,
          timer: 1500
        })
      }


    })
    .catch(error => {
      console.error("Post request failed:");
      console.error(error);
    });
    
}