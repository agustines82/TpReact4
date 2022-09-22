import React from "react";
import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTarea = ({ listaTareas }) => {
    return (
        <ListGroup>
            {listaTareas.map((item, position) => (
                <ItemTarea key={position} nombreTarea={item} />
            ))}
        </ListGroup>
    );
};

export default ListaTarea;
