function Login(){
    
    const submitHandler = e => {
        e.preventDefault();
        // console.log("Se envía el formulario");

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);

        const regexEmail = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
        console.log(regexEmail.test(email));

        if(email===" " || password === " "){
            console.log("Los campos no pueden estar vacíos");
            return;
        }

        if(email !== " " && !regexEmail.test(email)){
            console.log("Debes escribir un correo electrónico válido");
            return;
        }

        console.log("Ok. Estamos listos para enviar la información")

    }

    return(
        <form onSubmit={submitHandler}>
            <label htmlFor="email">Ingresa tu correo electrónico:</label>
            <br/>
            <input type="email" name="email" id="email" required/> 
            <br/>

            <label htmlFor="password">Ingresa tu contraseña:</label>
            <br/>
            <input type="password" name="password" id="password" required/>
            <br/>

            <button type="submit">Ingresar</button>
        </form>
    );
};

export default Login;