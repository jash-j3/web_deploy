export default function TextBox({ placeholder, onChange, value }) {
  return <div>
    <input className="form-control p-2 m-2 rounded-3xl text-center"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
}
