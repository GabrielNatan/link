import Styles from './accordionTable.module.css'

function AccordionTable({ data,selectSolutions }) {
    const formatId = (id)=>{
        // return id.replaceAll(" ","")
    }
    const select = (status,id) => {
        let item = document.querySelector(`#${id}`)
        if([...item.classList].includes(Styles.active)){
            item.classList.remove(Styles.active)
            if(status === "all"){
                id = id.split("-")[1]
                let itemsList = [...document.querySelectorAll(`[data-select='${id}'] button`)];
                itemsList.forEach(each=>{
                    each.classList.remove(Styles.active)
                })
    
            }
        }else{
            item.classList.add(Styles.active)
            if(status === "all"){
                id = id.split("-")[1]
                let itemsList = [...document.querySelectorAll(`[data-select='${id}'] button`)];
                itemsList.forEach(each=>{
                    each.classList.add(Styles.active)
                })
    
            }
        }
        
    }

    const open = (id) => {
        let item = document.querySelector(`#${id}`)
        let arrow = document.querySelector(`#chevron-${id}`)
        item.classList.toggle(Styles.active)
        arrow.classList.toggle(Styles.active)
    }

    return (
        <div className={Styles.container}>
            {data.map(each => {
                return (
                    <div className={Styles.contAcordeon}>
                        <div className={Styles.contTop}>
                            <div className={Styles.title}>
                                <strong>{each.title}</strong>
                            </div>
                            <div className={Styles.togglrButton}>
                                <button data-el={formatId(each.title)} id={`titleList-${formatId(each.title)}`} onClick={(e) => { select("all",`titleList-${formatId(each.title)}`);selectSolutions({tag:"all",el:e.target}) }} className={Styles.contButton}>
                                    <span data-el={formatId(each.title)} className={Styles.circleButton}></span>
                                </button>
                                <span id={`chevron-datCont-${formatId(each.title)}`} onClick={()=>open(`datCont-${formatId(each.title)}`)} className={`${Styles.arrow} gl-chevron-right`} >x</span>
                            </div>
                        </div>
                        <div id={`datCont-${formatId(each.title)}`} className={Styles.dataCont}>
                            <ul className={Styles.list}>
                                {each.list.map(item => {
                                    return (
                                        <li data-select={`${formatId(each.title)}`} className={Styles.itemList}>
                                            <span>{item.tag}</span>
                                            <div className={Styles.togglrButton}>
                                                <button data-el={`${item.tag}-${formatId(each.title)}`} id={`list-${formatId(each.title)}-${formatId(item.tag)}`} onClick={(e) => {select("one",`list-${formatId(each.title)}-${formatId(item.tag)}`);selectSolutions({tag:"one",el:e.target})}} className={Styles.contButton}>
                                                    <span data-el={`${item.tag}-${formatId(each.title)}`} className={Styles.circleButton}></span>
                                                </button>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default AccordionTable
