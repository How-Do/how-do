const bcrypt = require('bcryptjs')

module.exports = {
  register: async (req, res) => {
    const db = req.app.get('db')
    const { username, profilePic, password, email } = req.body

    const existingUser = await db.check_user(username)
    if (existingUser[0]) {
      return res.status(409).send('Username already exists.')
    }
    try {
      const salt = bcrypt.genSaltSync(10)
      const hash = bcrypt.hashSync(password, salt)

      const newUser = await db.register_user([
        username,
        profilePic,
        hash,
        email,
      ])

      delete newUser[0].hash
      req.session.user = newUser[0]
      return res.status(200).send(req.session.user)
    } catch (error) {
      return res
        .status(500)
        .send('Could not complete registration. Please try again!')
    }
  },
  login: async (req, res) => {
    const db = req.app.get('db')
    const { username, password } = req.body

    const user = await db.check_user(username)
    if (!user[0]) {
      return res.status(404).send('Username or password incorrect.')
    } else {
      const authenticated = bcrypt.compareSync(password, user[0].password)
      if (authenticated) {
        req.session.user = {
          user_id: user[0].id,
          username: user[0].username,
          email: user[0].email,
          is_admin: user[0].is_admin,
          created_at: user[0].created_at,
          profile_pic: user[0].profile_pic,
          user_description: user[0].user_description,
        }
        res.status(200).send(req.session.user)
      } else {
        res.status(404).send('Username or password incorrect.')
      }
    }
  },
  logout: (req, res) => {
    req.session.destroy()
    res.sendStatus(200)
  },
  setUser: (req, res) => {
    if (!req.session.user) {
      return res.status(404).send('Please login.')
    }
    res.status(200).send(req.session.user)
  },
  updateUser: async ( req, res ) => {
    const db = req.app.get('db')
    const {userId, username, email, password, profilePic, userDescription} = req.body;
    console.log(req.body, "req.body")
    //console.log(req.session.user, "1")
    //console.log(req.session, "2")
    //const {user_id} = req.session.user 
    const id = userId 
    const user = await db.check_user(username)
    console.log(user, "user")
    
    if (password) {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    const updateUser = await db.update_user_info([id, username, email, hash, profilePic, userDescription])
    delete updateUser.hash
    req.session.user = updateUser[0]
    res.status(200).send(req.session.user) 
    } else {
        const updateUser = await db.update_user_info([id, username, email, user[0].password, profilePic, userDescription])
        delete updateUser.password
        req.session.user = updateUser
        res.status(200).send(req.session.user)
    }
}
}
