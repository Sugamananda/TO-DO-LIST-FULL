import axios from 'axios'

const baseUrl = "http://localhost:5000"

const getAllToDo = (setToDo) =>{
    axios
    .get(baseUrl)
    .then(({data}) =>{
        console.log('data --->', data);
        setToDo(data)
    })
}


const addToDo = (text, setText, setToDo) => {
    console.log("Adding To-Do:", text);

    axios.post(`${baseUrl}/post`, { text }) // Corrected endpoint
        .then((data) => {
            console.log(data);
            setText("");
            getAllToDo(setToDo);
        })
        .catch((err) => console.log(err));
};



const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating ) =>{

    axios.post(`${baseUrl}/update`, {_id: toDoId, text})
    .then((data) =>{ 
        setText("")
        setIsUpdating(false)
        getAllToDo(setToDo)
    })
    
    .catch((err) => console.log(err))
}


const deleteToDo = (_id, setToDo) =>{

    axios.post(`${baseUrl}/delete`, {_id})
    .then((data) =>{ 
        console.log(data);
        getAllToDo(setToDo)
    })
    
    .catch((err) => console.log(err))
}



export {getAllToDo, addToDo, updateToDo, deleteToDo}