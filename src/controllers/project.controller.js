import { Project } from "../models/project.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";

import { uploadOnCloudinary } from "../utils/cloudinary.js";


export const createProject = asyncHandler(async (req, res) => {
  const { title, description,projectUrl,githubUrl,technologies } = req.body;
  if (!title || !description) {
    throw new ApiError(400, "All fields are required");
  }

  const localFilePath = req.file?.path;
  
  if (!localFilePath) {
    throw new ApiError(400, "Image file is not found");
  }
  const uploadResult = await uploadOnCloudinary(localFilePath);
  if (!uploadResult) {
    throw new ApiError(500, "Failed to upload image");
  }
  const existedProject = await Project.findOne({ title });
  if (existedProject) {
    throw new ApiError(400, "Project with the same title already exists");
  }
  const project =await Project.create({
    title,
    description,
    imageUrl: uploadResult.url,
    projectUrl,
    githubUrl,
    technologies,
  });
  res
    .status(201)
    .json(new ApiResponse(200, project,"Project created successfully"));
});

export const getAllProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find({}).sort({ createdAt: -1 });
  res
    .status(200)
    .json(new ApiResponse(200, projects, "Projects fetched successfully"));
});

export const updateProject = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, description, imageUrl, projectUrl, githubUrl, technologies } = req.body;
  const project = await Project.findById(id);
  if (!project) {
    throw new ApiError(404, "Project not found");
  }
  if (imageUrl) {
    const localFilePath = imageUrl;
    const uploadResult = await uploadOnCloudinary(localFilePath);
    if (!uploadResult) {
      throw new ApiError(500, "Failed to upload image");
    }
    project.imageUrl = uploadResult.url;
  }
  project.title = title || project.title;
  project.description = description || project.description;
  project.projectUrl = projectUrl || project.projectUrl;
  project.githubUrl = githubUrl || project.githubUrl;
  project.technologies = technologies || project.technologies;
  await project.save();
  res
    .status(200)
    .json(new ApiResponse(200,project,"Project updated successfully"));
});

export const deleteProject = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const project = await Project.findById(id);
  if (!project) {
    throw new ApiError(404, "Project not found");
  }
  await project.remove();
  res
    .status(200)
    .json(new ApiResponse(200,null, "Project deleted successfully"));
}); 