const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String, 
        required: true, 
    }, 
    email: {
        type: String,
        required: true, 
        unique: true, 
    },
    designation: {
        type: String,
    },
    password: {
        type: String,
        required: true, 
        minlength: 1,
        maxlength: 128 
    },
    tokens: [
        {
            token: {
                type: String
            }, 
            createdAt: {
                type: Date, 
                default: Date.now
            }
        }
    ]

})



userSchema.statics.findByCredentials = function(email, password){
    const User = this 
    return User.findOne({ email })
                .then(function(user){
                    if(!user) {
                        return Promise.reject('Your password or email is incorrect')
                    }

                    return bcryptjs.compare(password, user.password)
                                .then(function(result){
                                    if(result) {
                                        return Promise.resolve(user)
                                    } else {
                                        return Promise.reject('Your password or email is incorrect')
                                    }
                                })
                })
                .catch(function(err){
                    return Promise.reject(err)
                })
}

userSchema.methods.generateToken = function(){
    const user = this 
    const tokenData = {
        _id: user._id,
        name: user.name,
        userRole: user.userRole,
        createdAt: Number(new Date())
    }

    const token = jwt.sign(tokenData, 'jwt@123')
    user.tokens.push({
        token
    })

    return user.save()
        .then(function(user){
            return Promise.resolve(token)
        })
        .catch(function(err){
            return Promise.reject(err)
        })
}

userSchema.statics.findByToken = function(token){
    const User = this
    let tokenData 
    try {
        tokenData = jwt.verify(token, 'jwt@123')
    } catch(err){
        return Promise.reject(err)
    }

    return User.findOne({
        _id: tokenData._id, 
        'tokens.token': token
    })
}

userSchema.pre('save', function(next){
    const user = this
    if(user.isNew) {
        bcryptjs.genSalt(10)
            .then(function(salt) {
                bcryptjs.hash(user.password, salt)
                    .then(function(encryptedPassword) {
                        user.password = encryptedPassword
                        next()
                    })
            })
    } else {
        next()
    }
})
const User = mongoose.model('User', userSchema)


module.exports = {
    User
}