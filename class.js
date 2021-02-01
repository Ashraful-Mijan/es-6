class Student{
    constructor(id, Name){
        this.id = id;
        this.name = Name;
        this.school = 'kolimunnesa High school'
    }
}
const student1 = new Student(12, "kajol");
const student2 = new Student(67, "jamil");
const student3 = new Student(23, "Bappi");
console.log(student1, student3);