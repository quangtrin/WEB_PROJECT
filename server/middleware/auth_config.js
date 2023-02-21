const verifyConfig = (req, res, next) => {
    const token = req.header("Authorization");
    if( token !== process.env.PASSWORD_TOKEN ){
        return res.sendStatus(401);
    }
    next();
}

export default verifyConfig