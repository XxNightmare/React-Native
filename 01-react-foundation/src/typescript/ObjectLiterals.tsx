interface Person {
    firtsName: string;
    lastname: string;
    age: number;
    isAlive?: boolean;  // El valor '?' significa OPCIONAL
    address: {
        country: string;
        houseNo: number;
    }
} 

export const ObjectLiterals = () => {

    const person: Person = {
        firtsName: "Fernando",
        lastname: "Herrera",
        age: 37,
        address: {
            country: "Canada",
            houseNo: 615
        }
    };

  return (
    <>
        <h3>Objetos literales</h3>

        <pre>
            { JSON.stringify(person, null, 2) }
        </pre>
    </>
  )
}
