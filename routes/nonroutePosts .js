const { json } = require('body-parser');
const express = require('express');
const Posts = require('../models/nonposts');

const router2 = express.Router();

//save posts

router2.post('/nonpost/save',(req,res)=>{

    let newPost = new Posts(req.body);
    
    newPost.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Post saved!"
        });
    });
});


// get posts
router2.get('/nonposts',(req,res) =>{
    Posts.find().exec((err,posts) =>{
        if(err){
            return res.status(400).json({
                error: err
            })
        }
        return res.status(200).json({
            success:true,
            existingPosts: posts
        })
    })
})

// get a specific post

router2.get("/nonmember/:id",(req,res) =>{
    let postId = req.params.id;

    Posts.findById(postId,(err,post) =>{
        if(err){
            return res.status(400).json({
                success:false,
                err
            });
        }
        return res.status(200).json({
            success:true,
            post
        });
    });
});

// update posts
router2.put('/nonpost/update/:id',(req,res) =>{
    Posts.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Update succesfull"
            });
        }
    );
});

// delete posts

router2.delete('/nonpost/delete/:id',(req,res) =>{
    Posts.findByIdAndRemove(req.params.id).exec((err,deletedPost) =>{
        if(err){
            return res.status(400).json({
                message: "Delete Unsuccesful",err
            })
        }
        return res.status(200).json({
            message:"Delete succesful",deletedPost
        })
            
    })
});





module.exports = router2;