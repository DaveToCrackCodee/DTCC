import {applyForMock}  from "../controllers/mock.controller.js";
// // import {upload} from '../middleware/multer.middleware.js';
import { verifyJWT } from "../middleware/auth.middleware.js";
import { getMockHistory } from "../controllers/mock.controller.js";
import { submitFeedback } from "../controllers/mock.controller.js";
// //import { AdminverifyJWT } from "../middleware/adminAuth.middleware.js";

import { Router } from "express";

const router =Router();
router.route("/mock_call").post(verifyJWT,applyForMock);
router.route("/feedback").post(verifyJWT,submitFeedback);
router.route("/getMockHistory").get(verifyJWT,getMockHistory);


// router.route("/mock_call").post(applyForMock);
// router.route("/feedback").post(submitFeedback);
// router.route("/getMockHistory").get(getMockHistory);

export default router;