module.exports = {
    newHowDo:
        async (req, res) => {
            const db = req.app.get('db')

            const {user_id, category, description, title} = req.body

            await db.add_how_do(user_id, category, description, title)

            res.status(200).send('HowDo added successfully!')
        }
}