export default function TextBox({ placeholder, onChange, value }) {
  return <div>
    {/*<input className="form-control p-2 m-2 rounded-3xl text-center"*/}
    <input className="form-control p-2 m-2 rounded-3xl text-center tracking-tight md:tracking-tighter leading-tight bg-white/30 focus:outline-none text-purple-200"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
}
