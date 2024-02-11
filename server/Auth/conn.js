const { default: mongoose } = require("mongoose")

const userAuth = async () => {
    try {
        await mongoose.connect(`${process.env.mongo_URI}`)
        console.log(`database connected `)
    } catch (error) {
        console.log(`not connected data`)
    }
}

module.exports = { userAuth }