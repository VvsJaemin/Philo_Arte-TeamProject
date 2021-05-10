import React, {useState, useEffect} from 'react'
import axios from 'axios'
import 'common/style/Common.css'
import 'article/style/ArticleList.css'
const SeoulCCTV = () => {
   
    const [items, setItems]=useState([])

    useEffect(()=>{
        axios.get('/data/SeoulCCTV.json')
        .then(res=>{
            setItems(res.data.DATA)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

        return (
            <> <h2> HTML Table</h2> 
            < table > 
            <tr>
                <th>No.</th>
                <th>기준날짜</th>
                <th>카메라코드</th>
                <th>카메라명칭</th>
                <th>설명</th>
            </tr>
         {

             items.map((item, id)=>{
                 return( 
                     <tr key={id}>
                         <th>{id+1}</th>
                         <th>{item.checktime}</th>
                         <th>{item.deviceid}</th>
                         <th>{item.devicename}</th>
                         <th>{item.description}</th>
                     </tr>
                 )
             })

         }
        </table>
    </>
)
    
}
export default SeoulCCTV