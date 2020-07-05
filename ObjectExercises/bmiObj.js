const mark = {
    fullName: 'Mark Frias',
    mass: 90,
    height: 1.9,
    calcBMI: function() {
        bmi = this.mass / (this.height * this.height)
        this.bmi = bmi.toPrecision(2)
        return this.bmi
    }
}

const john = {
    fullName: 'John Doe',
    mass: 85,
    height: 1.7,
    calcBMI: function() {
        bmi = this.mass / (this.height * this.height)
        this.bmi = bmi.toPrecision(2)
        return this.bmi
    }
}

if (mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.fullName} has a higher BMI (${mark.bmi}) than ${john.fullName}`)
} else if (mark.bmi < john.bmi) {
    console.log(`${john.fullName} has a higher BMI (${john.bmi}) than ${mark.fullName}`)
} else {
    console.log('They have the same BMI')
}