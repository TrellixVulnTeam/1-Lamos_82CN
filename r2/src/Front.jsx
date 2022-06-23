import FrontContext from "./Components/front/FrontContext";
import FrontList from './Components/front/List';
import axios from 'axios';
import { useEffect, useState } from 'react';
import TreeList from "./Components/front/TreeList";

function Front() {

    const [goods, setGoods] = useState(null);
    const [trees, setTrees] = useState(null);
    const [createComment, setCreateComment] = useState(null);

    // Read
    useEffect(() => {
        axios.get('http://localhost:3003/front/gerybes')
            .then(res => {
                console.log(res.data);
                setGoods(res.data);
            });
    }, []);

    useEffect(() => {
        axios.get('http://localhost:3003/front/medziai')
            .then(res => {
                console.log(res.data);
                setTrees(res.data);
            });
    }, []);



  // Create
  useEffect(() => {
    if (null === createComment) return;
    axios.post('http://localhost:3003/front/komentarai', createComment)
      .then(_ => {
        // setLastUpdate(Date.now());
      })
  }, [createComment]);



    return (
        <FrontContext.Provider value={
            {
                goods,
                trees,
                setCreateComment
            }
        }>
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <FrontList />
                    </div>
                    <div className="col-7">
                        <TreeList />
                    </div>
                </div>
            </div>
        </FrontContext.Provider>
    )
}

export default Front