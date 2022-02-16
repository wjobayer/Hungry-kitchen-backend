const getAdmin = async (req, res) =>{
    try {
        res.json("In The name of Allah")
    } catch (error) {
        res.status(200).json(error.message)
    }

}

module.exports = {
    getAdmin,
}