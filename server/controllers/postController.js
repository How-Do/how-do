module.exports = {
    newHowDo:
        async (req, res) => {
            const db = req.app.get('db')

            const {user_id, category, description, title} = req.body

            await db.add_how_do(user_id, category, description, title)

            res.status(200).send('HowDo added successfully!')
        },
    getPosts: async (req, res) => {
        const db = req.app.get('db')
        const {search} = req.query
        // console.log(typeof search, 'search', search)

        if (search) {
            const check = await db.search_posts(search)
            db.search_posts(search)
                .then(posts => res.status(200).send(posts))
                .catch(error => res.status(500).send(error))

        } else {
            db.get_posts()
                .then(posts => res.status(200).send(posts))
                .catch(error => res.status(500).send(error))
        }
    },
    getPost: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params


        db.get_post(+id)
            .then(post => res.status(200).send(post[0]))
            .catch(error => res.status(500).send(error))
    },
    getCategories: (req, res) => {
        const db = req.app.get('db')

        db.get_categories()
            .then(categories => res.status(200).send(categories))
            .catch(error => res.status(500).send(error))
    }
}