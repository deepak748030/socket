const userModel = require('../models/userModel');


const loginHandler = async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(500).send({
            success: false,
            msg: 'fill all fields'
        })
    }

    const user = await userModel.findOne({ email });
    if (!user) {
        return res.status(404).send({
            success: false,
            msg: 'email not found'
        })
    }
    if (userModel.password !== password) {
        return res.status(404).send({
            success: false,
            msg: 'password not match'
        })
    }
    res.status(200).json({ success: true, msg: 'Login successful', user });




}

const registerHandler = async (req, res) => {
    const { email, password, name } = req.body;

    try {

        if (!email || !password || !name) {
            return res.status(404).send({
                success: false,
                msg: 'fill all fields'
            })


        }
        const userExists = await userModel.findOne({ email });
        if (userExists) {
            return res.status(404).send({
                success: false,
                msg: 'email already available'
            })
        }

        const newUser = new userModel({ email, password, name });
        await newUser.save()
        res.status(201).send({
            success: 'false',
            msg: 'user created'
        })



    } catch (error) {
        console.log(error)
    }

}

module.exports = { loginHandler, registerHandler }