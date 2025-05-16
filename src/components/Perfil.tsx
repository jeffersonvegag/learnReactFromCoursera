const Perfil =({nombre, edad, profesion}:{nombre ?:string, edad ?: number, profesion ?: string})=>{
    return(
        <>
        <h1>Nombre: {nombre}</h1>
        <h1>Edad: {edad}</h1>
        <h1>Profesion: {profesion}</h1>
        </>

    )
}

export default Perfil