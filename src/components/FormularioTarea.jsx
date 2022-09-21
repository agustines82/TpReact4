import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import ListaTarea from "./ListaTarea";
const FormularioTarea = () => {
    const [tareaInputState, setTareaInputState] = useState("");
    const [listaTareasState, setListaTareasState] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        //guardo el valor del input en el arreglo
        setListaTareasState(...listaTareasState, tareaInputState);
        //limpio el input
        setTareaInputState("");
    };
    return (
        <>
            <p className="container text-center lead">Ingresa tus tareas</p>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="tareas">
                    <Form.Control type="text" placeholder="Tarea 1..." onChange={(e) => setTareaInputState(e.target.value)} />
                </Form.Group>
            </Form>
            <ListaTarea />
        </>
    );
};

export default FormularioTarea;
