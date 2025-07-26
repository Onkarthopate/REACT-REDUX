//   const res = await fetch("https://jsonplaceholder.typicode.com/users");

import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import axios from 'axios';
const columns = [
    { name: "Name", selector: row => row.name, sortable: true },
    { name: "Email", selector: row => row.email, sortable: true },
    { name: "Phone", selector: row => row.phone, sortable: true },
    { name: "Company", selector: row => row.company.name, sortable: true },
]

const UserTable = () => {
    const [user, setUser] = useState([]);
    const [search, setSearch] = useState('');
      const [filteredUsers, setFilteredUsers] = useState([]);


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get('https://jsonplaceholder.typicode.com/users');
                setUser(res.data);
                setFilteredUsers(res.data);
                console.log(res.data);

            } catch (error) {
                console.log('error', error.message);
            }
        }

        fetchUsers();
    }, [])

    useEffect(()=>{
       const id = setTimeout(() => {
            const result = user.filter(item=>
                item.name.toLowerCase().includes(search.toLowerCase())
            )
            setFilteredUsers(result);
        }, 1000);

        return ()=> clearTimeout(id)
    },[search,user])


    return (
        <div>
            <div>
                <input type="search" placeholder='search here' onChange={e=>setSearch(e.target.value)} value={search}/>
            </div>
            <div>
                <DataTable
                columns={columns}
                data={filteredUsers}
                pagination
                highlightOnHover
                selectableRows
                striped
            />
            </div>
            
        </div>
    )
}

export default UserTable