let newCity=""
let cities = {"San Fancisco","Omaha","St. Louis"}
let doContinue = confirm(`Do you want to add another city? OK or Cancel for No`)
while(doContinue){
  newCity = prompt("Enter new city: ")
  cities.push(newCity)
  doContinue = confirm(`Do you want to add another city? OK or Cancel for No`)
}
console.log(`${cities}`)
