let choices = document.querySelectorAll(".allBtns");
let popup = document.getElementById("checkoutpopup");
var totalOrder = [];
var checkoutItems = [];
var totalPrice = 0;
var numofItems = 0;
var newtext = "";

for(let i=0;i<choices.length;i++){
    choices[i].addEventListener("click", function (e){

        if (this.id === "chickenwrap"){
            var chickenWrapOrder = {
                "item" : "Chicken Wraps",
                "number" : 0,
                "price" : 30
            };

            var noOfChickenWraps = +prompt("How many Chicken Wraps do you want to order?");

            if(noOfChickenWraps != null){
                if (isNaN(noOfChickenWraps) === false){
                    chickenWrapOrder.number = noOfChickenWraps;
                    totalOrder.push(chickenWrapOrder);
                    totalPrice += (noOfChickenWraps*chickenWrapOrder.price);
                    numofItems += noOfChickenWraps;
                    document.getElementById("counter").innerHTML = numofItems+" items";
                    document.getElementById("cartprice").innerHTML = "R"+totalPrice;
                }
                else{
                    alert("Please enter a digit value!!!")
                }
            }
        }
        else if (this.id === "chickenwings"){
            var chickenWingsOrder = {
                "item" : "Chicken Wings",
                "number" : 0,
                "price" : 0
            };

            var noOfChickenWings = +prompt("Do you want to order 7 or 10 Chicken Wings(R70)?");

            if (noOfChickenWings != null){
                if(noOfChickenWings === 7 || noOfChickenWings === 10){
                    if(noOfChickenWings === 7){
                        chickenWingsOrder.price = 50;
                    }
                    else if(noOfChickenWings === 10){
                        chickenWingsOrder.price = 70;
                    }
                    chickenWingsOrder.number = noOfChickenWings;
                    totalOrder.push(chickenWingsOrder);
                    totalPrice += chickenWingsOrder.price;
                    numofItems ++;
                    document.getElementById("counter").innerHTML = numofItems+" items";
                    document.getElementById("cartprice").innerHTML = "R"+totalPrice;
                }
                else{
                    alert("Please enter 7 or 10!!!");
                }
            }
        }
        else if (this.id === "beefworswings"){
            var beefWorsWingsOrder = {
                "item" : "Beef, Wors and Wings",
                "number" : 0,
                "price" : 150
            };

            var noOfBeefWorsWings = +prompt("How many Beef, Wors and Wings Platters do you want to order?");

            if (noOfBeefWorsWings != null){
                if(isNaN(noOfBeefWorsWings) === false){
                    beefWorsWingsOrder.number = noOfBeefWorsWings;
                    totalOrder.push(beefWorsWingsOrder);
                    totalPrice += (noOfBeefWorsWings*beefWorsWingsOrder.price);
                    numofItems += noOfBeefWorsWings;
                    document.getElementById("counter").innerHTML = numofItems+" items";
                    document.getElementById("cartprice").innerHTML = "R"+totalPrice;
                }
                else{
                    alert("Please enter a digit value!!!");
                }
            }
        }
        else if (this.id === "beefwrap"){
            var beefWrapOrder = {
                "item" : "Beef Wraps",
                "number" : 0,
                "price" : 35
            };

            var noOfBeefWraps = +prompt("How many Beef Wraps do you want to order?");

            if (noOfBeefWraps != null){
                if(isNaN(noOfBeefWraps) === false){
                    beefWrapOrder.number = noOfBeefWraps;
                    totalOrder.push(beefWrapOrder);
                    totalPrice += (noOfBeefWraps*beefWrapOrder.price);
                    numofItems += noOfBeefWraps;
                    document.getElementById("counter").innerHTML = numofItems+" items";
                    document.getElementById("cartprice").innerHTML = "R"+totalPrice;
                }
                else{
                    alert("Please enter a digit value!!!");
                }
            }
        }
        else if (this.id === "sandwich"){
            var sandwichOrder = {
                "item" : "Loxion Sandwich",
                "number" : 0,
                "price" : 45
            };

            var noOfSandwich = +prompt("How many Loxion Sandwiches do you want to order?");

            if (noOfSandwich != null){
                if(isNaN(noOfSandwich) === false){
                    sandwichOrder.number = noOfSandwich;
                    totalOrder.push(sandwichOrder);
                    totalPrice += (noOfSandwich*sandwichOrder.price);
                    numofItems += noOfSandwich;
                    document.getElementById("counter").innerHTML = numofItems+" items";
                    document.getElementById("cartprice").innerHTML = "R"+totalPrice;
                }
                else{
                    alert("Please enter a digit value!!!");
                }
            }
        }
        else if (this.id === "wrapwingscombo"){
            var wrapWingsComboOrder = {
                "item" : "Wrap and Wings Combo",
                "number" : 0,
                "price" : 100
            };

            var noOfWrapWingsCombo = +prompt("How many Wrap and Wings Combo do you want to order?");

            if (noOfWrapWingsCombo != null){
                if(isNaN(noOfWrapWingsCombo) === false){
                    wrapWingsComboOrder.number = noOfWrapWingsCombo;
                    totalOrder.push(wrapWingsComboOrder);
                    totalPrice += (noOfWrapWingsCombo*wrapWingsComboOrder.price);
                    numofItems += noOfWrapWingsCombo;
                    document.getElementById("counter").innerHTML = numofItems+" items";
                    document.getElementById("cartprice").innerHTML = "R"+totalPrice;
                }
                else{
                    alert("Please enter a digit value!!!");
                }
            }
        }
        else if (this.id === "savanna"){
            var savannaOrder = {
                "item" : "",
                "number" : 0,
                "price" : 0
            };

            var singleOr6Pack = prompt("Do you want to order a single Savanna Dry ciders or 6 pack(R110)?").trim();

            if (singleOr6Pack != null){
                if(singleOr6Pack === "single" || singleOr6Pack === "6 pack"){
                    if(singleOr6Pack === "single"){
                        var noOfSingleSavanna = +prompt("How many single Savanna Dry ciders do you want to order?");
                        if(noOfSingleSavanna != null){
                            if(isNaN(noOfSingleSavanna) === false){
                                savannaOrder.item = "Savanna Dry Single";
                                savannaOrder.number = noOfSingleSavanna;
                                savannaOrder.price = 20;
                                totalOrder.push(savannaOrder);
                                totalPrice += (noOfSingleSavanna*savannaOrder.price);
                                numofItems += noOfSingleSavanna;
                                document.getElementById("counter").innerHTML = numofItems+" items";
                                document.getElementById("cartprice").innerHTML = "R"+totalPrice;
                            }
                            else{
                                alert("Please enter a digit value!!!");
                            }
                        }
                    }
                    else if(singleOr6Pack === "6 pack"){
                        var noOfSavanna6Packs = +prompt("How many 6 packs of Savanna Dry ciders do you want to order?");
                        if(noOfSavanna6Packs != null){
                            if(isNaN(noOfSavanna6Packs) === false){
                                savannaOrder.item = "Savanna Dry 6 Pack";
                                savannaOrder.number = noOfSavanna6Packs;
                                savannaOrder.price = 110;
                                totalOrder.push(savannaOrder);
                                totalPrice += (noOfSavanna6Packs*savannaOrder.price);
                                numofItems += noOfSavanna6Packs;
                                document.getElementById("counter").innerHTML = numofItems+" items";
                                document.getElementById("cartprice").innerHTML = "R"+totalPrice;
                            }
                            else{
                                alert("Please enter a digit value!!!");
                            }
                        }
                    }
                }
                else{
                    alert("Please enter single or 6 pack!!!");
                }
            }
        }
        else if (this.id === "amstel"){
            var amstelOrder = {
                "item" : "",
                "number" : 0,
                "price" : 0
            };

            var singleOr6Pack = prompt("Do you want to order a single Amstel Beers or 6 pack(R110)?").trim();

            if (singleOr6Pack != null){
                if(singleOr6Pack === "single" || singleOr6Pack === "6 pack"){
                    if(singleOr6Pack === "single"){
                        var noOfSingleAmstel = +prompt("How many single Amstel Beers do you want to order?");
                        if(noOfSingleAmstel != null){
                            if(isNaN(noOfSingleAmstel) === false){
                                amstelOrder.item = "Amstel Beer Single";
                                amstelOrder.number = noOfSingleAmstel;
                                amstelOrder.price = 20;
                                totalOrder.push(amstelOrder);
                                totalPrice += (noOfSingleAmstel*amstelOrder.price);
                                numofItems += noOfSingleAmstel;
                                document.getElementById("counter").innerHTML = numofItems+" items";
                                document.getElementById("cartprice").innerHTML = "R"+totalPrice;
                            }
                            else{
                                alert("Please enter a digit value!!!");
                            }
                        }
                    }
                    else if(singleOr6Pack === "6 pack"){
                        var noOfAmstel6Packs = +prompt("How many 6 packs of Amstel Beers do you want to order?");
                        if(noOfAmstel6Packs != null){
                            if(isNaN(noOfAmstel6Packs) === false){
                                amstelOrder.item = "Amstel 6 Pack";
                                amstelOrder.number = noOfAmstel6Packs;
                                amstelOrder.price = 110;
                                totalOrder.push(amstelOrder);
                                totalPrice += (noOfAmstel6Packs*amstelOrder.price);
                                numofItems += noOfAmstel6Packs;
                                document.getElementById("counter").innerHTML = numofItems+" items";
                                document.getElementById("cartprice").innerHTML = "R"+totalPrice;
                            }
                            else{
                                alert("Please enter a digit value!!!");
                            }
                        }
                    }
                }
                else{
                    alert("Please enter single or 6 pack!!!");
                }
            }
        }
        else if (this.id === "hennessy"){
            var hennyOrder = {
                "item" : "Hennessy",
                "number" : 0,
                "price" : 550
            };

            var noOfHenny = +prompt("How many Hennessy whiskeys do you want to order?");

            if (noOfHenny != null){
                if(isNaN(noOfHenny) === false){
                    hennyOrder.number = noOfHenny;
                    totalOrder.push(hennyOrder);
                    totalPrice += (noOfHenny*hennyOrder.price);
                    numofItems += noOfHenny;
                    document.getElementById("counter").innerHTML = numofItems+" items";
                    document.getElementById("cartprice").innerHTML = "R"+totalPrice;
                }
                else{
                    alert("Please enter a digit value!!!");
                }
            }
        }
        else if (this.id === "redsquare"){
            var redSquareOrder = {
                "item" : "",
                "number" : 0,
                "price" : 0
            };

            var singleOr6Pack = prompt("Do you want to order a single Red Square Ice cooler or 6 pack(R160)?").trim();

            if (singleOr6Pack != null){
                if(singleOr6Pack === "single" || singleOr6Pack === "6 pack"){
                    if(singleOr6Pack === "single"){
                        var noOfSingleRedSquares = +prompt("How many single Red Square Ice coolers do you want to order?");
                        if(noOfSingleRedSquares != null){
                            if(isNaN(noOfSingleRedSquares) === false){
                                redSquareOrder.item = "Red Square Ice Single";
                                redSquareOrder.number = noOfSingleRedSquares;
                                redSquareOrder.price = 30;
                                totalOrder.push(redSquareOrder);
                                totalPrice += (noOfSingleRedSquares*redSquareOrder.price);
                                numofItems += noOfSingleRedSquares;
                                document.getElementById("counter").innerHTML = numofItems+" items";
                                document.getElementById("cartprice").innerHTML = "R"+totalPrice;
                            }
                            else{
                                alert("Please enter a digit value!!!");
                            }
                        }
                    }
                    else if(singleOr6Pack === "6 pack"){
                        var noOfRedSquare6Packs = +prompt("How many 6 packs of Red Square Ice coolers do you want to order?");
                        if(noOfRedSquare6Packs != null){
                            if(isNaN(noOfRedSquare6Packs) === false){
                                redSquareOrder.item = "Red Square Ice 6 Pack";
                                redSquareOrder.number = noOfRedSquare6Packs;
                                redSquareOrder.price = 160;
                                totalOrder.push(redSquareOrder);
                                totalPrice += (noOfRedSquare6Packs*redSquareOrder.price);
                                numofItems += noOfRedSquare6Packs;
                                document.getElementById("counter").innerHTML = numofItems+" items";
                                document.getElementById("cartprice").innerHTML = "R"+totalPrice;
                            }
                            else{
                                alert("Please enter a digit value!!!");
                            }
                        }
                    }
                }
                else{
                    alert("Please enter single or 6 pack!!!");
                }
            }
        }
        else if (this.id === "blacklabel"){
            var blackLabelOrder = {
                "item" : "",
                "number" : 0,
                "price" : 0
            };

            var singleOr6Pack = prompt("Do you want to order a single Black Label Beers or 6 pack(R110)?").trim();

            if (singleOr6Pack != null){
                if(singleOr6Pack === "single" || singleOr6Pack === "6 pack"){
                    if(singleOr6Pack === "single"){
                        var noOfSingleBlackLabel = +prompt("How many single Black Label Beers do you want to order?");
                        if(noOfSingleBlackLabel != null){
                            if(isNaN(noOfSingleBlackLabel) === false){
                                blackLabelOrder.item = "Black Label Beer Single";
                                blackLabelOrder.number = noOfSingleBlackLabel;
                                blackLabelOrder.price = 20;
                                totalOrder.push(blackLabelOrder);
                                totalPrice += (noOfSingleBlackLabel*blackLabelOrder.price);
                                numofItems += noOfSingleBlackLabel;
                                document.getElementById("counter").innerHTML = numofItems+" items";
                                document.getElementById("cartprice").innerHTML = "R"+totalPrice;
                            }
                            else{
                                alert("Please enter a digit value!!!");
                            }
                        }
                    }
                    else if(singleOr6Pack === "6 pack"){
                        var noOfBlackLabel6Packs = +prompt("How many 6 packs of Black Label Beers do you want to order?");
                        if(noOfBlackLabel6Packs != null){
                            if(isNaN(noOfBlackLabel6Packs) === false){
                                blackLabelOrder.item = "Black Label Beer 6 Pack";
                                blackLabelOrder.number = noOfBlackLabel6Packs;
                                blackLabelOrder.price = 110;
                                totalOrder.push(blackLabelOrder);
                                totalPrice += (noOfBlackLabel6Packs*blackLabelOrder.price);
                                numofItems += noOfBlackLabel6Packs;
                                document.getElementById("counter").innerHTML = numofItems+" items";
                                document.getElementById("cartprice").innerHTML = "R"+totalPrice;
                            }
                            else{
                                alert("Please enter a digit value!!!");
                            }
                        }
                    }
                }
                else{
                    alert("Please enter single or 6 pack!!!");
                }
            }
        }
        else if (this.id === "jameson"){
            var jamesOrder = {
                "item" : "Jameson",
                "number" : 0,
                "price" : 450
            };

            var noOfJames = +prompt("How many Jameson whiskeys do you want to order?");

            if (noOfJames != null){
                if(isNaN(noOfJames) === false){
                    jamesOrder.number = noOfJames;
                    totalOrder.push(jamesOrder);
                    totalPrice += (noOfJames*jamesOrder.price);
                    numofItems += noOfJames;
                    document.getElementById("counter").innerHTML = numofItems+" items";
                    document.getElementById("cartprice").innerHTML = "R"+totalPrice;
                }
                else{
                    alert("Please enter a digit value!!!");
                }
            }
        }
    });
}

function openCheckout(){

    if (totalOrder.length > 0){
        for(i=0;i<totalOrder.length;i++){
             checkoutItems[i] = (totalOrder[i].number+" "+totalOrder[i].item+" R"+totalOrder[i].price+" each.");
        }
        alert("Order Confirmed!!!");
        popup.classList.add("open-checkout");
    }
    else{
        alert("No items ordered. Please make an order!!!");
    }
    checkoutItems.push(("Total Price: R"+totalPrice).bold());
    newtext = checkoutItems.join('<br><br>');
    document.getElementById("checkoutitems").innerHTML = newtext;
}

function closeCheckout(){
    totalOrder = [];
    checkoutItems = [];
    totalPrice = 0;
    numofItems = 0;
    newtext = "";
    document.getElementById("cartprice").innerHTML = "R0,00";
    document.getElementById("counter").innerHTML = "0 items";
    popup.classList.remove("open-checkout");
}