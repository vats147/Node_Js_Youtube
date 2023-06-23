module.exports = reqFilter=(req,res,next)=>{
       console.log("req filter");
       if(!req.query.age)
       {
              res.send("Please provide age");
       }
       else if(req.query.age < 18)
       {
              res.send("You cannot access");
       }
       else
              next();
};

