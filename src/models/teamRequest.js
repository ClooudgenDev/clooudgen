import mongoose from "mongoose";

const { Schema } = mongoose;

const teamRequestSchema = new Schema(
    {
        team: { type: Schema.Types.Mixed, required: true },
        contact: {
            name: { type: String, required: true },
            phone: { type: String, required: true },
            message: { type: String, required: true }
        }
    },
    {
        timestamps: true
    }
);

const TeamRequest = mongoose.models.TeamRequest || mongoose.model("TeamRequest", teamRequestSchema);

export default TeamRequest;
