function fetchOrder(orderId, callback) {
  console.log("\nFetching order...");

  setTimeout(() => {
    const success = true; 

    if (success) {
      callback(null, { orderId, item: "Pizza", price: 599 });
    } else {
      callback("Failed to fetch order details", null);
    }
  }, 2000);
}



function processPayment(order) {
  console.log("\nProcessing payment...");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const paymentSuccess = true; 

      if (paymentSuccess) {
        resolve(`Payment of ₹${order.price} for ${order.item} successful!`);
      } else {
        reject("Payment failed!");
      }
    }, 2000);
  });
}



async function generateInvoice(paymentMessage) {
  console.log("\nGenerating invoice...");

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Invoice Generated Successfully!\nDetails: ${paymentMessage}`);
    }, 2000);
  });
}



console.log("Order Processing Started...");

fetchOrder(101, (err, orderDetails) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Order Retrieved:", orderDetails);

  processPayment(orderDetails)
    .then((paymentStatus) => {
      console.log(paymentStatus);
      return generateInvoice(paymentStatus);
    })
    .then((invoice) => {
      console.log(invoice);
      console.log("\nOrder Completed Successfully!");
    })
    .catch((error) => {
      console.log(error);
    });
});
