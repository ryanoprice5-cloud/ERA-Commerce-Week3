// const jwt = require('jsonwebtoken');
// const secret = 'eracommerce_jwt_secret_2026';

// // Generate a token

// const payLoad = {
//     id: 3, 
//     email: 'john@eracommerce.com',
//     role: 'customer'
// };
// const token = jwt.sign(payLoad, secret, {
//     expiresIn: '24h'
// });
// console.log('token:', token);

// // Verify and decode the token

// const decoded = jwt.verify(token, secret);
// console.log('decoded: ', decoded);