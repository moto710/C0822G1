function tinhTien(){
    let kwh = Number(document.getElementById("kwhh").value);
        tienDien;
    if (kwh <= 50) {
        tienDien = kwh*1678;
    }
    document.getElementsByClassName("amount").value=tienDien;
}