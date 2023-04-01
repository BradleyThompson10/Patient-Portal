function submitPatientInformation (event) {
 const patientInformation = {
    name : event.target[0].value,
    address : event.target[1].value,
    phone : event.target[2].value,
    email : event.target[3].value,
    dob : event.target[4].value,
    gender : event.target[5].value,
    gender2 : event.target[6].value,
 } ;  
console.log(JSON.stringify(patientInformation));
}