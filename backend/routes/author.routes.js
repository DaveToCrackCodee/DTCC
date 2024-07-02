import { registerUser,loginUser } from "../controllers/user.controller.js";
// import {upload} from '../middleware/multer.middleware.js';
// import { verifyJWT } from "../middleware/auth.middleware.js";
//import { AdminverifyJWT } from "../middleware/adminAuth.middleware.js";

import { Router } from "express";

const router =Router();

router.route("/login").post(loginUser);
router.route("/register").post(registerUser);



export default router;