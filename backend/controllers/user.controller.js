import { ApiResponse } from "../utils/ApiResponse.js";
import {ApiError} from  "../utils/ApiError.js";
import {User} from "../models/user.js";
// import {Journal} from "../models/journal.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
// import {uploadOnCloudinary} from "../utils/cloudinary.js";


//yha pr ham ek alag se access token or refresh token genarate krne ki method banayenge 

const  generateAccessAndRefereshTokens= async(userId)=>{
    try {
        console.log(userId);
        const user= await User.findById(userId);
        console.log(user);
        const aceesToken = user.generateAccessToken();
        console.log(aceesToken);
        return aceesToken;

    } catch (error) {
        throw new ApiError(500,"something went wrong while genarating refresh and access token");
    }
}

const registerUser =asyncHandler(async(req,res)=>{
       console.log("register controller");
    try {
        const {userName,email,password} = req.body;
        console.log(req.body);
        if(
            [userName,email,password ].some((field)=> field?.trim() === "")
        )
        {
            throw  new ApiError(400,"All fields are required");
        }
    
        //step 3:
        const existedUser = await User.findOne({email});
        if(existedUser){
            throw new ApiError(409,"User with email or username already exists");
        }
        //console.log(req.files);
        //step 4:
       
        const user = await User.create({
            userName,
            email,
            password
        });
    
        const createdUser = await User.findById(user._id).select(
            "-password"
        )
    
        if(!createdUser)
        {
            throw new ApiError(500,"Something went wrong while regestering the User");
        }
    
        return res.status(200).json(
            new ApiResponse(200,createdUser, "User registered Successfully")
        )
    } catch (error) {
        console.log(error);
        throw new ApiError(505,"Some error catch while registering the user");
    }

});

//login controller for user 

const loginUser =asyncHandler(async(req,res)=>{
    
    const { email,password }=req.body;

    if(!email && !password){
        throw new ApiError(400,"password or email is required");
    }

    const user = await User.findOne({email});

    if(!user){
        throw new ApiError(404,"user not found");
    }

    const isPasswordValid = await user.isPasswordCorrect(password);

    if(!isPasswordValid){
        throw new ApiError(401,"Invalid user credentials");
    }
    console.log("here");
    const accessToken = await generateAccessAndRefereshTokens(user._id);
    console.log(accessToken);

    //yha ham response send karenge frontend pr but password or refresh token send nhi karenge 

    const loggedInUser = await User.findById(user._id).select("-password");

    // kuch secuirity purpose ke liye option bhi dalte he 

    const options ={
        httpOnly:true,
        secure:true
    }

    //ab response send kar denge 

    return res.
    status(200)
    .json(
        new ApiResponse(
            200,{
               user:loggedInUser,
               accessToken: accessToken
            },
            "User Logged In SuccessFully"
        )
    )
});









export {
    registerUser,
    loginUser
}
