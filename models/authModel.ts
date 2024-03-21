import mongoose, { Document } from "mongoose";

interface UserDocument extends Document {
  fname: string;
  lname: string;
  email: string;
  phone: number;
  message: string;
}

const ContactFormSchema = new mongoose.Schema<UserDocument>(
  {
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const ContactForm =
  mongoose.models.ContactForm ||
  mongoose.model<UserDocument>("ContactForm", ContactFormSchema);

  export default ContactForm;
