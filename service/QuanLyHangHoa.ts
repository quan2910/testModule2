import {Interface} from "./interface";
import {HangHoa} from "../model/HangHoa";
let maHang = [];
export class QuanLyHangHoa implements Interface<HangHoa> {
    listHangHoa: HangHoa[] = [];
    add(t: HangHoa) {
        this.listHangHoa.push(t);
    }
    deleteById(id: number) {
        for (let i = 0; i < this.listHangHoa.length; i++) {
           maHang.push(this.listHangHoa[i].maHang);
        } if(maHang.includes(id)){
                this.listHangHoa = this.listHangHoa.filter((item) =>{
                    console.log("Xoa thanh cong")
                    return id != item.maHang

                })
        } else {
            console.log("Khong co san pham can xoa")}
    }

    findById(id: number) {
        for (let i = 0; i < this.listHangHoa.length; i++) {
            if(this.listHangHoa[i].maHang == id) {
                return i
            }
        } return -1
    }

    findByName(name: string) {
        for (let i = 0; i < this.listHangHoa.length; i++) {
            if(this.listHangHoa[i].tenHang === name){
                return ("Ma hang: " + this.listHangHoa[i].maHang +"\nTen hang: "+ this.listHangHoa[i].tenHang +"\nLoai hang: "+ this.listHangHoa[i].loaiHang +"\nGia: "+ this.listHangHoa[i].gia +"\nSo luong: "+ this.listHangHoa[i].soLuong);
            }
        }return "Khong co du lieu can tim"
    }
    editById(id: number, t: HangHoa){
        for (let i = 0; i < this.listHangHoa.length; i++) {
            maHang.push(this.listHangHoa[i].maHang);
        } if(maHang.includes(id)){
            for (let i = 0; i < this.listHangHoa.length; i++) {
                if(this.listHangHoa[i].maHang == id){
                   return  this.listHangHoa[i] = t
                    console.log("Sua thanh cong")
                }
            }
        } else {
            console.log("Khong co san pham can xoa")}
    }

    showAll() {
        if (this.listHangHoa.length == 0 ) return "Khong co do lieu";
        return this.listHangHoa
    }

}