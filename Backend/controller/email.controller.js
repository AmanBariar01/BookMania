export const SendEmail = async(req, res) =>{
    const{ name, email, message} = req.body;
    console.log(name,email,message);
};