exports.middleware_checkapikey = async (req, res, next) => {
    try {
        const api_key = req.header('x-api-key')     

        if(api_key !== process.env.API_KEY) {
            return res.status(400).json({
                message: 'No API Key'
            })
        }

        next()

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}