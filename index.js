var countries = require('./countries.json').countries;
var states = require('./states.json').states;
var cities = require('./cities.json').cities;

 function getCitiesFromState(stateName,stateData,CityData) {
	let stateDetails=stateData.filter((ele)=>ele.name==stateName)
	console.log(stateDetails[0].id)
	let cityDetails=CityData.filter((ele)=>ele.state_id==stateDetails[0].id)
	return cityDetails
	// console.log(cityDetails)
  }
//   console.log(getCitiesFromState("Haryana",states,cities))



// =============================================================================================
//   function getAllCountryList() {
//     let Global={ id: 0, sortname: 'GLB', name: 'Global', phoneCode: 0 }
//     countries.push(Global)
// 	let countryNames=countries.filter((ele)=>ele.name=="India"||ele.name=="Ireland"||ele.name=="Global"||ele.name=="United Arab Emirates").sort().map((ele)=>ele.name)
// 	return countryNames
	
//   }
//   console.log(getAllCountryList(countries))



// ===============================================================================================
function getStatesFromCountry(CountryName,CountryData,stateData) {
	let countryDetails=CountryData.filter((ele)=>ele.name==CountryName)
	let stateDetails=stateData.filter((ele)=>ele.country_id==countryDetails[0].id)
	return stateDetails.map((ele)=>ele.name)
	
  }
  console.log(getStatesFromCountry("India",countries,states))