import './Sidebar.css'
import Catogery from './Category/Category'
import Price from './Price/Price'
import Colors from './Colors/Colors'
function Sidebar({handleChange}) {

  return (
    <section className='sidebar'>
      <div className="logo-container">
        <h1 className="sidebar-title">🛒</h1>
      </div>
      <Catogery handleChange={handleChange}/>
      <Price handleChange={handleChange}/>
      <Colors handleChange={handleChange}/>
    </section>
  )
}
export default Sidebar;