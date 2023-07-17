export default function Postac(props) {
    return(
        <div className="oknoPostac">
			<div className="postacRow">
				<div className="postacCol">
					<div className="postacMiejsce" title="Czapka"></div>
					<div className="postacMiejsce" title="Okulary"></div>
					<div className="postacMiejsce" title="Husta"></div>
					<div className="postacMiejsce" title="Rękawiczki"></div>
		    		<div className="postacMiejsce" title="Buty"></div>
				</div>
				<div className="postacCol">
					<div className="postacImg" />
				</div>
				<div className="postacCol">
					<div className="postacMiejsce" title="Koszula"></div>
					<div className="postacMiejsce" title="Płaszcz"></div>
					<div className="postacMiejsce" title="Spodnie"></div>
					<div className="postacMiejsce" title="Plecy"></div>
				</div>
			</div>
			<div className="postacRow">
				<div className="postacMiejsce" title="Strzelba"></div>
				<div className="postacMiejsce" title="Pistolet"></div>
				<div className="postacMiejsce" title="Broń biała"></div>
			</div>
		</div>
    );
};