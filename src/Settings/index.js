import Styles from './settings.module.css';
import SettingsController from '../../components/SettingsController'
import { useLocation } from 'react-router-dom'
import { updateUser,getRoles,deleteCookie,customerList} from '../../services/CustomerService'
import { newPasswordAPI,logout,getOrganizationList } from '../../services/UserService'
import SettingsOverview from '../../subpage/SettingsOverview';
import SettingsMyAccount from '../../subpage/SettingsMyAccount/index';
import SettingsLoginSecurity from '../../subpage/SettingsSecurity/index';
import SettingsOrganization from '../../subpage/SettingsOrganization/index';
import SettingsUsers from '../../subpage/SettingsUsers/index';


function Settings(user,newRequestUser) {
    const location = useLocation();
    const apiService = {
        "/Settings/MyAccount": {
            updateUser: function (name, lastname, email, phone, country,street_address, apt_suite, city, state, zip, job_title, company) { 
                return updateUser(name, lastname, email, phone, country,street_address, apt_suite, city, state, zip, job_title, company) },
            getUser: function () { return newRequestUser() },
        },
        "/Settings/LoginSecurity": {
            newPassword: function (email,password,newPassword) { return newPasswordAPI(email,password,newPassword) },
            logout: function () { return logout() },
            deleteCookie: function (id,code) { return deleteCookie(id,code) },
            getUser: function () { return newRequestUser() },
        },
        "/Settings/Users":{
            listUsers: function () { return customerList() },
            getUser: function () { return newRequestUser() },
            getRoles: function () { return getRoles() },
        },
        "/Settings/Organizations": {
            listOrganization: function () { return getOrganizationList()},
        },
    }

    const subpages = {
        "/Settings/Overview":       (args) => { return <SettingsOverview {...args} />},
        "/Settings/MyAccount":      (args) => { return <SettingsMyAccount {...args} />},
        "/Settings/LoginSecurity":  (args) => { return <SettingsLoginSecurity {...args} />},
        "/Settings/Organizations":  (args) => { return <SettingsOrganization {...args} />},
        "/Settings/Users":          (args) => { return <SettingsUsers {...args} />},
    }

    return (
        <div className={Styles.container}>
            <div className={Styles.pageContent}>
                <div className={Styles.pageContainer}>
                    <div className={Styles.content}>
                        <SettingsController 
                            location={location}
                            apiService={apiService}
                            subpages={subpages}
                            user={user}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings