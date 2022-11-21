import React, {useMemo, useState} from "react";

export default {
    title: "useMemo"
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}

const UsersSecret = (props: { users: Array<string> }) => {
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Alex', 'Bob', 'Tom'])

    const newArray=useMemo(()=>{
        return users.filter(u=>u.toLowerCase().indexOf("o")>-1)
    },[users])

    const addUser = () => {
        const newUsers = [...users, 'John' + new Date().getTime()]
        setUsers(newUsers)
    }


    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <button onClick={addUser}>add user</button>
        <Users users={newArray}/>
    </>
}