import React, {Component, useEffect, useState} from 'react';
import axios from "axios";
import RowCol from "./Row";

export default function FetchData(){
    const [lastSort, setLastSort] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
  useEffect(async function () {
    
      
          const response = await axios.get('https://bgy-site-users-default-rtdb.firebaseio.com/users.json');
          let users = Object.entries(response.data);
          let sortedUsers = users.sort(function (a,b) {
              return a[1].sexNumber - b[1].sexNumber
          })
          setLastSort(sortedUsers.reverse())
            setIsLoading(false)
            


      
      
      
    
    
  }, [])
    
        return(
            <>
                <table className="table table-bordered table-striped">
                    <tbody>
                    {!isLoading && (
                        lastSort.map((user) => <RowCol key={user[0]} person={user[1]}></RowCol>)
                    )}
                    {
                        isLoading && (
                            <tr>Loading...</tr>
                        )
                    }
                    </tbody>

                </table>
            </>
        )
    
    
    
    
}