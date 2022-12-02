import { useNavigate } from "react-router-dom";

function Categories({ str, thumb, description, type }) {
  console.log(str);
  let navigate = useNavigate();

  return (
    <div className={type}>
      <div
        className="Categories-container"
        key={str}
        onClick={() => {
          navigate(`/${type}/${str}`);
        }}
      >
        {(() => {
          if (thumb !== true) {
            return <img src={thumb} alt="" className="Category-img" />;
          } else if (thumb !== false) {
            return <p>{description}</p>;
          }
        })()}
        <h4 className="category-title">{str}</h4>
      </div>
    </div>
  );
}

export default Categories;
