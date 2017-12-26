    function vegetableShop([arg1,arg2,arg3,arg4]) {
        let vegetablePrice = Number(arg1);
        let fruitPrice = Number(arg2);
        let vegetableQuantity = Number(arg3);
        let fruitQuantity = Number(arg4); 

        console.log((vegetablePrice * vegetableQuantity + fruitPrice * fruitQuantity) / 1.94);                  
    }

vegetableShop(["0.194", "19.4", "10", "10"]);
vegetableShop(["1.5", "2.5", "10", "10"]);    