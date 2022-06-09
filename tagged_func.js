const logDetail = (name, age, address) =>{
    console.log(name[0] + age + address)
}

const person = {
    name : "Lorgand",
    age : 25,
    address : "14 Morthand Street, Irvan"
}

logDetail`Hello ${person.name}, aged ${person.age}, living in ${person.address}`;

console.log(Date())