import {useState} from "react"
import Styles from './style.module.css'
import ReviewDefault from "../../images/Default/gl-review-disable.svg"
import Review from "../../images/Default/gl-review.svg"
import EqualizerDefault from "../../images/Default/gl-equalizer-disable.svg"
import Equalizer from "../../images/Default/gl-equalizer.svg"
import OrgDefault from "../../images/Default/ico-org-disable.svg"
import Org from "../../images/Default/ico-org.svg"
import Delete from "../../images/Default/gl-delete.svg"
import Check from "../../images/Default/gl-check.svg"
import Warning from "../../images/Default/gl-warning.svg"
import InputSecondary from "../../Components/InputSecondary"
import {TextAreaSecondary} from "../../Components/TextAreaSecondary"
import AccordionTable from "../../Components/AccordionTable"



let data = ["um"]
const ModalOrganization = () => {
    const [success, setSuccess] = useState(true)

    function selectOne(removeUm,removeDois){
        let a = document.querySelector("#target")
        a.classList.remove(Styles[removeUm])
        a.classList.remove(Styles[removeDois])
    }

    
    function selectTwo(add,remove){
        let a = document.querySelector("#target");
        let equalizeDefault = document.querySelector("#equalizeDefault");
        let equalize = document.querySelector("#equalize");
        a.classList.remove(Styles[remove])
        a.classList.add(Styles[add])
        equalizeDefault.classList.remove(Styles.default)
        equalizeDefault.classList.add(Styles.color)
        equalize.classList.add(Styles.default)
    }

    
    function selectThree(add,remove){
        let a = document.querySelector("#target")
        let infoDefault = document.querySelector("#infoDefault");
        let info = document.querySelector("#info");
        a.classList.remove(Styles[remove])
        a.classList.add(Styles[add])
        infoDefault.classList.remove(Styles.default)
        infoDefault.classList.add(Styles.color)
        info.classList.add(Styles.default)
    }


    function buttons(step){
        let next = document.querySelector("#nextButton")
        let back = document.querySelector("#backButton")

        if(step == "um"){
            back.classList.add(Styles.remove)
        }else if(step == "dois"){
            back.classList.remove(Styles.remove)
        }else if(step == "tres"){
            back.classList.remove(Styles.remove)
        }
    }

    return (
        <div  className={Styles.contOverlay}>
            <div onClick={()=>{console.log("Clicou")}} className={Styles.overlay}></div>
            <div className={`${Styles.container} ${!success && Styles.error}`}>
                <div className={Styles.close}>
                    <img src={Delete} alt="delete"/>
                </div>
                <div className={Styles.center}>
                    <div className={`${Styles.slide}`}>
                        <div className={Styles.cont}>
                            <h3>Add a new organization</h3>
                            <div className={Styles.top}>
                                <div className={Styles.icons}>
                                    <div onClick={()=>{selectOne("stepTwo","stepThree");buttons("um")}} className={Styles.contIco}>
                                        <img className={Styles.default} src={Org} alt="organization"/>
                                    </div>
                                    <strong>Create organization</strong>
                                </div>
                                <div className={Styles.icons}>
                                    <div  onClick={()=>{selectTwo("stepTwo","stepThree");buttons("dois")}} className={Styles.contIco}>
                                        <img id="equalize" className={Styles.color} src={Equalizer} alt="organization"/>
                                        <img id="equalizeDefault" className={Styles.default} src={EqualizerDefault} alt="organization disabled"/>
                                    </div>
                                        <strong>Configure solutions</strong>
                                </div>
                                <div className={Styles.icons}>
                                    <div  onClick={()=>{selectThree("stepThree","stepTwo");buttons("tres")}} className={Styles.contIco}>
                                        <img id="info" className={Styles.color} src={Review} alt="organization"/>
                                        <img id="infoDefault" className={Styles.default} src={ReviewDefault} alt="organization disabled"/>
                                    </div>    
                                    <strong>Review info</strong>
                                </div>
                            </div>
                            <div className={Styles.middle}>
                                <div id="target" className={`${Styles.contMiddle} `}>

                                    <div className={Styles.um}>
                                        <InputSecondary topLabel="Organization name" />
                                        <TextAreaSecondary title="Description (optional)"/>
                                    </div>
                                    <div className={Styles.dois}>
                                        <AccordionTable data={[{title:"Gl Utilit",list:[{tag:"create at",title:"abcdef"}]}]} selectSolutions={(value)=>console.log(value)}/>
                                    </div>
                                    <div className={Styles.tres}>
                                        <div className={Styles.tresText}>
                                            <strong>Review new organization info</strong>
                                        </div>
                                        <div className={Styles.tresCont}>
                                            <div className={Styles.list}>
                                                <strong>Organization name</strong>
                                                <p>Pic Pay Serviços Ltda.</p>
                                            </div>
                                            <div className={Styles.list}>
                                                <strong>Organization description</strong>
                                                <p>CNPJ 05.545.876/0001-02</p>
                                            </div>
                                            <div className={Styles.list}>
                                                <strong>Hired solutions and available data types</strong>
                                                {
                                                    data.map(each=>{
                                                        return(
                                                            <>
                                                                <p>GL UTILITIES</p>
                                                                <hr/>
                                                                <div className={Styles.contTag}>
                                                                    <div className={Styles.tag}>
                                                                        User ID
                                                                    </div>
                                                                    <div className={Styles.tag}>
                                                                        Device ID
                                                                    </div>
                                                                    <div className={Styles.tag}>
                                                                        User ID
                                                                    </div>
                                                                </div>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={Styles.bottom}>
                                <div id="backButton" className={Styles.backButton}>
                                    <buttos>Voltar</buttos>
                                </div>
                                <div id="nextButton" className={Styles.nextButton}>
                                    <buttos>Next</buttos>
                                </div>
                            </div>
                        </div>
                        <div className={Styles.cont}>
                           {success && <>
                                <div className={Styles.checkTop}>
                                    <img src={Check} alt="check"/>
                                    <strong className={Styles.green}>Organization has been created!</strong>
                                </div>
                                <div className={Styles.checkMiddle}>
                                    <p>An admin user invitation link has been generated, please share it with the person in charge of managing GL services within the organization.</p>
                                </div>
                                <div className={Styles.checkBottom}>
                                    <div className={Styles.contInput}>
                                        <InputSecondary/>
                                    </div>
                                </div>
                            </>}
                            {!success && <>
                                <div className={Styles.checkTop}>
                                    <img src={Warning} alt="Warning"/>
                                    <strong className={Styles.red}>Quit organization creation</strong>
                                </div>
                                <div className={Styles.checkMiddle}>
                                    <p>Are you sure you want to quit add organization process? This will remove all data inserted until this moment.</p>
                                </div>
                                <div className={Styles.checkBottom}>
                                    <div className={Styles.contButton}>
                                        <button>cancel</button>
                                        <button>yes, quit creation</button>
                                    </div>
                                </div>
                            </>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalOrganization;