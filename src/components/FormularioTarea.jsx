import React from "react";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import ListaTarea from "./ListaTarea";
import Swal from "sweetalert2";
const FormularioTarea = () => {
    //cargar las tareas del local storage
    const tareasLocalStorage = JSON.parse(localStorage.getItem("keyListaTareas")) || [];

    const [tarea, setTarea] = useState("");
    const [listaTareas, setListaTareas] = useState(tareasLocalStorage);

    useEffect(() => {
        //guardar el arreglo de las tareas en el local storage
        localStorage.setItem("keyListaTareas", JSON.stringify(listaTareas));
    }, [listaTareas]);

    const handleSubmit = (e) => {
        e.preventDefault();
        //para validar el input del formulario necesito pasar todo a minusculas y sin espacios vacios de manera de que corroboremos que el lengh sea > 0 . Para ello como no puedo trabajar directamente sobre el state creo otra variable
        let tareita = tarea.toLowerCase().trim();
        //tambien necesito corroborar que no escriban tareas repetidas en la lista. Para ello utilizamos el metodo includes de los arreglos
        let listita = listaTareas.includes(tarea);

        if (tareita.length > 0) {
            if (!listita) {
                //guardo el valor del input en el arreglo
                setListaTareas([...listaTareas, tarea]);
                //limpio el input
                setTarea("");
            } else {
                Swal.fire("La tarea ya se encuentra registrada");
            }
        } else {
            Swal.fire("Ingresa una tarea.");
        }
    };

    const borrarTarea = (nombreTarea) => {
        //creo un arreglo nuevo sin la tarea a borra para poder luego modificar el state
        let listaFiltrada = listaTareas.filter((item) => item !== nombreTarea);
        //actualizo el state
        setListaTareas(listaFiltrada);
    };

    return (
        <>
            <p className="container text-center lead">Ingresa tus tareas</p>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="tareas">
                    <Form.Control type="text" placeholder="Tarea 1..." onChange={(e) => setTarea(e.target.value)} value={tarea} />
                </Form.Group>
            </Form>
            <ListaTarea listaTareas={listaTareas} borrarTarea={borrarTarea} />
        </>
    );
};

export default FormularioTarea;
