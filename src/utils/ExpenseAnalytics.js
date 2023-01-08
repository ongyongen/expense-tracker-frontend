export const calculateTotalSpent = (allData) => {
    const totalSpent = allData.map(data => data.price).reduce((a, b) => a + b).toFixed(2)
    return totalSpent;
}

export const calculateAvgSpent = (startDate, endDate, allData) => {
    const seconds = new Date(endDate).getTime() - new Date(startDate).getTime()
    const days = seconds / (1000 * 3600 * 24)
    const total = calculateTotalSpent(allData)
    const avg = days != 0 ? (total / days).toFixed(2) : total
    return avg
}

export const findMostExpensiveItemAndPrice = (allData) => {
    const highestPrice =  Math.max(...allData.map(data => data.price))
    const index = allData.map(data => data.price).indexOf(highestPrice)
    const mostExpensiveItem = allData.map(data => [data.name, data.price])[index]
    return mostExpensiveItem
}

export const parseExpenseDateData = (allData) => {
    var chartData = {}
    console.log(allData)
    allData.forEach(data => {
        var category = data.category.name
        if (category in chartData) {
            chartData[category] += data.price
        } else {
            chartData[category] = data.price
        }        
    })

    var displayChartData = []
    for (const [key, value] of Object.entries(chartData)) {
        const displayData = {
            "category": key,
            "spending": value
        }
        displayChartData.push(displayData)
    }
    return displayChartData
}