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

    
collection.remove({"name":"kinjal shah"}, function (err, numUpdated) 
{
  
if (err) 
{
    
console.log(err);
  
} 
else if (numUpdated) 
{
    
console.log('Record deleted Successfully');
  
} 
else 
{
    console.log('Some error.');
  
}
      
db.close();
    
});
  
}
});