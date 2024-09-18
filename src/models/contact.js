import mongoose from "mongoose";

const { Schema } = mongoose;

const contactSchema = new Schema(
    {
        email: String,
        subject: String,
        phone: String,
        message: String
    },
    {
        timestamps: true
    }
);

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
