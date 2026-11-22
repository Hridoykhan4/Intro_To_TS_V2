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
    get getBigSound() {
        return `${this.name} sounds like BIIG`;
    }
}
const animal = new Animal('Jamal', 'Cat', "Wooooww");
// animal.makeSound()
console.log(animal.getBigSound);
export {};
