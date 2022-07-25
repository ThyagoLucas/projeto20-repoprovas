import * as userRepository from './../repositories/userRepository.js';
import bcrypt from "bcrypt";
import { tokenCreate, userInfoByToken} from '../utils/userUtils.js';

export async function register( name: string, email: string, password: string){
    
    // check if user is already registred
    const thereIsUser = await userRepository.userByEmail(email);
    if(thereIsUser) throw {type:409, message: 'user already exist'}

    const userToCreate = {} as userRepository.CreateUser;
    userToCreate.name = name;
    userToCreate.email = email;
    userToCreate.password = bcrypt.hashSync(password, 10);

    await userRepository.insert(userToCreate)

}

export async function login( email: string, password: string){

    // check if user is already registred
    const user = await userRepository.userByEmail(email)
    if(!user) throw {type: 404, message:'user does not exist'}

    // check if the password is valid
    const isPassword = bcrypt.compareSync(password, user.password);
    if(!isPassword) throw{type: 404, message:'invalid password'}

    // create session
    const token = tokenCreate(user.id, email);
    const session = {} as userRepository.CreateSession;
    session.userId = user.id;
    session.token = token;

    await userRepository.createSession(session);

    return token;
}

export async function sesionConfirmate(token: string){

    const verifyToken = await userInfoByToken(token);

    const session = await userRepository.findSession(verifyToken.userId, token)

    if(!session) throw{type:401, message:'invalid token'}
    
    return token;
  
}