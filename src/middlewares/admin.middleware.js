import ApiError from "../utils/ApiError.js";
const adminMiddleware = (req, res, next) => {
    const adminSecretKey = req.headers['admin-secret-key'];
    if (!adminSecretKey) {
        return next(new ApiError(401, "Admin secret key is required"));
    }
    if (adminSecretKey !== process.env.ADMIN_SECRET_KEY) {
        return next(new ApiError(403, "Invalid admin secret key"));
    }
    next();
};

export default adminMiddleware;