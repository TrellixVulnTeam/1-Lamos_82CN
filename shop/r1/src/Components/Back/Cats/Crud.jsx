import Nav from '../Nav'
import Create from './Create'
import List from './List'
import Edit from './Edit'

function CatsCrud() {

    return (
        <>
        <Nav/>
        <div className="container">
        <div className="row">
          <div className="col-4">
            <Create />
          </div>
          <div className="col-8">
            <List/>
          </div>
        </div>
      </div>
      <Edit></Edit>
</>
    )
}
export default CatsCrud