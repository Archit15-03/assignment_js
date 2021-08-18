var Employee =
{
company: 'Rohit'
}
var Emp1 = Object.create(employee);
delete Emp1.company 
Console.log(emp1.company);

//The desired output for this code segment should be an empty object as the 
//delete function will delete the only entry in object.
//But considering the typo mistakes(if done intentionally) then the code will
//show an error as 'employee' will not be recognized

// Output : [object object] 0