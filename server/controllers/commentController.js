module.exports = {
    newComment:
        async (req, res) => {
            const db = req.app.get('db')

            const {user_id, post_id, comment, comment_pic} = req.body

            await db.add_comment(user_id, post_id, comment, comment_pic)

            .then(() => res.status(200).send('Comment added successfully!'))
            .catch((err) => res.status(500).send(err))
        },
    getComments: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        //console.log(typeof id, id);

        db.get_comments(+id)
            .then(comments => res.status(200).send(comments))
            .catch(error => res.status(500).send(error))
    },
    // getPost: (req, res) => {
    //     const db = req.app.get('db')
    //     const {id} = req.params
    //     console.log(typeof id, id);
        

    //     db.get_post(+id)
    //         .then(post => res.status(200).send(post[0]))
    //         .catch(error => res.status(500).send(error))
    // },
    // getCategories: (req, res) => {
    //     const db = req.app.get('db')

    //     db.get_categories()
    //         .then(categories => res.status(200).send(categories))
    //         .catch(error => res.status(500).send(error))
    // }
}