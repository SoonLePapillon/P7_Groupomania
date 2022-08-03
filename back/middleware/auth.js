import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]; // On enlève l'espace et le Bearer pour récup que le token
    const decodedToken = jwt.verify(token, process.env.TOKEN);
    const userId = decodedToken.userId;
    req.auth = {userId : userId} // enrichit la requête, est exploitée dans la route delete
    if (req.body.userId && req.body.admin === true) {
      next();
    } else if (req.body.userId && req.body.userId !== userId) {
      throw 'Invalid user ID'; 
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};

export default auth