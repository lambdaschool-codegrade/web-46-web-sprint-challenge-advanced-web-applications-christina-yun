import React, { useEffect, useState } from "react";
import axiosWithAuth from "../helpers/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import fetchColorService from '../services/fetchColorService';

const BubblePage = () => {
  const [colors, setColors] = useState([]);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    fetchColorService(setColors)
  }, [colors])

  const toggleEdit = (value) => {
    setEditing(value);
  };

  const saveEdit = (editColor) => {
    axiosWithAuth()
      .put(`http://localhost:5000/api/colors/${editColor.id}`, editColor)
      .then(resp => {
        console.log(resp.data)
        setEditing(false)
      })
  }

  const deleteColor = (colorToDelete) => {
    axiosWithAuth()
      .delete(`http://localhost:5000/api/colors/${colorToDelete.id}`)
      .then(resp => {
        let newColors = colors.filter(color => {
            return color.id !== resp.data
        })
          setColors(newColors);

      })
      .catch(err => {
        console.error(err)
      })
  };

  return (
    <div className="container">
      <ColorList colors={colors} editing={editing} toggleEdit={toggleEdit} saveEdit={saveEdit} deleteColor={deleteColor}/>
      <Bubbles colors={colors}/>
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
//2. Complete toggleEdit, saveEdit, deleteColor and functions
