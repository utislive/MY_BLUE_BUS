import React from "react";
import Airport from "../../component/Airport-block/Airport";
import Five from "../../component/five/Five";
import Four_div from "../../component/four/Four_div";
import Last from "../../component/last/Last";
import Search from "../../component/search_area/Search";
import Seven from "../../component/seven/Seven";
import Six from "../../component/six/Six";
import Third from "../../component/Third_box/Third";
import css from './main.module.css'
const Main = ({ user }) => {
    return (
        <>
            <div className={css.main}>
                <Search u={user} />
                <Airport />
                <Third />
                <Four_div />
                <Five />
                <Six />
                <Seven />
                <Last />
            </div>
        </>
    )

}
export default Main;