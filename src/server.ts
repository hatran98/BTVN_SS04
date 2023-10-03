// // Đối tượng User => Chỉ là một khuôn mẫu
// class User {
//   // Khai báo các property (thuộc tính của đối tượng)
//   // Từ khoá this dùng để trỏ đến đối tượng mà nó đang đứng
//   userId: number;
//   userName: string;
//   age?: number;
//   address?: string;
//   // Hàm tạo đối tượng
//   constructor(userId: number, userName: string, age: number, address: string) {
//     // Gán lại cho các thuộc tính của đối tượng user
//     this.userId = userId;
//     this.userName = userName;
//     this.age = age;
//     this.address = address;
//   }
//   getName(): string {
//     return this.userName;
//   }
// }

// // Khởi tạo đối tượng
// const anhNam = new User(1, "Phương Nam Tokyo", 18, "Hà Nội");
// const vinhDola = new User(2, "Vinh", 18, "Thanh Hoá");
// // console.log(anhNam.getName());
// // console.log(vinhDola);

// // Thiết kế một đối tượng product
// class Product {
//   productId: number;
//   productName: string;
//   price: number;
//   from: string;
//   constructor(
//     productId: number,
//     productName: string,
//     price: number,
//     from: string
//   ) {
//     // Gán lại cho các thuộc tính của đối tượng product
//     this.productId = productId;
//     this.productName = productName;
//     this.price = price;
//     this.from = from;
//   }
//   getName(): string {
//     return this.productName;
//   }
//   getPrice(): number {
//     return this.price;
//   }
// }

// const product1 = new Product(1, "Quần Sịp Nam", 150000, "Shop Hà Trần");
// // console.log(product1);

// class Circle {
//   r: number;
//   pi: number;
//   constructor(r: number, pi: number) {
//     this.r = r;
//     this.pi = pi;
//   }
//   getChuvi(): number {
//     return this.r * 2 * this.pi;
//   }
//   getDientich(): number {
//     return this.r * this.r * this.pi;
//   }
// }

// const newF = new Circle(3, 3.14);
// console.log("Chu vi", newF.getChuvi(), "cm");
// console.log("Dien tich", newF.getDientich(), "cm");

// class Person {
//   id: number;
//   name: string;
//   age: number;
//   address: string;
//   constructor(
//     personId: number,
//     personName: string,
//     age: number,
//     address: string
//   ) {
//     this.id = personId;
//     this.name = personName;
//     this.age = age;
//     this.address = address;
//   }
//   run(): string {
//     return "running";
//   }
// }

// class Student extends Person {
//   className: string;
//   score: number;
//   constructor(
//     personId: number,
//     personName: string,
//     age: number,
//     address: string,
//     className: string,
//     score: number
//   ) {
//     super(personId, personName, age, address);
//     this.className = className;
//     this.score = score;
//   }
//   learn() {
//     return "learning...";
//   }
// }

// class Employee extends Person {
//   department: string;
//   salary: number;
//   constructor(
//     personId: number,
//     personName: string,
//     age: number,
//     address: string,
//     department: string,
//     salary: number
//   ) {
//     super(personId, personName, age, address);
//     this.department = department;
//     this.salary = salary;
//   }
// }
// const student1 = new Student(1, "Maria", 21, "Japan", "Class01", 10);
// const employee1 = new Employee(
//   1,
//   "Nguyễn Văn A",
//   22,
//   "Việt Nam",
//   "Phòng Nhân Sự",
//   10000000
// );
// console.log(student1);
// console.log(employee1);

// class QuadraticEquation {
//   private a: number;
//   private b: number;
//   private c: number;
//   constructor(a: number, b: number, c: number) {
//     this.a = a;
//     this.b = b;
//     this.c = c;
//   }
//   getDiscriminant(): unknown {
//     const delta = this.b * this.b - 4 * (this.a * this.c);
//     if (delta > 0) {
//       const x1 = (-this.b + Math.sqrt(delta)) / (2 * this.a);
//       const x2 = (-this.b - Math.sqrt(delta)) / (2 * this.a);
//       return `Phương trình có 2 nghiệm phân biệt x1 = ${x1} , x2 =${x2}`;
//     } else if (delta == 0) {
//       const x = -this.b / (2 * this.a);
//       return `Phương trình có 2 nghiệm kép x1=x2=${x}`;
//     } else if (delta < 0) {
//       return "Phương trình vô nghiệm";
//     }
//   }
// }

// const ptb2 = new QuadraticEquation(1, 2, 1);
// console.log(ptb2.getDiscriminant());

class Fanto {
  SLOW: number;
  MEDIUM: number;
  FAST: number;
  private SPEED: number;
  private ON: boolean;
  private RADIUS: number;
  private COLOR: string;
  constructor() {
    this.SLOW = 1;
    this.MEDIUM = 2;
    this.FAST = 3;
    this.SPEED = 1;
    this.ON = false;
    this.RADIUS = 5;
    this.COLOR = "blue";
  }
  toString() {
    if (this.ON == false) {
      return `Color:${this.COLOR} , Radius:${this.RADIUS}, "fan is off"`;
    } else if (this.ON == true) {
      return `Speed:${this.SPEED}, Color:"yellow" , Radius:${this.RADIUS}, "fan is on"`;
    }
  }

  set setSpeed(speed: number) {
    this.SPEED = speed;
  }
  set setRadius(radius: number) {
    this.RADIUS = radius;
  }
  set setOn(on: boolean) {
    this.ON = on;
  }
}

const Fan1 = new Fanto();
Fan1.setSpeed = Fan1.FAST;
Fan1.setRadius = 10;
Fan1.setOn = true;
const Fan2 = new Fanto();
Fan2.setSpeed = Fan2.MEDIUM;
Fan2.setRadius = 5;
Fan2.setOn = false;
console.log("Fan 1 : ", Fan1.toString());
console.log("Fan 2 : ", Fan2.toString());
