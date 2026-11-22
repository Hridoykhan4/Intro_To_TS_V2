// oop --- class -- object, class is the fundamental building blocks
class Animal {
    name;
    species;
    sound;
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        console.log(`${this.name} is making sound ${this.sound}`);
    }
}
const animal = new Animal('Jamal', 'Cat', "Wooooww");
console.log(animal);
export {};
