import {QuanLyHangHoa} from "./service/QuanLyHangHoa";
import {HangHoa} from "./model/HangHoa";

// @ts-ignore
let input = require('readline-sync');
let quanLyHangHoa:QuanLyHangHoa = new QuanLyHangHoa();
function mainMenu() {
    let menu = `-------menu-------\n1.Hien thi danh sach hang hoa\n2.Tim kiem hang hoa theo ten hang\n3.Nhap thong tin 1 mat hang moi\n4.Chinh sua thong tin cua mot mat hang\n5.Xoa mot mat hang khoi ung dung`
    let choice;
    do{
        console.log(menu);
        choice = +input.question("Nhap lua chon cua ban: ")
        switch (choice) {
            case 1:
                show();
                break;
            case 2:
                findNameInMenu();
                break;
            case 3:
                addMenu();
                break;
            case 4:
                editAProduct();
                break;
            case 5:
                deleteProduct1();
                break;
        }
    } while (choice!=0);
}
function show() {
        console.log(quanLyHangHoa.showAll())
}
function addMenu() {
    let maHang = input.question("Nhap ma san pham: ");
    let tenHang = input.question("Nhap ten san pham: ");
    let loaiHang = input.question("Nhap loai san pham: ");
    let gia = input.question("Nhap gia san pham: ");
    let soLuong = input.question("Nhap so luong san pham: ");
    let thoiGian = new Date();
    let ngayTao = `${thoiGian.getDate()}/${thoiGian.getMonth()+1}`;
    let moTa = input.question("Nhap mo ta san pham: ");
    let hangHoa: HangHoa = new HangHoa(maHang, tenHang, loaiHang, gia, soLuong, ngayTao, moTa);
    quanLyHangHoa.add(hangHoa);
}
function findNameInMenu() {
    let name = input.question("Nhap ten san pham can tim: ");
    console.log(quanLyHangHoa.findByName(name));
}
function editAProduct(){
    let id = input.question("Nhap ma san pham can sua: ");
    for (let i = 0; i < quanLyHangHoa.listHangHoa.length; i++) {
        if(quanLyHangHoa.listHangHoa[i].maHang != id){
            console.log("Khong ton tai mat hang can update");
            return mainMenu();
        }
    }
    let ten = input.question("Nhap ten san pham can sua: ");
    let loai = input.question("Nhap loai san pham can sua: ");
    let gia = input.question("Nhap gia san pham can sua: ");
    let sl = input.question("Nhap so luon san pham can sua: ");
    let thoiGian = new Date();
    let ngay = `${thoiGian.getDate()}/${thoiGian.getMonth()+1}`;
    let moTa = input.question("Nhap mo ta san pham can sua: ");
    let suaHangHoa: HangHoa = new HangHoa(id, ten, loai, gia, sl, ngay, moTa);
    quanLyHangHoa.editById(id, suaHangHoa);
}
function deleteProduct1() {
    let id = input.question("Nhap ma san pham can xoa: ");
    quanLyHangHoa.deleteById(id);
}
mainMenu();