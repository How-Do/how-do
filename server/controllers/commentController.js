module.exports = {
    newComment:
        async (req, res) => {
            const db = req.app.get('db')

            const {user_id, post_id, comment, comment_pic} = req.body

            await db.add_comment(user_id, post_id, comment, comment_pic)

            .then(() => res.status(200).send('Comment added successfully!'))
            .catch((err) => res.status(500).send(err))
        },

    getComments: 
        async (req, res) => {
            const db = req.app.get('db')
            const {id} = req.params
            let comments = []

            await db.get_comments(+id)
                .then(res => comments = res)
                .catch(error => res.status(500).send(error))

            let result = await Promise.all(comments.map(async comment=> {
                await db.vote_get_upvote_count(comment.comment_id)
                .then(upCount => comment.upvote = +upCount[0].count)
                .catch(error => res.status(500).send(error)),
                await db.vote_get_downvote_count(comment.comment_id)
                .then(downCount => comment.downvote = +downCount[0].count)
                    .catch(error => res.status(500).send(error))
                    console.log(comment);
                    return comment
            }));

            res.status(200).send(result)  
        },

    getCommentCount:
        (req, res ) => {
            const db = req.app.get('db')
            const {post_id} = req.params

            db.get_comment_count(post_id)
                .then(commentCount => res.status(200).send(commentCount))
                .catch(error => res.status(500).send(error))
        }
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