class Student{
   ten;
   tuoi;
   lop;
   diachi;
   constructor(ten,tuoi,lop,diachi){
       this.ten = ten;
       this.tuoi = tuoi;
       this.lop = lop;
       this.diachi = diachi;
   }
   display(){
       console.log(`Họ Tên: ${this.ten}
                  Tuổi: ${this.tuoi}
                  Lớp: ${this.lop}
                  Địa chỉ: ${this.diachi})`;
   }

}
class Danhsach{
    listStudent;
     constructor(){
        this.listStudent = [];
    }
    addUser(user){
            this.listStudent.push(user);
        }
    findOfName(name){
       return this.listStudent.filter(function(v) {
            return v.ten.toLowerCase().includes(name.toLowerCase())
        });
    }
    findOfAge(){
        return this.listStudent.filter(function(p){
            return p.tuoi === 15;
        })
        }
    findOfAgeandadd(){
        return this.listStudent.filter(function(p){
            return (p.tuoi === 18 && p.diachi == 'Hà Nội')
    })
}
}



const userCollection = new Danhsach();

const user1 = new Student('Nguyễn Văn Anh',15,'10A1','Hà Nội');
const user2 = new Student('Nguyễn Quang Nam',16,'11A3','Hà Nam');
const user3 = new Student('Nguyễn Hồng Quang',18,'12A1','Hà Nội');
const user4 = new Student('Nguyễn Anh Minh',15,'10A1','Yên Bái');
const user5 = new Student('Trần Lê Khánh',15,'10A1','Quảng Ninh');
const user6 = new Student('Hoàng Thị Yến',17,'10A1','Hà Nội');
const user7 = new Student('Hoàng Thị Hoa',15,'10A8','Bắc Giang');
const user8 = new Student('Nguyễn Thị Vân',18,'12A3','Hà Nội');
const user9 = new Student('Tạ Hoàng Quang',16,'10A1','Hà Nam');
const user10 = new Student('Lê Nam',15,'10A3','Yên Bái');

userCollection.addUser(user1);
userCollection.addUser(user2);
userCollection.addUser(user3);
userCollection.addUser(user4);
userCollection.addUser(user5);
userCollection.addUser(user6);
userCollection.addUser(user7);
userCollection.addUser(user8);
userCollection.addUser(user9);
userCollection.addUser(user10);
console.log(userCollection);
console.log('Tìm học sinh theo tên "Nam": ');
console.log(userCollection.findOfName('Nam'));
console.log('Học sinh 18 tuổi ở Hà Nội:');
console.log(userCollection.findOfAgeandadd());
console.log('Học Sinh 15 tuổi');
console.log(userCollection.findOfAge());