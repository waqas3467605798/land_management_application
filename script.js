
btn1.onclick = function(){
document.getElementById("para").className = "paragraph";

var sft = document.getElementById("sft").value;
var numsft = Number(sft);



var sarsai = document.getElementById("sarsai").value;
var numsarsai = Number(sarsai);



var marla = document.getElementById("marla").value;
var nummarla = Number(marla);



var kanal = document.getElementById("kanal").value;
var numkanal = Number(kanal);



var acre = document.getElementById("acre").value;
var numacre = Number(acre);



var square = document.getElementById("square").value;
var numsquare = Number(square);



var totalInSft = numsft+(numsarsai*30.22223)+(nummarla*272)+(numkanal*5440)+(numacre*43520)+(numsquare*1088000);

if (totalInSft<272){
//alert(totalInSft+"sft");
para.innerHTML = "<span class='span3'>Your Entered Area is Equal to</span> <br>"+totalInSft.toFixed(5)+"-Sft";
}
else if(totalInSft>=272 && totalInSft<5440){

var remainderSft = totalInSft%272;

var totalMarlas = totalInSft-remainderSft;

//alert(totalMarlas/272+"Marla" +" " +remainderSft+"Sft");
para.innerHTML = "<span class='span3'>Your Entered Area is Equal to</span> <br>"+totalMarlas/272+"-Marla, " + remainderSft.toFixed(5)+"-Sft";
}

else {

var sftRemainder = totalInSft%272;
var nowRemainderSft = totalInSft-sftRemainder;
var marlas = nowRemainderSft/272;
if(marlas>=20){
var remainderMarlas = marlas%20;
var nowRemainderMarlas = marlas - remainderMarlas;
}; 

//alert(nowRemainderMarlas/20 +"Kanals"+ " " + remainderMarlas+"Marlas" + " "+sftRemainder+"Sft");
para.innerHTML = "<span class='span3'>Your Entered Area is Equal to</span> <br>"+nowRemainderMarlas/20+"-Kanal, "+remainderMarlas+"-Marla, "+sftRemainder.toFixed(5)+"-Sft";


};

para2.innerHTML = "<span style='color:red;'><b>Above Area is Equal to;</b></span> <br>"+totalInSft.toFixed(5)+"-SFT"+"<br> <span style='color:red;'>OR</span> <br>"+(totalInSft/30.2223).toFixed(5)+"-Sarsai"+"<br> <span style='color:red;'>OR</span> <br>"+totalInSft/272+"-Marla"+"<br> <span style='color:red;'>OR</span> <br>"+totalInSft/5440+"-Kanal"+"<br> <span style='color:red;'>OR</span> <br>"+totalInSft/43520+"-Acre"+"<br> <span style='color:red;'>OR</span> <br>"+totalInSft/1088000+"-Square";
var selectedValue = document.getElementById("selection").value;
//alert(sel);
if(selectedValue === "square"){
    var priceString = document.getElementById("price").value;
    var priceNum = Number(priceString);
    var totalLandValue = priceNum*(totalInSft/1088000);
    var ratePerSquare = priceNum;
    var ratePerAcre = priceNum/25;
    var ratePerKanal = priceNum/200;
    var ratePerMarla = priceNum/4000;
    var ratePerSarsai = priceNum/35999.907;
    var ratePerSft = priceNum/1088000;
para3.innerHTML = "<span class='span2'>Total Land Value</span><br>"+"<span class='span2'>Rs. "+totalLandValue +"</span>"+ "<br><hr /> Rate Per Square<br>"+ratePerSquare + "<br> <hr /> Rate Per Acre<br>"+ratePerAcre + "<br> <hr />Rate Per Kanal<br>" + ratePerKanal + "<br> <hr />Rate Per Marla<br>" + ratePerMarla + "<br> <hr />Rate Per Sarsai<br>" + ratePerSarsai.toFixed(5) + "<br> <hr />Rate Per SFT<br>" + ratePerSft.toFixed(5);

} else if(selectedValue === "acre"){
    var priceStringAcre = document.getElementById("price").value;
    var priceNumAcre = Number(priceStringAcre);
    var totalLandValue = priceNumAcre*(totalInSft/43520);
    var ratePerSquare = priceNumAcre*25;
    var ratePerAcre = priceNumAcre;
    var ratePerKanal = ratePerAcre/8;
    var ratePerMarla = ratePerAcre/160;
    var ratePerSarsai = ratePerAcre/1439.996;
    var ratePerSft = ratePerAcre/43520;
    para3.innerHTML = "<span class='span2'>Total Land Value</span> <br>"+"<span class='span2'>Rs. "+totalLandValue +"</span>"+ "<br><hr /> Rate Per Square<br>"+ratePerSquare + "<br> <hr />Rate Per Acre<br>"+ratePerAcre + "<br> <hr />Rate Per Kanal<br>" + ratePerKanal + "<br> <hr />Rate Per Marla<br>" + ratePerMarla + "<br> <hr />Rate Per Sarsai<br>" + ratePerSarsai.toFixed(5) + "<br> <hr />Rate Per SFT<br>" + ratePerSft.toFixed(6);

}else if(selectedValue === "kanal"){
    var priceStringKanal = document.getElementById("price").value;
    var priceNumKanal = Number(priceStringKanal);
    var totalLandValue = priceNumKanal*(totalInSft/5440);
    var ratePerSquare = priceNumKanal*200;
    var ratePerAcre = priceNumKanal*8;
    var ratePerKanal = priceNumKanal;
    var ratePerMarla = priceNumKanal/20;
    var ratePerSarsai = priceNumKanal/180;
    var ratePerSft = priceNumKanal/5440;
    para3.innerHTML = "<span class='span2'>Total Land Value</span> <br>"+"<span class='span2'>Rs. "+totalLandValue +"</span>"+ "<br><hr /> Rate Per Square<br>"+ratePerSquare + "<br> <hr />Rate Per Acre<br>"+ratePerAcre + "<br> <hr />Rate Per Kanal<br>" + ratePerKanal + "<br> <hr />Rate Per Marla<br>" + ratePerMarla + "<br> <hr />Rate Per Sarsai<br>" + ratePerSarsai.toFixed(5) + "<br> <hr />Rate Per SFT<br>" + ratePerSft.toFixed(6);

} else if(selectedValue === "marla"){
    var priceStringMarla = document.getElementById("price").value;
    var priceNumMarla = Number(priceStringMarla);
    var totalLandValue = priceNumMarla*(totalInSft/272);
    var ratePerSquare = priceNumMarla*4000;
    var ratePerAcre = priceNumMarla*160;
    var ratePerKanal = priceNumMarla*20;
    var ratePerMarla = priceNumMarla;
    var ratePerSarsai = priceNumMarla/9;
    var ratePerSft = priceNumMarla/272;
    para3.innerHTML = "<span class='span2'>Total Land Value</span> <br>"+"<span class='span2'>Rs. "+totalLandValue +"</span>"+ "<br><hr /> Rate Per Square<br>"+ratePerSquare + "<br> <hr />Rate Per Acre<br>"+ratePerAcre + "<br> <hr />Rate Per Kanal<br>" + ratePerKanal + "<br> <hr />Rate Per Marla<br>" + ratePerMarla + "<br> <hr />Rate Per Sarsai<br>" + ratePerSarsai.toFixed(5) + "<br><hr /> Rate Per SFT<br>" + ratePerSft.toFixed(6);

} else if(selectedValue === "sarsai"){
    var priceStringSarsai = document.getElementById("price").value;
    var priceNumSarsai = Number(priceStringSarsai);
    var totalLandValue = priceNumSarsai*(totalInSft/30.2223);
    var ratePerSquare = priceNumSarsai*35999.907;
    var ratePerAcre = priceNumSarsai*1439.996;
    var ratePerKanal = priceNumSarsai*180;
    var ratePerMarla = priceNumSarsai*9;
    var ratePerSarsai = priceNumSarsai;
    var ratePerSft = priceNumSarsai/30.2223;
   para3.innerHTML = "<span class='span2'>Total Land Value</span> <br>"+"<span class='span2'>Rs. "+totalLandValue +"</span>"+ "<br><hr /> Rate Per Square<br>"+ratePerSquare + "<br> <hr />Rate Per Acre<br>"+ratePerAcre + "<br> <hr />Rate Per Kanal<br>" + ratePerKanal + "<br> <hr />Rate Per Marla<br>" + ratePerMarla + "<br> <hr />Rate Per Sarsai<br>" + ratePerSarsai.toFixed(5) + "<br> <hr />Rate Per SFT<br>" + ratePerSft.toFixed(6);

} else if(selectedValue === "sft"){
    var priceStringSft = document.getElementById("price").value;
    var priceNumSft = Number(priceStringSft);
    var totalLandValue = priceNumSft*totalInSft;
    var ratePerSquare = priceNumSft*1088000;
    var ratePerAcre = priceNumSft*43520;
    var ratePerKanal = priceNumSft*5440;
    var ratePerMarla = priceNumSft*272;
    var ratePerSarsai = priceNumSft*30.2223;
    var ratePerSft = priceNumSft;
   para3.innerHTML = "<span class='span2'>Total Land Value</span> <br>"+"<span class='span2'>Rs. "+totalLandValue + "</span>"+"<br><hr /> Rate Per Square<br>"+ratePerSquare + "<br> <hr />Rate Per Acre<br>"+ratePerAcre + "<br> <hr />Rate Per Kanal<br>" + ratePerKanal + "<br> <hr />Rate Per Marla<br>" + ratePerMarla + "<br> <hr />Rate Per Sarsai<br>" + ratePerSarsai.toFixed(5) + "<br> <hr />Rate Per SFT<br>" + ratePerSft.toFixed(6);

};




};

