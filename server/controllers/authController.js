const bcrypt = require('bcrypt')

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db');
        const {username, password, email} = req.body;

        const existingUser = await db.check_user(username);
        if(existingUser[0]) {
            return res.status(409).send('This user already exists!')
        }
        try {
            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(password, salt)

            const newUser = await db.register_user([username, hash, email])

            delete newUser[0].hash
            req.session.user = newUser[0]
            return res.status(200).send(req.session.user)
        } catch (error) {
            return res.status(500).send('Could not complete registration! Please try again!')
        }
    },
    login: async (req, res) => {
        const db = req.app.get('db');
        const {username, password} = req.body;

        const user = await db.check_user(username)
        if (!user[0]) {
            return res.status(404).send('Username not found!')
        } else {
            const authenticated = bcrypt.compareSync(password, user[0].password)
            if (authenticated) {
                req.session.user = {
                    user_id: user[0].id,
                    username: user[0].username,
                    is_admin: user[0].is_admin
                }
                res.status(200).send(req.session.user)
            } else {
                res.status(403).send('Username or password incorrect')
            }
        }
    },
    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200)
    },
    setUser: (req, res) => {
        if (!req.session.user) {
            return res.status(401).send('User not found')
        }
        res.status(200).send(req.session.user)
    },
}