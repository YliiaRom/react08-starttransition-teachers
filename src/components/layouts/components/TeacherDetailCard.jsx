import { useState } from "react";
import { useLocation } from "react-router";

function TeacherDetailCard({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="cardTeacher">
        <img src={item.photo} alt="item.name" />
        <div className="cardWrap">
          <div>
            <h2>Name:{item.name}</h2>
            <p>предмет: {item.subject}</p>
          </div>
        </div>
      </div>

      <div className="more" onClick={() => setIsOpen((v) => !v)}>
        more info:
      </div>
      {isOpen && (
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit...</div>
      )}
    </div>
  );
}
export default TeacherDetailCard;
// "id": "1",
// "name": "Олена Коваль1",
// "subject": "Математика",
// "photo":
