 import React, {Component} from 'react';
import {choice} from './helper';
import Coin from './Coin'; 

class CoinContainer extends Component{
    static defaultProps = {
        coins: [
            {side: "Head", imgSrc: "https://tinyurl.com/react-coin-heads-jpg"},
            {side: "Tail", imgSrc: "https://bjc.edc.org/June2017/bjc-r/img/5-algorithms/img_flipping-a-coin/Tails.png"}
        ]
    }
    constructor(props){
        super(props);
        this.state = {
            currCoin : null,
            nFlip : 0,
            nHeads : 0,
            nTails : 0
        }
        this.Clickhandler = this.Clickhandler.bind(this);
    }
    flipCoin(){
        const newCoin = choice(this.props.coins);
        this.setState( st => {
            return{
                currCoin: newCoin,
                nFlip : st.nFlip + 1,
                nHeads : st.nHeads + (newCoin.side === "Head" ? 1:0),
                nTails : st.nTails + (newCoin.side === "Tail" ? 1:0)
            };
        });
    }
    Clickhandler(e){
        this.flipCoin();
    }
    render(){
        return(
            <div className = "CoinContainer">
                <h2>Let's flip coin</h2>
                {this.state.currCoin && <Coin info={this.state.currCoin}/>}
                <button onClick = {this.Clickhandler}>Flip me</button>
                <p>
                    Out of {this.state.nFlip} flips, there's have been {this.state.nHeads} Heads and {this.state.nTails} Tails.
                </p>


            </div>
        )
    }
}
export default CoinContainer;