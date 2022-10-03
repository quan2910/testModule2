export class HangHoa{
    private _maHang: number;
    private _tenHang: string;
    private _loaiHang: string;
    private _gia: number;
    private _soLuong: number;
    private _ngayTao: string;
    private _moTa: string;

    constructor(maHang: number, tenHang: string, loaiHang:string, gia: number, soLuong: number, ngayTao: string, moTa: string) {
        this._maHang = maHang;
        this._tenHang = tenHang;
        this._loaiHang = loaiHang;
        this._gia = gia;
        this._soLuong = soLuong;
        this._ngayTao = ngayTao;
        this._moTa = moTa;
    }

    get maHang(): number {
        return this._maHang;
    }

    set maHang(value: number) {
        this._maHang = value;
    }

    get tenHang(): string {
        return this._tenHang;
    }

    set tenHang(value: string) {
        this._tenHang = value;
    }

    get loaiHang(): string {
        return this._loaiHang;
    }

    set loaiHang(value: string) {
        this._loaiHang = value;
    }

    get gia(): number {
        return this._gia;
    }

    set gia(value: number) {
        this._gia = value;
    }

    get soLuong(): number {
        return this._soLuong;
    }

    set soLuong(value: number) {
        this._soLuong = value;
    }

    get ngayTao(): string {
        return this._ngayTao;
    }

    set ngayTao(value: string) {
        this._ngayTao = value;
    }

    get moTa(): string {
        return this._moTa;
    }

    set moTa(value: string) {
        this._moTa = value;
    }
}