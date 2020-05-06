### Questions to answer as part of the final exercise for CMMSC388B  
(just add your answers here after each question)  

1. What are the 3 fundamental components of an API application (true for any framework, not just express)  
--> Browser, Server, and Database




2.  What purpose does Mongoose serve in an Express application?  
--> Provides a place to store data




3.  How is data stored in a Mongo database different from a traditional database like MySQL?  
--> It is by Schema





4.  Describe the process that associates data models with one another in Mongodb.  Hint: look at exercise 3.  
-->  One-to-Many Relationships 




5.  what does this line of code output:  
```javascript
  let firstMethod = function() {
   let promise = new Promise(function(resolve, reject){
      setTimeout(function() {
         console.log('first method completed');
         resolve({data: '123'});
      }, 4000);
   });
   return promise;
};
 
 
let secondMethod = function(someStuff) {
   let promise = new Promise(function(resolve, reject){
      setTimeout(function() {
         console.log('second method completed');
         resolve({newData: someStuff.data + ' 456'});
      }, 500);
   });
   return promise;
};
 
let thirdMethod = function(someStuff) {
   var promise = new Promise(function(resolve, reject){
      setTimeout(function() {
         console.log('third method completed');
         resolve({result: someStuff.newData});
      }, 3000);
   });
   return promise;
};
 
firstMethod()
   .then(secondMethod)
   .then(thirdMethod)
   .then(result => {
     console.log(result.result)
   });
```
--> The first method is called, then the second, and third



6.  True or False. The code snippet in question 5 is synchronous. 
--> True



7. What are the parameters that any piece of express middleware receive?  
--> res, req, next



8.  What purpose does `next` serve with express middleware?  
-->  "Next" gets the next middleware function in the app



9.  True or false. An Express application requires that you define your models in a specific directory. 
--> False 



10. What did you enjoy most about the course? What did you enjoy the least?  
--> The exercises were pretty fun, I wish we did more of them.

