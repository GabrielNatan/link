import Styles from './devicesList.module.css'

function DevicesList({ data }) {

    return (
        <table className={Styles.container}>
           <thead>
               <tr>
                   <th>Device ID</th>
                   <th>Registration date</th>
                   <th>Last location</th>
                   <th>Status</th>
               </tr>
           </thead>
           <tbody>
               <tr>
                   <td><strong>78896</strong></td>
                   <td>2021-01-07 18:17:54</td>
                   <td>Av. Francisco Matarazzo, 2000...</td>
                   <td><span></span><strong>Online</strong></td>
               </tr>
               <tr>
                    <td><strong>78896</strong></td>
                   <td>2021-01-07 18:17:54</td>
                   <td>Av. Francisco Matarazzo, 2000...</td>
                    <td><span></span><strong>Online</strong></td>
               </tr>
           </tbody>

        </table>
    )
}

export default DevicesList
