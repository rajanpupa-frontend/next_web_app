import {signIn, signOut, useSession} from "next-auth/react";
import Image from "next/image";
import CSS from "./header.module.css";
import UtilCSS from "/styles/utils.module.css";
import Comn from "/styles/common.module.css";
import DDN from "/styles/dropdown.module.css";

const state = {
    room: 'AWS',
    name: 'Questions',
    menu: [
        {name: 'Home', path: "/posts/posts", enable: true},
        {name: 'Explore', path: "/posts/posts", enable: true},
        {name: 'About', path: "/about/me", enable: true}
    ]
}
function toggleDisplay(idname) {
    let content = document.getElementById(idname);
    if(!content) return;
    if(content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "";
    }
}
export default function Header() {
    const {data: session, status} = useSession();
    // not authenticated html
    var authHtml = (
        <div className={`${DDN.dropdown} ${Comn.flex} ${DDN.padUD}`}>
            <a className={`${DDN.dropbtn} ${Comn.flex}`}  onClick={ () => toggleDisplay("signinButton")}>
                <Image src="/UserProfile.svg" alt="Login" width={36} height={36}/>
                <Image src="/dropdown.svg" alt="Expand" width={24} height={24} />
            </a>
            <div className={`${DDN.dropdownContent} ${CSS.roundedBlk}`} id="signinButton">
                <a onClick={() => signIn()}>Sign In</a>
            </div>
        </div>
    )

    // if authenticated
    if (session) {
        authHtml = (
            <>
                <div className={`${DDN.dropdown} ${Comn.flex} ${CSS.padUD}`}>
                    <a className={`${DDN.dropbtn} ${Comn.flex}`} onClick={ () => toggleDisplay("signoutButton")}>
                        <Image
                            priority
                            src={session.user?.image}
                            className={UtilCSS.borderCircle}
                            height={32}
                            width={32}
                            alt={session.user?.name}
                        />
                        <Image src="/dropdown.svg" alt="Expand" width={24} height={24} />
                    </a>
                    <div className={`${DDN.dropdownContent} ${CSS.roundedBlk}`} id="signoutButton">
                        <a onClick={() => signOut()}>Sign Out</a>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <nav className={`${Comn.flex} ${Comn.w100} ${CSS.center} ${Comn.flex} ${CSS.shadow1} ${CSS.top}`}>
                <div className={`${CSS.center} ${Comn.flex}`}>
                    <h2> Mock University </h2>
                </div>
                <div className={`${CSS.center} ${Comn.flex}`}>
                    <ul className={`${Comn.flex} ${CSS.relative} ${CSS.none}`} id="menu">
                        {
                            state.menu.map((m, index) => {
                                return <li className={`${CSS.padLR} ${CSS.bottom} ${DDN.dropdown}`} key={index}>
                                    <a className={DDN.dropbtn}> {m.name} </a>
                                </li>
                            })
                        }
                    </ul>
                </div>
                <div className={`${Comn.flexReverse} ${Comn.w20}`}>
                    {authHtml}
                </div>
            </nav>
        </>
    )
}
