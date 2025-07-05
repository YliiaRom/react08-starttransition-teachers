function Item({ item, onSelect, isSelect }) {
  return (
    <div>
      <div className="cardTeacher">
        <img src={item.photo} alt="item.name" />
        <div className="cardWrap">
          <div>
            <h3> {item.name}</h3>
            <p>предмет: {item.subject}</p>
          </div>
        </div>
      </div>
      {onSelect && isSelect && (
        <div>
          <button onClick={() => onSelect(item.id)}>
            {isSelect.includes(item.id) ? "Вибрано" : " Вибрати на збори"}
          </button>
        </div>
      )}
    </div>
  );
}
export default Item;
// "id": "1",
// "name": "Олена Коваль1",
// "subject": "Математика",
// "photo": "https://cdn-icons-png.flaticon.com/512/168/168723.png"
// },
