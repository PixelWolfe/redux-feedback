const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    // put new data into feedback table

    const queryString= `INSERT INTO "feedback" 
     ("feeling_rating", "feeling_comment", "understanding_rating",
     "understanding_comment", "support_rating", "support_comment", "additional_comments")
     VALUES ($1, $2, $3, $4, $5, $6, $7)`;

    const feedback = [req.body.feedback, req.body.feedback_comment, req.body.understanding,
         req.body.understanding_comment, req.body.support, req.body.support_comment, req.body.additional_comments];

    pool.query(queryString, feedback).then((result) => {
        res.sendStatus(201);
    }).catch((err) => {
        console.log('Error adding feedback with POST', err);
        res.sendStatus(500);  
    });
})

module.exports = router;