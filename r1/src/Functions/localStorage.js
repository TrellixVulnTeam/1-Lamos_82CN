import getId from './getId';
const key = 'exams';

export function create(obj) {
    let data = localStorage.getItem(key);
    if (null === data){
        data = JSON.stringify([]);
    }
    data = JSON.parse(data);
    data.id = getId(key + '_id');
    data.push(obj);
    data = JSON.stringify(data);
    localStorage.setItem(key, data);
}

export function read(){
    let data = localStorage.getItem(key);
    if (null === data){
        data = JSON.stringify([]);
    }
    data = JSON.parse(data);
    return data;
}