import React, { useState, useEffect } from 'react'
import Styles from './organization.module.css'
import Overlay from '../../components/Overlay/Overlay'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import ButtonSecondaryOutline from '../../components/ButtonSecondaryOutline/index'
import Modal from "../../components/NewOrganizationModal/index"
import EditModal from "../../components/EditOrganizationModal/index"
import DeleteModal from "../../components/DeleteOrganizationModal/index"
import { OldFilterContext } from '../../providers/filterOld'
import { organizationList } from '../../services/OrganizationService'
import Organization from "../../components/OrganizationList"
import { organizationInvite } from '../../services/UserService'
import NeedHelpCopyright from '../../components/NeedHelpCopyright'
import StateModal from "../../components/StateModal"

function SettingsOrganization({apiService}) {
    const [sideOpen, setSideOpen] = useState(false)
    const [toggleModal, setToggleModal] = useState("close")
    const [edit, setEdit] = useState({ nameEdit: "", descriptionEdit: "" })
    const [idOrg, setIdOrg] = useState()
    const [organization, setOrganization] = useState([])
    const [idOrganizationCustomer, setIdOrganizationCustomer] = useState([])
    const [token, setToken] = useState({})
    let { settingslinksArr } = React.useContext(OldFilterContext)
    const [stateModal,setStateModal] = useState({open:false,status:false,title:"Esse é o titulo",text:"ESSE E O TEXO"})
    let idTimeOut;

    useEffect(() => {
        let {listOrganization} = apiService
        console.log(listOrganization)
        listOrganization().then(res => {
            setOrganization(res)
        }).catch(err=>console.log("ERROOOOOOO"))
        return ()=>clearTimeout(idTimeOut)

    }, [])

    const actionOrganization = (id, value) => {
        if (value === "edit") {
            setToggleModal("edit")
            setIdOrg(id)
            organization.forEach(each=>{
                if(each.id === id){
                    setEdit({nameEdit:each.org_name,descriptionEdit:each.org_description})
                }
            })
        } else {
            setToggleModal("delete")
            setIdOrg(id)
        }
    }

    const message = (item)=>{
        if(item){
            setStateModal({open:true,status:"green",title:"Dados alterados com sucesso!",text:"dados atualizados"})
            idTimeOut = setTimeout(()=>{
                setStateModal({open:false,status:"",title:"Esse é o titulo",text:"ESSE E O TEXO"})
            },4000)
        }else{
            setStateModal({open:true,status:"red",title:"Erro:",text:"algo de errado"})
            idTimeOut = setTimeout(()=>{
                setStateModal({open:false,status:"",title:"Esse é o titulo",text:"ESSE E O TEXO"})
            },4000)
        }
    }

    return (
        <div className={Styles.container}>
            <HelmetProvider>
                <Helmet>
                    <meta name="theme-color" media="(prefers-color-scheme: light)" content="#F5F8F9" />
                    <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#292B2D" />
                    <title>Organization - Group Link</title>
                </Helmet>
            </HelmetProvider>
            <div className={Styles.pageContent}>
                {toggleModal != "close" && <div className={Styles.modal}>
                    <div onClick={() => setToggleModal("close")} className={Styles.overlay}></div>
                    {toggleModal === "new" && <div className={Styles.contModal}><Modal message={message} type="edit" close={() => setToggleModal("close")} /></div>}
                    {toggleModal === "edit" && <div className={Styles.contModal}><EditModal  message={message} name={edit.nameEdit} description={edit.descriptionEdit} id={idOrg} type="edit" close={() => setToggleModal("close")} /></div>}
                    {toggleModal === "delete" && <div className={Styles.contModal}><DeleteModal message={message} id={idOrg} type="edit" close={() => setToggleModal("close")} /></div>}
                </div>}
                <div className={Styles.pageContainer}>
                    <div>
                        <div className={Styles.top}>
                            <span className={Styles.navigation}>Settings</span>
                            <span className={Styles.title}>Organization</span>
                        </div>

                        <div className={Styles.content}>
                            <div className={Styles.buttonContainer}>
                                <ButtonSecondaryOutline onClick={() => setToggleModal("new")} title='new organization' />
                            </div>
                            {false ? <div className={Styles.emptyContainer}>
                                <span className={`${Styles.emptyIcon} gl-building`} />
                                <span className={Styles.emptyTitle}>No organization added</span>
                                <span className={Styles.emptyDesc}>Click <button onClick={() => setToggleModal("new")} className={Styles.emptyButton}>Here</button> to add your first one</span>
                            </div>
                                : <div className={Styles.fillContainer}>
                                    {organization.map((each, key) => {
                                        return (
                                            <Organization key={key} token={token} id={idOrganizationCustomer} onClick={(value) => actionOrganization(each.id, value)} org={each} />
                                        )
                                    })}
                                </div>
                            }

                        </div>
                    </div>

                    <NeedHelpCopyright />
                </div>
            </div>
            <StateModal open={stateModal.open}  status={stateModal.status} title={stateModal.title} text={stateModal.text}/>           

        </div>
    )
}

export default SettingsOrganization
