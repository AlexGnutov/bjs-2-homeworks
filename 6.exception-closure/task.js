//Задача №1
function parseCount(string) {
    let value = parseInt(string);
    if (isNaN(value)) {
        throw new Error('Невалидное значение');
    }
    return value;
}

function validateCount(value) {
    try {
        return parseCount(value);         
    } catch(e) {
        return e;
    } 
}

//Задача №2
class Triangle {
    constructor(a, b, c) {
        if ( (a + b - c > 0) && (a + c - b > 0) && (b + c - a > 0)) {
            this.a = a;
            this.b = b;
            this.c = c;
            this.getPerimeter = function() {
                return (a + b + c);
            }
            this.getArea = function() {
                let hP = this.getPerimeter() / 2;
                return +(Math.sqrt(hP * (hP - a) * (hP - b) * (hP - c)).toFixed(3))
            }
        } else {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }
}

class WrongTrianlge {
    static message = "Ошибка! Треугольник не существует";
    constructor() {
        this.getArea = function() {
            return WrongTrianlge.message;
        }
        this.getPerimeter = function() {
            return WrongTrianlge.message;
        }   
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch {
        return new WrongTrianlge();
    }
}

console.clear();
console.log(getTriangle(1,3,3));
console.log(getTriangle(1,3,3).getArea());
console.log(getTriangle(1,3,3).getPerimeter());

console.log(getTriangle(100,3,2));
console.log(getTriangle(100,3,2).getArea());
console.log(getTriangle(100,3,2).getPerimeter());


