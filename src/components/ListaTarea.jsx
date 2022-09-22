import React from "react";
import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTarea = ({ listaTareas, borrarTarea }) => {
    return (
        <ListGroup>
            {listaTareas.map((item, position) => (
                <ItemTarea key={position} nombreTarea={item} borrarTarea={borrarTarea} />
            ))}
        </ListGroup>
    );
};

export default ListaTarea;
