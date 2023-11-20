import * as api from '../api'

export const addNote = async(_data) =>{
    try{
        const id=JSON.parse(localStorage.getItem('Profile'))._id
        const {data} = await api.addNote(id,_data);
        localStorage.setItem('Profile',JSON.stringify(data.data))

    }catch(error){
        console.log(error.message)
    }
}

export const dragNotes = async(_data) =>{
    try{
        const id=JSON.parse(localStorage.getItem('Profile'))._id
        const {data} = await api.dragNotes(id,_data);
        localStorage.setItem('Profile',JSON.stringify(data.data))

    }catch(error){
        console.log(error.message)
    }
}

export const changeCheck = async(index) =>{
    try{
        const id=JSON.parse(localStorage.getItem('Profile'))._id
        const {data} = await api.dragNotes(id,index);
        localStorage.setItem('Profile',JSON.stringify(data.data))

    }catch(error){
        console.log(error.message)
    }

}