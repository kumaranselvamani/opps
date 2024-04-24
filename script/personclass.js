class Person {

    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    getName() {
        return this.name;
    }

    setName() {
        this.name = name;
    }

    getAge() {
        return this.age;
    }

    setAge(age) {
        this.age = age;
    }

    getGender() {
        return this.gender;
    }

    setGender() {
        this.gender = gender;
    }

    toString(){
        return `Person[name=${this.name}, age=${this.age}, gender=${this.gender}]`;
    }
}

let person1 = new Person("kumaran", 30, "male");
console.log(person1.toString());

// Changing age
person1.setAge(28);
console.log(person1.toString());
