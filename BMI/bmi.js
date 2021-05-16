
let bmi=(height,weight) => {
    result = weight / (height * height);
    return result;
}
console.log(bmi(168,54));


if( result < 0.00185 ){
  console.log("شما کمبود وزن دارید و لاغرید");
}

else if( result > 0.00185 && result <= 0.0025 ){
  console.log("شما دارای وزن نرمال و طبیعی هستید");
}

else if(result > 0.0025 && result <= 0.0030 ){
   console.log("شما دارای اضافه وزن هستید");
}
else if( result > 0.0030 && result <= 0.0035 ){
   console.log("شما دارای چاقی درجه یک(چاقی متوسط) هستید");
}
else if( result > 0.0035 && result <= 0.0040 ){
   console.log("شما دارای چاقی درجه دو(چاقی زیاد) هستید");
}
else if( result > 0.0040 ){
   console.log("شما دارای چاقی مرگبار هستید");
}


