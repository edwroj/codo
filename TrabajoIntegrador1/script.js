
function verValor(){
    var ver = document.getElementById("id-cantidad").value;
    var cate = document.getElementById("inputGroupSelect01").value;

    if (cate ==1){
        var res = ver * 200;
        var res1 = res * 0.80;
        var total = res - res1;
        document.getElementById("paga").innerHTML = total;  

    }else if (cate ==2){
        var res = ver * 200;
        var res1 = res * 0.50;
        var total = res - res1;
        document.getElementById("paga").innerHTML = total;


    }else if (cate ==3){
        var res = ver * 200;
        var res1 = res * 0.15;
        var total = res - res1; 
        document.getElementById("paga").innerHTML = total; 


    }else{
        var res = ver * 200;
        document.getElementById("paga").innerHTML = res;

    }

    

};

function verValorConDes(){
    //var cate = document.getElementById("id-categoria").value;
    var cate = document.getElementById("inputGroupSelect01").value;
    if (cate == 1){
        cate = 1*80
        document.getElementById("descuento").innerHTML = cate;
    }else if (cate ==2) {
        cate = 1*50
        document.getElementById("descuento").innerHTML = cate;

    }else{
        cate = 1*15
        document.getElementById("descuento").innerHTML = cate;
    };
         
    
        
};    
    

    

