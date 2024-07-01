import Input from '../../Components/Input';
import './Catogery.css'
function Category({handleChange}) {
  return (
    <>
    <div className='catogery'>
     <h2 className="sidebar-title">Catogery</h2>
     <div>
     <label className="sidebar-label-container color-title">
        <input onChange={handleChange} type="radio" value="" name="test"/>
        <span className="checkmark" ></span>All
      </label> 
    
    <Input handleChange={handleChange} name="test" value="sneakers" title="Sneakers"/>  
    <Input
    handleChange={handleChange}
    name="test"
    value="flats"
    title="Flats"
    />  
    <Input
    handleChange={handleChange}
    name="test"
    value="sandles"
    title="Sandles"
    />  
    <Input
    handleChange={handleChange}
    name="test"
    value="heels"
    title="Heels"
    />  
    </div> 
    </div>
    </>
  )
}
export default Category;