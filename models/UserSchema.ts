import { Schema, model, models } from "mongoose";


const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    admin: Boolean
})

export const User = models.User || model("User", userSchema);


