{
const average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;
    
const result = average( [ 2, 7, 25, 13, 5 ] ); 
   
console.log(result);

}

{

    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    function filterEvenNumbers(arr) {
      const filterEvenNumbers = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
          filterEvenNumbers.push(arr[i]);
        }
      }
      return filterEvenNumbers;
    }
    console.log(filterEvenNumbers(arr));

}
{
  const coding = "Are you fucking kidding?, It's bullshit!, Holy shit!" ;
  const replaceBadWords = coding.replaceAll("shit", "****").replaceAll("fuck", "****")
  
  console.log(replaceBadWords);
  
     
}
