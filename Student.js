let Student = function (id, name, age) {
    debugger;
    this.index = 0;
    this.id = id;
    this.name = name;
    this.age = age;
    this.mathScore = 0;
    this.physicalScore = 0;
    this.chemicalScore = 0;
    this.setID=function (new_id) {
        this.id=new_id;
    };
    this.setName=function (new_name) {
        this.name=new_name;
    };
    this.setAge=function (new_Age) {
        this.age=new_Age;
    };

    this.addScore = function (math, physic, chemical) {
        this.mathScore = math;
        this.physicalScore = physic;
        this.chemicalScore = chemical;
    }
    this.setMath=function (new_math) {
        this.mathScore=new_math;
    }
    this.setPhysic=function (new_physic) {
        this.physicalScore=new_physic;
    }
    this.setChemistry=function (new_chem) {
        this.chemicalScore=new_chem;
    }


    this.getTextStudent = function () {
        let html = "";
        html += "<tr>";
        html += "<td >" + this.id + "</td>";
        html += "<td>" + this.name + "</td>";
        html += "<td>" + this.age + "</td>";
        html += "<td>" + this.mathScore + "</td>";
        html += "<td>" + this.physicalScore + "</td>";
        html += "<td>" + this.chemicalScore + "</td>";
        html += "<td>" + this.getAverageScore() + "</td>";
        html += "<td>" + this.getRank() + "</td>";
        html+='<td><button onclick="manager.deleteStudent( '+this.index+' )"> Delete </button></td>';
        html+='<td><button onclick="manager.editStudent('+this.index+')"> Edit </button></td>';
        html += "<tr>";
        return html;

    };


    this.getAverageScore = function () {
        let avg = (Number(this.mathScore) + Number(this.physicalScore) + Number(this.chemicalScore)) / 3;
        return avg.toFixed(2);
    }

    this.getRank = function () {
        let avg = this.getAverageScore();
        let txtRank='';
        if(avg<5){
            txtRank="Trung bình";
        }else if(avg<8){
            txtRank="Khá";
        }else {
            txtRank="Giỏi";
        }
        return txtRank;
    }
}
let Management = function () {
    let table = document.getElementById("dataTable");
    let idBox = document.getElementById("maSv");
    let nameBox = document.getElementById("name");
    let ageBox = document.getElementById("age");
    let mathBox = document.getElementById("math");
    let physicalBox = document.getElementById("physical");
    let chemistryBox = document.getElementById("chemistry");
    this.students = [];

    this.addStudent = function () {
        let student = new Student(idBox.value, nameBox.value, ageBox.value);
        student.addScore(mathBox.value, physicalBox.value, chemistryBox.value);
        this.students.push(student);
        this.displayStudents();
        this.clearInput();
    };

    this.deleteStudent = function (index) {
        this.students.splice(index,1);
        this.displayStudents();

    };
    this.editStudent = function (index) {
        debugger;
        let masv=prompt("Nhập mã sinh viên: ");
        let ten=prompt("Nhập tên sinh viên: ");
        let tuoi=prompt("Nhập tuổi sinh viên: ");
        let toan=prompt("Nhập điểm toán: ");
        let ly=prompt("Nhập điểm lý: ");
        let hoa=prompt("Nhập điểm hóa: ");
        this.students[index].setID(masv);
        this.students[index].setName(ten);
        this.students[index].setAge(tuoi);
        this.students[index].setMath(toan);
        this.students[index].setPhysic(ly);
        this.students[index].setChemistry(hoa);
        this.displayStudents();
    };
    this.displayStudents = function () {
        table.innerHTML = "<tr>" +
            "        <td>Mã sinh viên</td>" +
            "        <td>Họ và tên</td>" +
            "        <td>Tuổi</td>" +
            "        <td>Điểm toán</td>" +
            "        <td>Điểm lý</td>" +
            "        <td>Điểm hóa</td>" +
            "        <td>Điểm TB</td>" +
            "        <td>Xếp loại</td>" +
            "    </tr>";
        for (let i = 0; i < this.students.length; i++) {
            this.students[i].index = i;
            table.innerHTML += this.students[i].getTextStudent();
        }
    }
    this.clearInput = function () {
        idBox.value = "";
        nameBox.value = "";
        ageBox.value = "";
        mathBox.value = "";
        physicalBox.value = "";
        chemistryBox.value = "";
    }
}

let manager = new Management();
let student1= new Student();
//
// let student =new Student(1,"Thúy",18);
// let student2 =new Student(2,"Hằng",18);
// student.addScore(7,8,9);
// student2.addScore(7,8,9);
// table.innerHTML += student.getTextStudent();
// table.innerHTML += student2.getTextStudent();