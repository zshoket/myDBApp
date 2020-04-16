const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', async (req, res)=> {
 try{
     const posts = await Post.find();
     res.json(posts);
 }catch(err){
     res.json({message:err});
 }
});

router.post('/', async (req, res) => {
 const post = new Post({
     name: req.body.name,
     unternehmen: req.body.unternehmen,
     kurzbeschreibung: req.body.kurzbeschreibung,
     reifegrad: req.body.reifegrad,
     nutzenversprechen: req.body.nutzenversprechen,
     herausforderungen: req.body.herausforderungen,
     auswirkungenMensch: req.body.auswirkungenMensch,
     auswirkungenOrganisation: req.body.auswirkungenMensch,
     auswirkungenTechnik: req.body.auswirkungenMensch
 });
 try{
     const savedPost = await post.save();
     res.json(savedPost);
 }catch(err){
     res.json({message: err});
 }  
});

//Specific Post
router.get('/:postId', async (req, res)=> {
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }catch(err){
        res.json({message: err});
    }
});

//Delete a Specific Post
router.delete('/:postId', async (req, res)=> {
    try{
        const removedPost = await Post.remove({_id: req.params.postId});
        res.json(removedPost);
    }catch(err){
        res.json({message: err});
    }
});

//Update a Specific Post
// router.patch('/:postId', async (req, res)=> {
//     try{
//         const updatePost = await Post.updateOne({_id: req.params.postId}, 
//             { $set: {title: req.body.title}
//         });
//         res.json(updatePost);
//     }catch(err){
//         res.json({message: err});
//     }
// });

module.exports = router;