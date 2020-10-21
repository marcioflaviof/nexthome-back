function dayBuilder(min_hour, max_hour) {

    let array_hours = []
    
    for (let x = min_hour; x <= max_hour; x++) {
        array_hours.push(x)
    }

    let jHours = {
        hours: array_hours
    }

    return jHours
}

module.exports = dayBuilder