// oop --- class -- object, class is the fundamental building blocks

class Animal {
      constructor(public name: string, public species: string, public sound: string) {

      }

      makeSound() {
        console.log(`${this.name} is making sound ${this.sound}`);
      }

      get getBigSound() : string{
        return `${this.name} sounds like BIIG`
      }
}

const animal = new Animal('Jamal', 'Cat', "Wooooww")
// animal.makeSound()

console.log(animal.getBigSound);

