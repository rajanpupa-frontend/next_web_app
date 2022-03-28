import CSS from "./header.module.css";
import {signIn, signOut, useSession} from "next-auth/react";
import Image from "next/image";
import UtilCSS from "../styles/utils.module.css";

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
        <div className={`${CSS.dropdown} ${CSS.flex} ${CSS.padUD}`}>
            <a className={`${CSS.dropbtn} ${CSS.flex}`}  onClick={ () => toggleDisplay("signinButton")}>
                <Image src="/UserProfile.svg" alt="Login" width={36} height={36}/>
                <Image src="/dropdown.svg" alt="Expand" width={24} height={24} />
            </a>
            <div className={`${CSS.dropdownContent} ${CSS.roundedBlk}`} id="signinButton">
                <a onClick={() => signIn()}>Sign In</a>
            </div>
        </div>
    )

    // if authenticated
    if (session) {
        authHtml = (
            <>
                <div className={`${CSS.dropdown} ${CSS.flex} ${CSS.padUD}`}>
                    <a className={`${CSS.dropbtn} ${CSS.flex}`} onClick={ () => toggleDisplay("signoutButton")}>
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
                    <div className={`${CSS.dropdownContent} ${CSS.roundedBlk}`} id="signoutButton">
                        <a onClick={() => signOut()}>Sign Out</a>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <nav className={`${CSS.flex} ${CSS.w100} ${CSS.center} ${CSS.flex} ${CSS.shadow1}`}>
                <div className={`${CSS.center} ${CSS.flex}`}>
                    <h4> Mock University </h4>
                </div>
                <div className={`${CSS.center} ${CSS.flex}`}>
                    <ul className={`${CSS.flex} ${CSS.relative} ${CSS.none}`}>
                        <li className={`${CSS.padLR}`}>@</li>
                        {
                            state.menu.map((m, index) => {
                                return <li className={`${CSS.padLR}`} key={index}>{m.name}</li>
                            })
                        }
                    </ul>
                </div>
                <div className={`${CSS.flexReverse} ${CSS.w20}`}>
                    {authHtml}
                </div>
            </nav>
        </>
    )
}
