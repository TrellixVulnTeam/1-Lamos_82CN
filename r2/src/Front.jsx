import FrontContext from "./Components/front/FrontContext";
import FrontList from './Components/front/List';
import axios from 'axios';
import { useEffect, useState } from 'react';
import TreeList from "./Components/front/TreeList";

function Front() {

    const [goods, setGoods] = useState(null);
    const [trees, setTrees] = useState(null);
    const [createComment, setCreateComment] = useState(null);
    const [lastUpdate, setLastUpdate] = useState(Date.now());

    const [rateNow, setRateNow] = useState(null);

    // Read
    useEffect(() => {
        axios.get('http://localhost:3003/front/gerybes')
            .then(res => {
                console.log(res.data);
                setGoods(res.data);
            });
    }, [lastUpdate]);

    useEffect(() => {
        axios.get('http://localhost:3003/front/medziai')
            .then(res => {
                console.log(res.data);
                setTrees(res.data);
            });
    }, [lastUpdate]);



    // Create
    useEffect(() => {
        if (null === createComment) return;
        axios.post('http://localhost:3003/front/komentarai', createComment)
            .then(_ => {
                setLastUpdate(Date.now());
            })
    }, [createComment]);


    // Rate
    // Create
    useEffect(() => {
        if (null === rateNow) return;
        axios.put('http://localhost:3003/front/balsuok/' + rateNow.id, rateNow)
            .then(_ => {
                setLastUpdate(Date.now());
            })
    }, [rateNow]);



    return (
        <FrontContext.Provider value={
            {
                goods,
                trees,
                setCreateComment,
                setRateNow
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