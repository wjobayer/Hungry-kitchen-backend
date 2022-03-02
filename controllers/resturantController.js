const getResturant = async (req, res) =>{
    try {
        res.status(200).json("This is a foodPage page") 
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const addFood = async(req, res) =>{
    try {
        res.status(200).json("addFood page")
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = {
    getResturant,
    addFood
}