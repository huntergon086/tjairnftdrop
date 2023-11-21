import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Navbar() {
     
    const address = useAddress();

    return(
        <div className={styles.container}>
             <div className={styles.navbar}>
                <Link href="/">
                    <p>Tjair NFTs</p>
                </Link>
                <div className={styles.navLinks}>
                     {address && (
                        <Link href={`profile/${address}`}>
                            <p>My NFTs</p>
                        </Link>
                    )}
                </div>

                <div className={styles.navLinks}>
                     {address && (
                        <Link target="_blank" href={`https://faucet-xhunter-7057567-1.vercel.app/`}>
                            <p>Faucet</p>
                        </Link>
                    )}
                </div>

                <div className={styles.navLinks}>
                     {address && (
                        <Link href="/">
                            <p>Collection</p>
                        </Link>
                    )}
                </div>


                <ConnectWallet
                />
            </div>
        </div>
)
}