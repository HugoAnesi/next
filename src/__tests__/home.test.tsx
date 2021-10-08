

describe('Tests'), () => {


}


it('Sum return Ok', () => {
 expect (sum(1,2)).toEqual(3);

}); 

it('Sum return False', () => {
  expect (sum(1,2)).not.toEqual(4);
 
 }); 


function sum(a, b) {
return a + b;
}

