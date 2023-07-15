const items = [
    {
        "id": 1,
        "name": "Cheeseburger",
        "price": 5.99,
        "imgSrc": "https://source.unsplash.com/random/1920x1080/?cheeseburger"
    },
    {
        "id": 2,
        "name": "Pizza",
        "price": 8.99,
        "imgSrc": "https://source.unsplash.com/random/1920x1080/?pizza"
    },
    {
        "id": 3,
        "name": "Tacos",
        "price": 3.99,
        "imgSrc": "https://source.unsplash.com/random/1920x1080/?tacos"
    },
    {
        "id": 4,
        "name": "Sushi",
        "price": 11.99,
        "imgSrc": "https://source.unsplash.com/random/1920x1080/?sushi"
    },
    {
        "id": 5,
        "name": "Pasta",
        "price": 9.99,
        "imgSrc": "https://source.unsplash.com/random/1920x1080/?pasta"
    },
    {
        "id": 6,
        "name": "Fried Chicken",
        "price": 7.99,
        "imgSrc": "https://source.unsplash.com/random/1920x1080/?fried_chicken"
    },
    {
        "id": 7,
        "name": "Grilled Cheese Sandwich",
        "price": 4.99,
        "imgSrc": "https://source.unsplash.com/random/1920x1080/?grilled_cheese_sandwich"
    },
    {
        "id": 8,
        "name": "Steak",
        "price": 15.99,
        "imgSrc": "https://source.unsplash.com/random/1920x1080/?steak"
    },
    {
        "id": 9,
        "name": "Caesar Salad",
        "price": 6.99,
        "imgSrc": "https://source.unsplash.com/random/1920x1080/?caesar_salad"
    },
    {
        "id": 10,
        "name": "Fish and Chips",
        "price": 8.49,
        "imgSrc": "https://source.unsplash.com/random/1920x1080/?fish_and_chips"
    },
    {
        "id": 11,
        "name": "Ramen",
        "price": 9.49,
        "imgSrc": "https://source.unsplash.com/random/1920x1080/?ramen"
    },
    {
        "id": 12,
        "name": "Burrito",
        "price": 7.49,
        "imgSrc": "https://source.unsplash.com/random/1920x1080/?burrito"
    },
    {
        "id": 13,
        "name": "Pho",
        "price": 8.99,
        "imgSrc": "https://source.unsplash.com/random/1920x1080/?pho"
    },
    {
        "id": 14,
        "name": "Pad Thai",
        "price": 9.99,
        "imgSrc": "https://source.unsplash.com/random/1920x1080/?pad_thai"
    },
    {
        "id": 15,
        "name": "Gyro",
        "price": 6.49,
        "imgSrc": "https://source.unsplash.com/random/1920x1080/?gyro"
    },
    {
        "id": 16,
        "name": "Ice Cream",
        "price": 3.99,
        "imgSrc": "https://source.unsplash.com/random/1920x1080/?ice_cream"
    },
    {
        "id": 17,
        "name": "Smoothie",
        "price": 4.99,
        "imgSrc": "https://source.unsplash.com/random/1920x1080/?smoothie"
    },
    {
        "id": "18",
        "name": "Apple Pie",
        "price": 4.49,
        "imgSrc": "https://source.unsplash.com/random/1920x1080/?apple_pie"
    },
    {
        "id": 19,
        "name": "Chocolate Cake",
        "price": 5.49,
        "imgSrc": "https://source.unsplash.com/random/1920x1080/?chocolate_cake"
    },
    {
        "id": 20,
        "name": "Pancakes",
        "price": 4.99,
        "imgSrc": "https://source.unsplash.com/random/1920x1080/?pancakes"
    },
    {
        "id": 21,
        "name": "Cupcake",
        "price": 2.99,
        "imgSrc": "https://source.unsplash.com/random/1920x1080/?cupcake"
    },
    {
        "id": 22,
        "name": "Crepes",
        "price": 5.99,
        "imgSrc": "https://source.unsplash.com/random/1920x1080/?crepes"
    },
    {
        "id": 23,
        "name": "Club Sandwich",
        "price": 6.99,
        "imgSrc": "https://source.unsplash.com/random/1920x1080/?club_sandwich"
    },
    {
        "id": 24,
        "name": "Falafel",
        "price": 5.49,
        "imgSrc": "https://source.unsplash.com/random/1920x1080/?falafel"
    },
    {
        "id": 25,
        "name": "Curry",
        "price": 9.49,
        "imgSrc": "https://source.unsplash.com/random/1920x1080/?curry"
    }
]


function takeOrder() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve((items.slice(0, 3)));
        }, 2500);
    });
}

function orderprep() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ order_status: true, paid: false });
        }, 1500);

    });
}

function payorder() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ order_status: true, paid: true });
        }, 1000);

    });
}

function thankyouFnc() {
    alert("thankyou for eating with us today! ");
}


async function getMenu() {

    await addItemsToUi();

    let takeORderResponse = await takeOrder();
    let orderPrepResponse = await orderprep();
    let payOrderresponse = await payorder();
    if (payOrderresponse["paid"]) {
        thankyouFnc();
    }

    // let orderPrepresponse = setTimeout(orderprep());



}


function addItemsToUi() {
    const menuContainer = document.getElementById("menu-container");



    for (item of items) {
        let itemName = item["name"];
        let itemPrice = item["price"];
        let itemImage = item["imgSrc"];



        const menuItem = document.createElement("div");
        menuItem.className = "menu-item";
        menuItem.innerHTML = ` <div class="menu-item-top"> <img src="${itemImage}" alt=""></div>
                            <div class="menu-item-bottom">
                                <div class="menu-item-bottom-left">
                                    <span style="font-size: 18px; font-weight: 600px; background-color: #191D20;">${itemName}</span>
                                    <span style="background-color: #191D20; font-size: 14px;">$${itemPrice}/-</span>
                                </div>
                                <div class="menu-item.bottom-right" style="background-color: #191D20;">
                                    <img src="./resources/Group 3.png" alt="" style="width: 40px;">
                                </div>
                            </div>`
        menuContainer.appendChild(menuItem);


    }
    return new Promise((resolve) => {
        resolve();
    })

}

getMenu();

