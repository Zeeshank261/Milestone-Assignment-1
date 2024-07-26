const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    const discount = originalPrice - discountedPrice;
    const percentage = (discount / originalPrice) * 100;
    return percentage.toFixed(2);
};

const originalPrice = 80;
const discountedPrice = 64;
const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
console.log(`The discount percentage is ${discountPercentage}%`);