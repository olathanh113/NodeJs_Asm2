import axios from "axios"
import { useEffect, useState } from "react";
import { IUser } from "../../interfaces/user";


const MainUser  = () =>{
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(()=>{
        
        axios.get("http://localhost:8080/api/users")
            .then(({data})=>{
                setUsers(data.data);
            })
    },[])
    console.log(users)

    const handleRemoveUser = (id: string | number) =>{

        console.log(id);
        axios.delete(`http://localhost:8080/api/users/${id}`)
        .then((response)=>{
            const change = window.confirm("You Should Remove ?")
            if(change){
                const newData = users.filter((user) => user._id !== id)
                setUsers(newData)
            }
        })
        .catch((error) => {
            console.log(error);
        });


    }



    return <div className="col-9 pt-5">
    <h3>ADMIN USER</h3>
    <div>
        
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mật Khẩu</th>
                    <th>Vai Trò</th>
                    <th>Thao tác</th>
                </tr>
            </thead>
            <tbody>

                {users.map((user,index)=>{
                    return (
                        <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td>{user.role}</td>
                        <td>
                        <button onClick={() =>{handleRemoveUser(user._id)}} className="btn btn-primary ">Xóa</button>
                        <button type="button" className="btn btn-primary">Sua</button>
                        
                        </td>

                    </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </div>
}
export default MainUser;
