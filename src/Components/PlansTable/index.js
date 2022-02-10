import Styles from './plansTable.module.css'

function PlansTable({  }) {

    return (
        <div className={`${Styles.container}`}>
           <div className={Styles.top}>
               <div className={Styles.tabs}>
                   <strong>Plan details</strong>
               </div>
               <div className={Styles.tabs}>
                   <strong>Setup fees</strong>
               </div>
               <div className={Styles.tabs}>
                   <strong>Payment method</strong>
               </div>
           </div>
           <table className={Styles.bottom}>
                <thead>
                    <tr>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            jan 10, 2021
                        </td>
                    </tr>
                </tbody>
           </table>
        </div>
    )
}

export default PlansTable
