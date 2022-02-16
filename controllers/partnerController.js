const getPartner = async (req, res) =>{
    try {
        res.status(200).json("This is a partner page") 
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = {
    getPartner,
}