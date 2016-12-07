var mongodb = require('mongodb');


var MongoClient = mongodb.MongoClient;


var url = 'mongodb://localhost:27017/EmployeeDBkg';


MongoClient.connect(url, function (err, db) 
{
  
if (err) 
{
    
console.log('Unable to connect to the mongoDB server. Error:', err);
  
} 
else {
    
console.log('Connection established to', url);

    
var collection = db.collection('employees');

    
collection.find().toArray(function (err, result) 
{
      if (err) {
        console.log(err);
      } 
else if (result.length) {
        console.log(result);
      } 
else {
        console.log('No record found!');
      }
      
db.close();
    
});
  
}
});