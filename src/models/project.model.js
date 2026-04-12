import mongoose,{Schema} from "mongoose";

const projectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    projectUrl: {
        type: String
    },
    githubUrl: {
        type: String
    },
    technologies: {
        type: [String]
    }
},{
    timestamps:true
});

export const Project = mongoose.model('Project',projectSchema);