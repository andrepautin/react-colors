import React, {useState} from "react";
import { useHistory } from "react-router";

function AddColorForm({addColor}) {
  const [formData, setFormData] = useState("");
  const history = useHistory();

  function handleChange(evt) {
    setFormData(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    addColor(formData);
    history.push("/colors");
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="color">Color</label>
      <input 
      id="color"
      name="color"
      placeholder="Enter your color"
      value={formData}
      onChange={handleChange}
      required/>
      <button>Add new Color!</button>
    </form>
  );
}

export default AddColorForm;