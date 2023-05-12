var persons = [
    {name: "temo", age: 25},
    {name: "lasha", age: 21},
    {name: "ana", age: 28},
  ];
  persons = persons.sort(function(a, b) {
    return a.age - b.age;
})
let youngest  = persons.filter(function(item){ 
  return item.age == persons[0].age ;
})  


console.log(persons[0].name)





function nika(user1= {FirstName:'nika', LastName: 'rukhadze'}){
  const user2 = user1;
  return user2
}
console.log(nika())






function random(){
    return parseInt(Math.random() * 3) +1
}

let result = random()



while(result !== 3){
    result = random()
    console.log(result)
}
