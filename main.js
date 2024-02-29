//Task 38
// Cities:write a function called describe_city()that accepts the name of a city and its country. the function should print a 
// simple sentence , such as karachi is in pakistan . give the parameter for the countryt a default value . Call your function for
// three different cities , at latest one of which is the default country.
function describe_city(city, country) {
    if (country === void 0) { country = 'pakistan'; }
    console.log('${city} is in ${country}');
}
describe_city('karachi');
describe_city('france', 'europe');
describe_city('lahor', 'is in punjab');
console.log("karachi ,france, europe,lahor,punjab");
