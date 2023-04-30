function discountPrices(prices, discount) {
    const discounted = [];
    const length = prices.length;

    for(let i = 0; i < length; i++) {
        const discountedPrice = prices[i] * (1-discount);
        discounted.push(discountedPrice);
    }

    return discounted;
}

discountPrices([100, 200, 300], 0.5);
