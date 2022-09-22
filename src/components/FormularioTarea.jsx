import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import ListaTarea from "./ListaTarea";
import Swal from "sweetalert2";
const FormularioTarea = () => {
    const [tarea, setTarea] = useState("");
    const [listaTareas, setListaTareas] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        let tareita = tarea.toLowerCase().trim();

        if (tareita.length > 0) {
            //guardo el valor del input en el arreglo
            setListaTareas([...listaTareas, tarea]);
            //limpio el input
            setTarea(" ");
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
