import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import ListaTarea from "./ListaTarea";
const FormularioTarea = () => {
    const [stateTareaInput, setStateTareaInput] = useState("");

    return (
        <>
            <p className="container text-center lead">Ingresa tus tareas</p>
            <Form>
                <Form.Group className="mb-3" controlId="tareas">
                    <Form.Control type="text" placeholder="Tarea 1..." onChange={(e) => setStateTareaInput(e.target.value)} />
                </Form.Group>
            </Form>
            <ListaTarea />
        </>
    );
};

export default FormularioTarea;
