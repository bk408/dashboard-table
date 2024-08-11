// eslint-disable-next-line react/prop-types
const Age = ({ handleAgeChange }) => {
  return (
    <div className="age-container">
      <label htmlFor="age">Filter with Age:</label>
          <select name="age" id="age" onChange={handleAgeChange}>
              <option value="age">Filter</option>
        <option value="18-25">18-25</option>
        <option value="26-30">26-30</option>
        <option value="31-35">31-35</option>
        <option value="36-40">36-40</option>
        <option value="41-45">41-45</option>
        <option value="46+">46+</option>
      </select>
    </div>
  );
};

export default Age;


