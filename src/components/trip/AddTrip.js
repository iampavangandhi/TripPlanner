import React from "react";

export const AddTrip = ({ AddNewTrip }) => {
  let date, place, type;
  const submit = (e) => {
    e.preventDefault();
    const obj = {
      date: date.value,
      place: place.value,
      type: type.value,
    };
    AddNewTrip(obj);
    date.value = place.value = type.value = "";
  };
  return (
    <div className="form-container">
      <form onSubmit={submit} className="form black-container">
        <label>
          <h3>Add a trip</h3>
        </label>
        <label>
          Date:
          <input
            id="date"
            type="date"
            required
            ref={(input) => (date = input)}
          />
        </label>
        <label>
          Place:
          <input
            id="date"
            type="text"
            required
            ref={(input) => (place = input)}
          />
        </label>
        <label>
          Type:
          <select ref={(input) => (type = input)}>
            <option value="Trek">Trek</option>
            <option value="Club">Club</option>
          </select>
        </label>
        <input type="submit" value="SUBMIT" />
      </form>
    </div>
  );
};
