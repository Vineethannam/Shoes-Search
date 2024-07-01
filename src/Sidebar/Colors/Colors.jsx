import Input from '../../Components/Input';
import './Color.css'

function Colors({handleChange}) {
  return (
    <div>
      <h2 className="sidebar-title color-title">Color</h2>

      <label className="sidebar-label-container color-title">
        <input onChange={handleChange} type="radio" value="" name="test1"/>
        <span className="checkmark all" ></span>All
      </label>   

      <Input
      handleChange={handleChange}
      value="black"
      title="Black"
      color="black"
      name="test1"
      />
      <Input
      handleChange={handleChange}
      value="blue"
      title="Blue"
      color="blue"
      name="test1"
      />
      <Input
      handleChange={handleChange}
      value="red"
      title="Red"
      color="red"
      name="test1"
      />
      <Input
      handleChange={handleChange}
      value="green"
      title="Green"
      color="green"
      name="test1"
      />
      <label className="sidebar-label-container color-title">
        <input onChange={handleChange} type="radio" value="whhite" name="test1"/>
        <span className="checkmark" style={{background:"white"}}></span>White
      </label>
      
    </div>
  )
}
export default Colors;