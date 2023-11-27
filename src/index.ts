function calculateIncome(income: number, age:number): number {
    if (income > 3_000 || age < 30)
        return 50_000
    return 10_000
}

calculateIncome(20_000, 80)