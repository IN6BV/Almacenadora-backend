import jwt from 'jsonwebtoken';

export const generarJwt = (uid = ' ') => {
    return new Promise((resolve, reject) => {
        const payload = { uid };
        jwt.sign(
            payload,
            process.env.SECRETORPRIVATEKEY,
            {
                expiresIn: '8h'
            },
            (err, token) => {
                err ? (console.log(err),reject('Token could not be generated')) : resolve(token);
            }
        )
    })
}