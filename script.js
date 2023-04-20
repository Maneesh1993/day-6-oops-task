class Movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
}

let f1=new Movie("Padaiyappa","avm","⭐⭐⭐⭐🌟");
    console.log(f1)

class Person{
    constructor(name,age,city,pincode,state,gender){
        this.name=name;
        this.age=age;
        this.city=city;
        this.pincode=pincode;
        this.state=state;
        this.gender=gender;
    }
}

let s1=new Person("maneesh",30,"chennai",600057,"tamilnadu","male");
// let s2=s1;
// s2.brand="audi";
// let s3= new Person("mahendra","scorpio");
// s3=s2;
// console.log(s2.brand);
// console.log(s3)
// console.log(s3.brand)
// console.log(s3.model)

// console.log(s2)
// console.log(s2.brand)
// console.log(s2.model)

console.log(s1)
console.log(s1.name)
console.log(s1.city)
console.log(s1.state)
console.log(s1.gender)
// console.log(s1.brand)
// console.log(s1.model)

let s2=new Person("prabha",31,"chennai",600057,"tamilnadu","male");
    console.log(s2)
    console.log(s2.name)
    console.log(s2.city)
    console.log(s2.state)
    console.log(s2.gender)


    let s3=new Person("kutty",31,"chennai",600057,"tamilnadu","male");
    console.log(s3)
    
    console.log(s3.name)
    console.log(s3.city)
    console.log(s3.state)
    console.log(s3.gender)

    let s4=new Person("rajan",31,"chennai",600057,"tamilnadu","male");
    console.log(s4)
   
    console.log(s4.name)
    console.log(s4.city)
    console.log(s4.state)
    console.log(s4.gender)
