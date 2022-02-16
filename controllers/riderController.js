const getRider = async (req, res) =>{
    try {
        res.status(200).json("This is a rider page") 
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = {
    getRider,
}