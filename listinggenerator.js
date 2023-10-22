// Generate random latitude and longitude within Singapore boundaries
function generateRandomLocation() {
    const minLat = 1.17;
    const maxLat = 1.48;
    const minLng = 103.6;
    const maxLng = 104.03;
    const randomLat = Math.random() * (maxLat - minLat) + minLat;
    const randomLng = Math.random() * (maxLng - minLng) + minLng;
    return { lat: randomLat, lng: randomLng };
  }
  
  // Generate a random product with unique IDs
  function generateRandomProduct(productID) {
    const productNames = [
      "Vintage T-Shirt",
      "Joggers",
      "Supreme Tee",
      "Jacket",
      "Thrasher Hoodie",
      "Polo Ralph Jacket",
      "Green Cargo Shorts",
      "Army Green Cargo Pants",
      "Nike T-Shirt",
      "Adidas T-Shirt",
      "Under Armour Dri-Fit Tshirt",
      "Puma T-Shirt",
      "Cotton Black T-Shirt",
      "Levi's Jeans",
      "Plaid Shirt",
      "Brown Trousers",
      "Denim Jacket",
      "Flannel Shirt",
      "Hooded Sweatshirt",
      "Track Pants"

      // Add more product names here (at least 20 varieties).
    ];
    const randomProductName = productNames[Math.floor(Math.random() * productNames.length)];
  
    const productDescriptions = {
      "Vintage T-Shirt": "A classic vintage T-shirt in great condition.",
      "Joggers": "Comfortable and stylish joggers for everyday wear.",
      "Supreme Tee": "An authentic Supreme T-shirt with a unique design.",
      "Jacket": "A trendy jacket to keep you warm during the winter.",
      "Thrasher Hoodie": "A stylish Thrasher hoodie for skateboarding enthusiasts.",
      "Polo Ralph Jacket": "A high-quality Polo Ralph Lauren jacket for a classic look.",
      "Green Cargo Shorts": "Casual and durable green cargo shorts for outdoor activities.",
      "Army Green Cargo Pants": "Military-inspired army green cargo pants for a rugged style.",
      "Nike T-Shirt": "A comfortable Nike T-shirt for sports and leisure.",
      "Adidas T-Shirt": "An Adidas T-shirt featuring the iconic three stripes.",
      "Under Armour Dri-Fit Tshirt": "An Under Armour Dri-Fit T-shirt to keep you dry during workouts.",
      "Puma T-Shirt": "Stylish Puma t-shirt for a sporty and fashionable look.",
      "Cotton Black T-Shirt": "A black t-shirt that is easy to match any outfit.",
      "Levi's Jeans": "Durable and classic Levi's jeans for everyday wear.",
      "Plaid Shirt": "A trendy plaid shirt for a fashionable and casual look.",
      "Brown Trousers": "Casual and comfortable trousers for leisure activities.",
      "Denim Jacket": "A classic denim jacket that pairs well with any outfit.",
      "Flannel Shirt": "A comfortable and versatile flannel shirt for a casual style.",
      "Hooded Sweatshirt": "A hooded sweatshirt for a relaxed and cozy look.",
      "Track Pants": "Casual and comfortable track pants for athletic and leisure activities."

      // Add more product descriptions related to product names here.
    };
  
    const randomProductDescription = productDescriptions[randomProductName];
  
    const randomUserIDs = Array.from({ length: 20 }, (_, index) => index + 1);
    const randomUserIndex = Math.floor(Math.random() * randomUserIDs.length);
    const randomUserID = randomUserIDs[randomUserIndex];
    const randomUsername = `user${randomUserID}`;
  
    const randomPrice = (Math.random() * (50 - 10) + 10).toFixed(2);
    const randomCategory = ["shirt", "pants", "jacket", "hoodie"];
    const randomAddress = {
      street: "Random Street",
      geo: generateRandomLocation(),
    };
  
    return {
      product_id: productID,
      product_name: randomProductName,
      product_description: randomProductDescription,
      product_img_url: "image_url",
      price: randomPrice,
      product_category: randomCategory,
      user_id: randomUserID,
      username: randomUsername,
      address: randomAddress,
    };
  }
  
  const thriftedClothingItems = [];
  const usedProductNames = new Set();
  let productID = 1;
  
  while (thriftedClothingItems.length < 20) {
    const randomProduct = generateRandomProduct(productID);
  
    // Check for user_id and address/username matching
    const matchingProducts = thriftedClothingItems.filter(
      (product) =>
        product.user_id === randomProduct.user_id &&
        product.address.street === randomProduct.address.street &&
        product.username === randomProduct.username
    );
  
    if (matchingProducts.length === 0) {
      thriftedClothingItems.push(randomProduct);
      usedProductNames.add(randomProduct.product_name);
      productID++;
    }
  }
  
  return thriftedClothingItems;
  