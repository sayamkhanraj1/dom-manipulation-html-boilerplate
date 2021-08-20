const div1Img = document.getElementById('first');
const div2Img = document.getElementById('second');
const div3Img = document.getElementById('third');

const img = document.getElementById('art');

const desc = document.getElementById('desc');
const price = document.getElementById('price');

const free = document.getElementById('free');
const express = document.getElementById('express');

const shipping = document.getElementById('shipping');

const total = document.getElementById('total');

free.addEventListener('click', function(){
    shipping.innerText = '5';
    updateTotal()
})
express.addEventListener('click', function(){
    shipping.innerText = '30';
    updateTotal()
})

// update total function

function updateTotal(){
    const shippingCharge = parseInt(shipping.innerText);
    const porductPrice = parseInt(price.innerText);
    const totalPrice = shippingCharge + porductPrice;
    total.innerText = totalPrice;
    
}


div1Img.addEventListener('click', function(){
    // Changing image
    img.src = 'images/1.jpg'
    // Changing discription
    desc.innerText= "First = Lorem ipsum dolor sit amet consectetur, adipisicing elit.dpoiupoi okdop okdp kqpwoek ojkewp wqoo dkoqpo ";
    // Changing price 
    price.innerText = '650$';
    // update total
    updateTotal()
})
div2Img.addEventListener('click', function(){
    // Changing image
    img.src = 'images/2.jpg'
    // Changing discription
    desc.innerText= "Second = Lorem ipsum dolor sit amet consectetur, adipisicing elit.dpoiupoi okdop okdp kqpwoek ojkewp wqoo dkoqpo"
    // Changing price 
    price.innerText = '550$'; 
    // update total
    updateTotal()
})
div3Img.addEventListener('click', function(){
    // Changing image
    img.src = 'images/3.jpg'
    // Changing discription
    desc.innerText= "Third = Lorem ipsum dolor sit amet consectetur, adipisicing elit.dpoiupoi okdop okdp kqpwoek ojkewp wqoo dkoqpo ";
    // Changing price 
    price.innerText = '330$';
    // update total
    updateTotal()
})

