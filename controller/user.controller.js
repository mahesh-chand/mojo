const User = require("../schema/user.schema");

const create = async (req, res) => {
    try {
        const user = new User(req.body)
        await user.save()
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err.message)
    }
}

const fetch = async (req, res) => {
    try {
        const data = await User.find();
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const update = async (req, res) => {
    try {
        await User.findOneAndUpdate({ _id: req.params.id }, req.body)
        res.status(200).json({ success: true })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const remove = async (req, res) => {
    try {
        await User.deleteOne({ _id: req.params.id })
        res.status(200).json({ success: true })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    create,
    fetch,
    update,
    remove
}