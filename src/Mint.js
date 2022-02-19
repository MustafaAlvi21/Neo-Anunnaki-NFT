import React from "react";
import { ethers } from 'ethers';
import nfts from "./nftsmint.gif";
import wallets from "./extra/wallets.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
const password = "123456";
// eslint-disable-next-line import/no-anonymous-default-export
export default ({ login, connected, changeNftUp, cont, changeNftDown }) => {

    const name = async () => { 
        let newAccount = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log(newAccount);
        try { 
            console.log(wallets);
            const whiteListed = wallets.filter(checkAdult);
            function checkAdult(wallets) {
              return wallets.toLowerCase() === newAccount[0].toLowerCase();
            }

            if(whiteListed.length > 0){
                const options = {value: ethers.utils.parseEther("0.01")}
                const tx = await cont.WHITELIST_MINT(1, password, options)
                .then(res => { 
                    // use the returned value here
                    setTimeout(() => {
                        alert("Minted successfully")
                        console.log(res); 

                    }, 15000);
                }) 
            } else {
                alert("Caller is not whitelisted");
            }

        }
        catch (error) { 
            alert("Having some error")
            console.log(error);
         } 
    }
    

    
    return(
        <>
            <div className="mint-block" id="mint">
                <h2>Mint</h2>
                <div className="nft-box container">
                    <div className="nft-image">
                        <div className="img-nft">
                            <img src={nfts} />

                            <div className="nft-number">
                                <p>Alpha-Genesis #0</p>
                            </div>
                        </div>
                        <div className="nft-buy">
                            <div className="nft-cost">
                                <p>Price</p>
                                <p>1 Ether</p>
                            </div>
                            {connected ? (
                                <button className="btn btn-mint" onClick={() => name()}>Mint NFT</button>
                            ) : (
                                <button className="btn btn-mint" onClick={() => login()}>Connect Wallet</button>
                            )}
                        </div>
                    </div>

                    <div className="nft-info">
                        {connected ? (
                            <button className="btn btn-primary btn-connect">Connected</button>
                        ) : (
                            <button className="btn btn-primary btn-connect" onClick={() => login()}>Connect Wallet</button>
                        )}                      
                        <div className="nft-info-text">
                            <h3>Alpha-Genesis</h3>
                            <p>An epic array of pixel and voxel art, created through the combined effort of four talented pixel, voxel and 3D artists, paired with a solid utility, and a sound vision.</p>
                        </div>
                    </div>

                    
                </div>

            </div>
        
        </>

    );

}