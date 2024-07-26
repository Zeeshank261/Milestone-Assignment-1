function billSplitter(costOfDishes, numberOfPeople) {
    // const totalBill = costOfDishes.reduce((total, cost) => total + cost, 0);
    // OR we can use a loop
    let totalBill = 0;
    for (let i = 0; i < costOfDishes.length; i++) {
        totalBill += costOfDishes[i];
    }
    const billPerPerson = totalBill / numberOfPeople;
    return {
        totalBill,
        billPerPerson
    };
}