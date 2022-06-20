import { useContext } from "react";
import { useState } from "react";
import TreeContext from "./TreeContext";

function Create() {

    const { setCreateData, disableCreate, setDisableCreate } = useContext(TreeContext);

    const [title, setTitle] = useState('');
    const [type, setType] = useState('1');
    const [height, setHeight] = useState('');

    const handleCreate = () => {
        setDisableCreate(true);
        const data = { title, type, height };
        setCreateData(data);
        setTitle('');
        setType('1');
        setHeight('');
    }

    

    return (
        <div className="card mt-4">
            <div className="card-header">
                <h2>Create new Tree</h2>
            </div>
            <div className="card-body">
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" onChange={e => setTitle(e.target.value)} value={title} />
                    <small className="form-text text-muted">Enter tree title here.</small>
                </div>
                <div className="form-group">
                    <label>Type</label>
                    <select className="form-control" onChange={e => setType(e.target.value)} value={type}>
                        <option value="1">Leaf</option>
                        <option value="2">Spike</option>
                        <option value="3">Palm</option>
                    </select>
                    <small className="form-text text-muted">Select tree type here.</small>
                </div>
                <div className="form-group">
                    <label>Height</label>
                    <input type="text" className="form-control" onChange={e => setHeight(e.target.value)} value={height} />
                    <small className="form-text text-muted">Enter tree height here.</small>
                </div>
                <button type="button" className="btn btn-outline-primary with-loader" onClick={handleCreate} disabled={disableCreate}>
                <span className="spinner-border spinner-border-sm mr-2"></span>
                <span className="spinner-text">Create</span>
                </button>
            </div>
        </div>
    );
}

export default Create;