let total: number = 100;
let names: string = "jey";
let isActive: boolean = true;

const user: { name: string; age: number } = {
    name: 'far',
    age: 20,
};

type User = {
    name: string;
    age: number;
};

const newUser: User = {
    name: "fsd",
    age: 15,
};


function add(num1: number, num2: number): string {
  return `${num1}` + `{$num2}`;
}

add(1, 1);