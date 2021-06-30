import React from "react";
import { useHistory } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>Информация</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet
        exercitationem magni nobis obcaecati. Ad asperiores aspernatur culpa
        cupiditate delectus deleniti dignissimos dolor dolorum eligendi enim
        explicabo harum illum iste iusto libero minima natus nisi porro possimus
        quam quia recusandae sint suscipit ut voluptas voluptatem, voluptatibus!
        Dolorem illo ipsam officia vel. Est, maiores, quis! Accusamus culpa
        delectus excepturi in laudantium.{" "}
      </p>
      <button className={"btn"} onClick={() => history.push("/")}>
        Обратно к списку дел
      </button>
    </>
  );
};
