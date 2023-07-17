import Ekwipunek from "./Ekwipunek";

export default function Ekwipunki(props){
    return(
        <div className="oknoEkwipunek">
            <h3>Ekwipunek</h3>
            <div className="ekwipunki">
                <Ekwipunek tytul="Kieszenie" limitWaga={25} sloty={6}/>
                <Ekwipunek tytul="Plecaczek" limitWaga={50} sloty={12}/>
            </div>
        </div>
    );
};