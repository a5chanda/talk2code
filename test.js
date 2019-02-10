
function dataCreationAndAssignment (phase, variableName, equalsToCreation ) {
    if (equalsToCreation != null) {
      return 'var ' + variableName + ' = '  + phase.split (equalsToCreation).pop() + ';'; 
    }
    return 'var ' + variableName + ' ;' 
  };

console.log(dataCreationAndAssignment ('Make y equals 5', 'y', 'equals'));
console.log(dataCreationAndAssignment ('Initialize fofo as 5', 'x', 'as'));
console.log(dataCreationAndAssignment ('Make zozo is equal 5', 'zozo', 'is equal'));
