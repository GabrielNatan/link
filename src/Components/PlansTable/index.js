import Styles from './plansTable.module.css'

function PlansTable({  }) {

    return (
        <div className={`${Styles.container}`}>
           <div className={Styles.top}>
               <div className={Styles.left}>
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
                <div className={Styles.right}>
                    <input type="text"/>
                </div>
           </div>
           <table className={Styles.bottom}>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Order number</th>
                        <th>Check-in plan</th>
                        <th>Notification plan</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>jan 10, 2021</td>
                        <td>Invoice</td>
                        <td>040182078BR</td>
                        <td>GL Smart Retail - 200M</td>
                        <td>Third party - 100k</td>
                        <td className={Styles.strong}>R$ 10.850,00</td>
                        <td>... \dsafdfdssf</td>
                    </tr>
                    <tr>
                        <td>jan 10, 2021</td>
                        <td>Invoice</td>
                        <td>040182078BR</td>
                        <td>GL Smart Retail - 200M</td>
                        <td>Third party - 100k</td>
                        <td className={Styles.strong}>R$ 10.850,00</td>
                        <td>... \dsafdfdssf</td>
                    </tr>
                </tbody>
           </table>
        </div>
    )
}

export default PlansTable
