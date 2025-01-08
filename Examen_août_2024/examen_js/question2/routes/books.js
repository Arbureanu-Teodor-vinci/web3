const router = require('express').Router()
const Book = require('../models/Book')
const NotFoundError = require('../utils/NotFoundError')

router.get('/', async (req, res, next) => {
    Book.find({})
        .then(books => res.json(books))
        .catch(err=>next(err))
})

router.post('/addComment', async (req, res, next) => {
    const body = req.body

    try {
        const book = await Book.findById(body.idBook);
        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }

        if (body.comment.length <= 5 || body.username.length <= 3) {
            return res.status(400).json({ error: 'Comment must be at least 5 characters long and username at least 3' });
        }

        if (book.comments.some(c => c.username === body.username)) {
            return res.status(400).json({ error: 'User has already commented on this book' });
        }

        Book.findByIdAndUpdate(
            body.idBook,
            { $push: { comments: { comment: body.comment, username: body.username } } },
            { new: true, runValidators: true, context: 'query' }
        )
            .then(updatedBook => {
                if (updatedBook) {
                    res.json(updatedBook);
                } else {
                    res.status(404).end();
                }
            })
            .catch(error => next(error));

        res.json(updatedBook);
    } catch (err) {
        next(err);
    }
})



module.exports = router;