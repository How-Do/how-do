module.exports = {
    getPostsCount: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.chart_count_post(id)
            .then(([postsCount]) => res.status(200).send(postsCount))
            .catch(error => res.status(500).send(error))
    },
    getCommentsCount: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.chart_count_comments(id)
            .then(([commentsCount]) => res.status(200).send(commentsCount))
            .catch(error => res.status(500).send(error))
    },
}