function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
    let message;
    // Change code below this line
    const totalPrice = pricePerDroid + orderedQuantity;
    // Change code above this line
    if (totalPrice > customerCredits){
      message = "Insufficient funds!";
    }
    else {
      message = "You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left";
    }
    return message;
  }
  