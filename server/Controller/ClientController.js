const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const Client = require('../Model/Client');

//@desc POST register
//@route /api/register
//@access private
const register = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400);
        throw new Error('Please add all fields');
    }
    const clientExists = await Client.findOne({ email });
    if (clientExists) {
        res.status(400);
        throw new Error('Client already exists');
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const client = await Client.create({
        name,
        email,
        password: hashedPassword
    });
    if (client) {
        res.status(201).json({
            name: client.name,
            message: 'Create account successfully'
        });
    } else {
        res.status(400).json({
            message: 'Invalid user data'
        });
    }
});

// @desc POST login
// @route /api/login
// access public
const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const client = await Client.findOne({ email });

    if (client && (await bcrypt.compare(password, client.password))) {
        res.json({
            name: client.name,
            message: 'User loged successfully'
        });
    } else {
        res.status(400).json({
            message: 'Invalid user data'
        });
    }
});

module.exports = {
    register,
    login
};
