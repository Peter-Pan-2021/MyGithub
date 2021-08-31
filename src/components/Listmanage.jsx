import React, { Component } from "react";
const {useState} = React;

function Listmanage() {
  const [pets, setPets] = useState([
    { name: "Aaa", species: "cat", age: "5", id: 1 },
    { name: "Bbb", species: "dog", age: "3", id: 2 },
    { name: "Ccc", species: "rabbit", age: "4", id: 3 },
    { name: "Ddd", species: "horse", age: "6", id: 4 },
    { name: "Eee", species: "monkey", age: "7", id: 5 },
  ]);

  return(
      <div>
      <ul>
          <AddPetForm setPets={setPets}/>
          {pets.map(pet=><Pet setPets={setPets} name={pet.name} species={pet.species} age={pet.age} id={pet.id} />)}
      </ul>      
      </div>
  )
}  

function Pet(props){
  function handleDelete()
  {
    console.log(props);
    props.setPets(prev=>prev.filter(pet=>pet.id !== props.id))
  }
  return(
    <li>{props.name} is a {props.species} and is {props.age} years old.
     <button onClick={handleDelete}> Delete</button>
    </li>
  )
}

function AddPetForm(props){
const [name,setName]=useState()
const [species, setSpecies] = useState()
const [age,setAge]=useState() 


    function handleSubmit(e){
        e.preventDefault()
        props.setPets(prev=>prev.concat({name,species,age,id:Date.now()}))
    }
    return (
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Add New Pet</legend>
          <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
          <input value={species} onChange={e=> setSpecies(e.target.value)} placeholder="Species" />
          <input value={age} onChange={e=> setAge(e.target.value)} placeholder="Age in years" />
          <button>Add Pet</button>
        </fieldset>
      </form>
    );
}
export default Listmanage;
