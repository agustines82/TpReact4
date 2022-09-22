import React from "react";
import { ListGroup } from "react-bootstrap";
const ItemTarea = ({ nombreTarea }) => {
    return (
        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">{nombreTarea}</div>
            <i className="text-danger bi bi-x-lg"></i>
        </ListGroup.Item>
    );
};

export default ItemTarea;
