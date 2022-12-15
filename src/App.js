import { useEffect, useState } from "react";
import "./App.css";
import Person from "./components/Person";
import { addPerson, getPeople } from "./datamanager";

function App() {
    const [people, setPeople] = useState([]);
    const [name, setName] = useState("");
    const [height, setHeight] = useState();
    const [mass, setMass] = useState();

    useEffect(() => {
        getPeople().then((peopeData) => {
            setPeople(peopeData);
        });

        // fetching the data directly from the api
        // fetch("https://swapi.dev/api/people")
        //     .then((res) => res.json())
        //     .then((data) => {
        //         setPeople(data.results);
        //     });
    }, []);

    console.log(people);

    return (
        <div
            className="App"
            style={{ display: "flex", flexDirection: "row", gap: "20px" }}
        >
            <input type="text" placeholder="name" onChange={(e) => {setName(e.target.value)}} />
            <input type="number" placeholder="height" onChange={(e) => {setHeight(e.target.value)}} />
            <input type="number" placeholder="mass" onChange={(e) => {setMass(e.target.value)}} />
            <button onClick={async()=>{
                await addPerson(name,height,mass)
                getPeople().then((peopeData) => {
                    setPeople(peopeData);
                });
            }}>mentés</button>

            {people.map((person, i) => (
                <Person
                    key={i}
                    name={person.name}
                    height={person.height}
                    mass={person.mass}
                />
            ))}
        </div>
    );
}

export default App;
