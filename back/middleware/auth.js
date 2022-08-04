import jwt from 'jsonwebtoken';
import users from '../models/usersModels.js';

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]; // On enlève l'espace et le Bearer pour récup que le token
    console.log(token);
    const decodedToken = jwt.verify(token, process.env.TOKEN);
    console.log(decodedToken);
    const userId = decodedToken.userId;
    console.log(userId);
    req.auth = { userId : userId } // enrichit la requête du front, est exploitée dans la route delete
    // const adminUser = await users.findOne({ // le await est important vu qu'il n'y a pas de .then après
    //   where : {
    //     id : userId,
    //     isAdmin : true
    //   }
    // })
    // if (adminUser) {
    //   next();
    // } 
    if (req.body.userId && req.body.userId !== userId) {
      throw 'Invalid user ID'; 
    } 
    else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};

export default auth


// tout ça ce sont des informations envoyées depuis le front. Mon token = req.headers.authorisation n'existe pas sans le front mais je peux simuler les headers et le body depuis Insomnia