const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads/');
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
});




const upload = multer({storage: storage, limits:{
    fileSize: 1024 * 1024 * 5
}});


router.get('/getAll', async (req, res)=> {
 try{
     const posts = await Post.find();
     const fileid  = req.params;
     res.sendFile(__dirname + /uploads/ + fileid); 
     res.json(posts);
     //console.log('called');
 }catch(err){
     res.json({message:err});
 }
});

router.post('/posts', upload.single('unternehmen_id'), async (req, res) => {
 //console.log(req.file);
    Post.init()
    const post = new Post({
    _id: new mongoose.Schema.Types.ObjectId(),
     name: req.body.name,
     unternehmen_id: req.file.path,
     dimension: req.body.dimension,
     einordnungKette: req.body.einordnungKette,
     kurzbeschreibung: req.body.kurzbeschreibung,
     reifegrad: req.body.reifegrad,
     nutzenversprechen: req.body.nutzenversprechen,
     herausforderungen: req.body.herausforderungen,
     veränderungenMensch: req.body.veränderungenMensch,
     veränderungenOrganisation: req.body.veränderungenOrganisation, 
     veränderungenTechnologie: req.body.veränderungenTechnologie

 });
 try{
     const savedPost = await post.save();
     res.json(savedPost);
     //res.send(req.file);
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
router.patch('/:postId', async (req, res)=> {
    try{
        const updatePost = await Post.updateOne({_id: req.params.postId}, 
            { $set: {path: req.file.path
            }
        });
        res.json(updatePost);
    }catch(err){
        res.json({message: err});
    }
});

module.exports = router;