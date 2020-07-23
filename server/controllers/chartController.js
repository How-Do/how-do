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
    getPostCommentDataPerUser: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.chart_data(id)
            .then((results) => res.status(200).send(results))
            .catch(error => res.status(500).send(error))
    },
    getUpvotesCount: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.chart_upvotes(id)
            .then(([upvoteCount]) => res.status(200).send(upvoteCount))
            .catch(error => res.status(500).send(error))
    },
    getDownvotesCount: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.chart_downvotes(id)
            .then(([downvoteCount]) => res.status(200).send(downvoteCount))
            .catch(error => res.status(500).send(error))
    },


}