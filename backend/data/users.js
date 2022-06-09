import bcrypt from 'bcryptjs'

const users = [
   {
     name: 'Admin User',
     email: 'admin@example.com',
     password: bcrypt.hashSync('123456', 10),
     isAdmin: true,
   },
 {
    name:'Mr Grey',
    email: 'Mr@example.com',
    password: bcrypt.hashSync('123456', 10),
    

 },
 {
    name:'Jhone Doe',
    email: 'Jhone@example.com',
    password: bcrypt.hashSync('123456', 10),
    

 },
 
]
export default users