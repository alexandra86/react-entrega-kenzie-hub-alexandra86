import { StyleCardTech } from "./styles.js";

export function CardTech({ elem, index }) {
  return (
    <StyleCardTech key={index}>
      <h3 className="technology">{elem.title}</h3>
      <div className="areaCourse">
        <p className="nivelCourse">{elem.status}</p>
        <button className="btDelete"></button>
      </div>
    </StyleCardTech>
  );
}
