module.exports = reqFilter=(req,res,next)=>{
    // console.log('reqFilter');
    if(!req.query.age){
        res.send('Enter a Age');
    }
    else if(req.query.age<18){
        res.send('You are under 18. You can not access this page');
    }
    else{
        next();
    }
};