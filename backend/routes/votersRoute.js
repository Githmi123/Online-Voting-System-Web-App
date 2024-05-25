import express from "express";
import { Voter } from "../models/voterModel.js";


const router = express.Router(); 

 
router.post('/create1', async (request, response) => {
  try {
    const existingVoter = await Voter.findOne({ nIC: request.body.nIC });

    if (existingVoter) 
    {
      return response.status(400).send({
        message: error.message,
      });
    
    }
    const newVoter = {
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      dOB: request.body.dOB,
      nIC: request.body.nIC,
      contactNumber: request.body.contactNumber,
      stakeholderRole: request.body.stakeholderRole,
     
    };

    const voter = await Voter.create(newVoter);

    return response.status(201).send({ id: voter._id });
  } 
  
  catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});



router.post("/login", async (request, response) => {
  try {
    const { email, password } = request.body;

    const voter = await Voter.findOne({ email, password });

    if (!voter) {
      return response.status(404).json({ message: "Voter not found" });
        }

        if (voter.isAdmin) {
          return response.status(200).json({ isAdmin: true, id: voter._id });
        } else {
          return response.status(200).json({ isAdmin: false, id: voter._id });
        }
  } 
  
  catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});



router.post("/vote/:id", async (request, response) => {
  try {
    const { id } = request.params;


    const voter = await Voter.findOne({ id});

    if (!voter) {
      return response.status(404).json({ message: "Voter not found" });
        }

        if (voter.isVoted) {
          return response.status(200).json({ isVoted: true, id: voter._id });
        } else {
          return response.status(200).json({ isVoted: false, id: voter._id });
        }
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.get('/search/:nic', async (request, response) => {
  try {
    const { nic } = request.params; 
    const voter = await Voter.findOne({ nIC: nic }); 

    if (!voter) {
      return response.status(404).json({ message: "Voter not found" });
    }

    return response.status(200).json(voter);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.get('/', async (request, response) => {
  try {
    const voters = await Voter.find({});

    return response.status(200).json({
      count: voters.length,
      data: voters,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const voter = await Voter.findById(id);

    return response.status(200).json(voter);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.put("/:id", async (request, response) => {
  try {
    if (
      !(
       
      
      request.body.nIC ||
      
      request.body.email|| request.body.password)
    ) {
      return response.status(400).send({
        message:
          "Send all required fields: firstName, lastName, dOB, nIC, contactNumber, stakeholderRole",
      });
    }

    const { id } = request.params; 
    const result = await Voter.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(400).json({ message: "Voter not found" });
    }

    return response.status(200).send({ message: "Voter updated successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.put("/emailandpassword/:id", async (request, response) => {
  try {
 
      
      
      
   

    const { id } = request.params; 
    const result = await Voter.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(400).json({ message: "Voter not found" });
    }

    return response.status(200).send({ message: "Voter updated successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const result = await Voter.findByIdAndDelete(id);
    if (result) {
      return response.status(404).json({
        message: "Voter not found",
      });
    }

   
  } catch (error) {
    
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});


let voteCounts = {
  candidate1: 0,
  candidate2: 0,
};

let votedUsers = [];

// router.post('/submit-vote/:id',async (req, res) => {
//   const { id } = req.params;


//   if (votedUsers.includes(id) || ) {
//     console.log('User has already voted.');
//     return res.status(200).json({ isVoted: true });
//   }

//   else {
//   //   votedUsers.push(id);
//   // console.log('Vote recorded for user:', id);
//   //   console.log('Invalid candidate selection.');
//   //   const result = await Voter.findByIdAndUpdate(id, request.body);
//   //   return res.status(200).json({ isVoted: false });

//   votedUsers.push(id);
//     console.log('Vote recorded for user:', id);
//     try {
//       await Voter.findByIdAndUpdate(id, { isVoted: true }); // Assuming Voter is the model representing your users
//       return res.status(200).json({ isVoted: true });
//     } catch (error) {
//       console.error('Error updating user:', error);
//       return res.status(500).json({ error: 'Internal Server Error' });
//   }

  

//   return res.status(200).json(voteCounts);


// }});

router.post('/submit-vote/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const user = await Voter.findById(id);

    if (user.isVoted) {
      console.log('User has already voted.');
      return res.status(200).json({ isVoted: true });
    } else {
      votedUsers.push(id);
      console.log('Vote recorded for user:', id);
      await Voter.findByIdAndUpdate(id, { isVoted: true }); // Assuming Voter is the model representing your users
      return res.status(200).json({ isVoted: false });
    }
  } catch (error) {
    console.error('Error finding user or updating user:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
