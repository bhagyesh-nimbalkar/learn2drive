import bcrypt from 'bcryptjs';

export const HashPass = (pass:string)=>{
    const Salt= bcrypt.genSaltSync(7);
     return bcrypt.hashSync(pass,Salt);
}

export const ComparePass  = (pass:string,encrypt:string)=>{
    return bcrypt.compareSync(pass,encrypt);
}