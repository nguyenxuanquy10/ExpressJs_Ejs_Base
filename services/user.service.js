const ErrorResponse = require("../utils/ErrorResponse");
const APIFeatures = require("../utils/APIFeatures");
const { userModel } = require("../models")

/**
 * Create a userModel
 * @param {Object} userModelBody
 * @returns {Promise<userModel>}
 */
const createUser = async(userModelBody) => {
    if (await userModel.isEmailTaken(userModelBody.email)) {
        throw new ErrorResponse("Email already taken", httpStatus.BAD_REQUEST);
    }
    return userModel.create(userModelBody);
};

const getUsers = async(userModelQuery) => {
    const features = new APIFeatures(userModel.find(), userModelQuery).filter().sort().limitFields().paginate();

    const userModels = await features.query;
    return userModels;
};

/**
 * Get userModel by id
 * @param {ObjectId} id
 * @returns {Promise<userModel>}
 */
const getUserId = async(id) => {
    return userModel.findById(id);
};

/**
 * Get userModel by email
 * @param {string} email
 * @returns {Promise<userModel>}
 */
const getUserEmail = async(email) => {
    return userModel.findOne({ email }).select("+password");
};

/**
 * Update userModel by id
 * @param {ObjectId} userModelId
 * @param {Object} updateBody
 * @returns {Promise<userModel>}
 */
const updateUserId = async(userModelId, updateBody) => {
    const userModel = await getuserModelById(userModelId);
    if (!userModel) {
        throw new ApiError(httpStatus.NOT_FOUND, "userModel not found");
    }
    if (updateBody.email && (await userModel.isEmailTaken(updateBody.email, userModelId))) {
        throw new ApiError(httpStatus.BAD_REQUEST, "Email already taken");
    }
    Object.assign(userModel, updateBody);
    await userModel.save();
    return userModel;
};

/**
 * Delete userModel by id
 * @param {ObjectId} userModelId
 * @returns {Promise<userModel>}
 */
const deleteUserId = async(userModelId) => {
    const userModel = await userModel.findByIdAndDelete(userModelId);
    if (!userModel) {
        throw new ApiError(httpStatus.NOT_FOUND, "userModel not found");
    }
    return userModel;
};

module.exports = {
    createUser,
    getUsers,
    getUserId,
    getUserEmail,
    updateUserId,
    deleteUserId
};