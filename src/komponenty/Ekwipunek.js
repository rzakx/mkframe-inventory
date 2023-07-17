import { useState, useEffect } from "react"
export default function Ekwipunek(props){
    const [aktualnaWaga, setAktualnaWaga] = useState(0);
    useEffect(() => {
		window.addEventListener('message', testowe);
		return( () => {
			window.removeEventListener('message', testowe);
		});

	}, []);

	const testowe = (co) => {
		console.log(co);
		setAktualnaWaga(co.data.waga || 0);
	};
    
    const bliskiLimitu = (akt, limit) => {
        if((akt/limit*100) >= 90){
            return "crimson"
        } 
    };

    const przesuniecie = (akt, limit) => {
        const wartosc = akt/limit*100;
        if(wartosc >= 100){
            return 'translateX(100%)'
        } else {
            return `translateX(${wartosc}%)`
        }
    };

    const resztaGridu = () => {
        let wolnych = props.sloty - (props.itemy ? props.itemy.length : 0);
        let tmp = [];
        for(let i = 0; i < wolnych; i++){ tmp.push(i); }
        return tmp.map((v) => {
            return <div className="itemek" key={props.tytul + v.toString()}/>
        });

    };

    return(
		<div className="ekwipunek">
            <div className="ekwipunekTytulowe">
                <h3>{props.tytul || "Ekwipunek"}</h3>
                <div className="wagaText">{aktualnaWaga} / {props.limitWaga} kg</div>
            </div>
            <div className="wagaLinia">
                <div className="wagaLiniaZapelnij" style={{transform: przesuniecie(aktualnaWaga.toFixed(1), props.limitWaga.toFixed(1)), background: bliskiLimitu(aktualnaWaga, props.limitWaga)}} />
            </div>
            <div className="ekwipunekGrid">
                { props.itemy && props.itemy.map((item) => {
                    return(
                        <div className="itemek aktywny" />
                    )
                }) }
                { resztaGridu() }
                
            </div>
		</div>
    )
};