function dayBuilder(min_hour, max_hour, day) {

    let array_hours = []
    
    for (let x = min_hour; x <= max_hour; x++) {
        array_hours.push(x)
    }

    let jHours = {
        day_week: day, 
        hours: array_hours
    }

    return jHours
}

module.exports = dayBuilder