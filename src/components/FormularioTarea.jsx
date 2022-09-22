import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import ListaTarea from "./ListaTarea";
const FormularioTarea = () => {
    const [tarea, setTarea] = useState("");
    const [listaTareas, setListaTareas] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        //guardo el valor del input en el arreglo
        setListaTareas([...listaTareas, tarea]);
        //limpio el input
        setTarea(" ");
    };
    return (
        <>
            <p className="container text-center lead">Ingresa tus tareas</p>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="tareas">
                    <Form.Control type="text" placeholder="Tarea 1..." onChange={(e) => setTarea(e.target.value)} value={tarea} />
                </Form.Group>
            </Form>
            <ListaTarea listaTareas={listaTareas} />
        </>
    );
};

export default FormularioTarea;
