import React from "react";
import { ListGroup, Button } from "react-bootstrap";
const ItemTarea = ({ nombreTarea, borrarTarea }) => {
    return (
        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">{nombreTarea}</div>
            <Button variant="outline-light" size="sm" onClick={() => borrarTarea(nombreTarea)}>
                <i className="text-danger bi bi-x-lg"></i>
            </Button>
        </ListGroup.Item>
    );
};

export default ItemTarea;
