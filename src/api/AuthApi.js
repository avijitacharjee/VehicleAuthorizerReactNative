import  axios  from 'axios';
export function authorize(token){
    let formData = new FormData();
    formData.append('a','a');
    axios.post("https://www.finalproject.xyz/vehicle_parking/api/bookings.php?token="+token, formData).then(
            response=> {
                console.log(JSON.stringify(response.data));
            }
        ).catch(error=> {
            console.log(error.message);
        });
}
