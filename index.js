 // Code your solution here
 const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

 function findMatching(drivers, name) {
    return drivers.filter(function (driver) {
        return driver.toLowerCase() === name.toLowerCase()
        // console.log(drivers);
    });
  };
  findMatching(drivers);

  function fuzzyMatch(drivers, middleName) {
    return drivers.filter(function(driver){
        return driver.slice(0, middleName.length).toLowerCase() === middleName.toLowerCase()
    });
  };

  function matchName(drivers, property) {
    return drivers.filter(function(driver){
        return driver.name.toLowerCase() === property.toLowerCase()
    });
  };
 