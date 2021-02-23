const { response } = require('express');

const crearUsuario = (req, res = response ) =>{

    const { name, email, password } = req.body

    if( name.length < 3 ) {
        return res.status(400).json({
            ok: false,
            msg: 'El nombre debe de ser por lo menos de 3 letras'
        });
    }

    res.status(201).json({
        ok: true,
        msg: "Register",
        name,
        email,
        password
    })
}


const loginUsuario = (req, res = response) =>{

    const { email, password } = req.body

    res.json({
        ok: true,
        msg: "Login",
        email,
        password
    })
}


const revalidarToken = (req, res = response) =>{
    res.json({
        ok: true,
        msg: "Renew"
    })
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}