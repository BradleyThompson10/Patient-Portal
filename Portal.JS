function submitPatientInformation (event) {
 const patientInformation = {
    name : event.target[0].value,
    address : event.target[1].value,
    phone : event.target[2].value,
    email : event.target[3].value,
    dob : event.target[4].value,
    gender : getGender(event.target[5]),
    medications : event.target[7].value,
    healthConditions : event.target[8].value
 } ;  
console.log(JSON.stringify(patientInformation));
}

function getGender (maleRadio) {
if (maleRadio.checked) {
    return 'male';
} else {
    return 'female';
}
}

