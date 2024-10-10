const fruits = ['banana','apple',NaN,undefined,0,'pineapples'];
const removeFalsyValue = fruits.filter(Boolean);
console.log(removeFalsyValue);

// explanation
Boolean('banana')//true
Boolean('');//false