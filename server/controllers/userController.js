module.exports = {
    setUser: (req, res) => {
        if (!req.session.user) {
            return res.status(401).send("User not found.")
        }
        delete req.session.user.pw
        res.status(200).send(req.session.user)
    },
}