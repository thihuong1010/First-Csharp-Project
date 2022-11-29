export interface Duck {
    name: string,
    numLegs: number,
    makeSound: (sound: string) => void
}

const duck1: Duck = {
    name: 'Vit',
    numLegs: 2,
    makeSound: (sound: any) => console.log(sound)
}

const duck2 : Duck = {
    name: 'Vit2',
    numLegs: 2,
    makeSound: (sound: any) => console.log(sound)
}

duck1.makeSound!('quack');

export const ducks = [duck1, duck2]