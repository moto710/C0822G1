function tinhTien() {
    let kwh = Number(document.getElementById("kwh").value);
        amount;
        if (kwh<0) {
            amount = "số kWh không hợp lệ";
        } else if (kwh<=50) {
            amount = kwh*1678;
        } else if (kwh <=100) {
            amount = 50*1678 + (kwh - 50)*1734;
        } else if (kwh <=200) {
            amount = 50*1678 + 50*1734 + (kwh-100)*2014;
        } else if (kwh<=300) {
            amount = 50*1678 + 50*1734 + 100*2014 + (kwh - 200)*2536;
        } else if (kwh <= 400) {
            amount = 50*1678 + 50*1734 + 100*2014 + 100*2536 + (kwh - 300)*2834;
        } else amount = 50*1678 + 50*1734 + 100*2014 + 100*2536 + 100*2834 + (kwh - 400)*2927;
        document.getElementById("amount").innerHTML = amount;
}
function clearValue() {
    document.getElementById("amount").innerHTML="";
    document.getElementById("kwh").value = "";
}