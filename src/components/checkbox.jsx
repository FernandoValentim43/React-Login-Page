export default function CheckBox()  {
    return (
      <div>
        <label>
          <input type="checkbox" required={true} />
          I accept the terms and privacy
        </label>
        <p className="error">You must accept the terms</p>
      </div>
    );
  };