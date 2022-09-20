import React from "react";
import Form from "react-bootstrap/Form";
const FormularioTarea = () => {
    return (
        <>
            <p className="container text-center lead">Ingresa tus tareas</p>
            <Form>
                <Form.Group className="mb-3" controlId="tareas">
                    <Form.Control type="text" placeholder="Tarea 1..." />
                </Form.Group>
            </Form>
        </>
    );
};

export default FormularioTarea;
