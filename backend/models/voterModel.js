import mongoose from "mongoose";

const voterSchema = mongoose.Schema(
    {
        firstName: {
            type : String,
            
        },
        lastName: {
            type : String,
         
        },
        dOB: {
            type : String,
           
        },
        nIC: {
            type : String,
            required: true
            
        },
        contactNumber: {
            type : String,
           
        },
        stakeholderRole: {
            type : String,
      
        },

        email: {
            type : String,
         
        },
        password: {
            type : String,
            
        },
        isAdmin: {
          type: Boolean,
          default: false 
        },

        isVoted: {
            type: Boolean,
            default: false 
          },

    },
    {
        timestamps: true,
    }
);

export const Voter = mongoose.model('Vote', voterSchema);

