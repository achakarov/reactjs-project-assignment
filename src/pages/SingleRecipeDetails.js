import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useParams } from 'react-router';
import { useGlobalContext } from '../context';
import { db } from '../firebase';

function SingleRecipeDetails() {
  const { id } = useParams();
  const { user } = useGlobalContext();
  const history = useHistory();
  // const [recipe, setRecipe] = useState(null);
  const [recipe, setRecipe] = useState({});

  const getOne = (id) => {
    return db.collection('recipes').doc(id).get();
  };

  const likeOne = (recipeId, likes) => {
    return db
      .collection('recipes')
      .doc(recipeId)
      .update({ likesCounter: likes });
  };

  const deleteOne = (id) => {
    return db.collection('recipes').doc(id).delete();
  };

  useEffect(() => {
    getOne(id)
      .then((res) => setRecipe({ ...res.data() }))
      .catch((err) => console.log(err));
  }, [id]);

  //това може да се рендърваме в App.js и от там да подаваме като пропс

  const {
    meal,
    ingredients,
    prepMethod,
    description,
    foodImageURL,
    owner,
    likesCounter,
  } = recipe;

  const onRecipeLikeButtonClickHandler = () => {
    const incrementedLikes = Number(likesCounter) + 1;
    likeOne(id, incrementedLikes).then(() => {
      setRecipe((oldState) => ({
        ...oldState,
        likesCounter: incrementedLikes,
      }));
    });
  };

  const onRecipeDeleteButtonClickHandler = () => {
    deleteOne(id)
      .then(() => {
        setRecipe(null);
        history.push('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="row form-layout p-5">
      <div className="col-md-12">
        <div className="recepieInfo">
          <div className="detailsFoodImage">
            <img src={foodImageURL} alt={meal} />
          </div>

          <div className="infoPack">
            <h3 className="my-3">{meal}</h3>
            <p className="prep-method">{prepMethod}</p>
            <p className="description">{description}</p>
          </div>
          <div className="actions">
            {owner === user?.uid ? (
              <>
                <Link
                  className="btn btn-danger"
                  to={`/recipe/delete/${id}`}
                  onClick={onRecipeDeleteButtonClickHandler}
                >
                  Archive
                </Link>
                <Link className="btn btn-info" to={`/recipe/edit/${id}`}>
                  Edit
                </Link>
              </>
            ) : (
              // отделен компонент
              <Link
                className="btn btn-success"
                to={`/recipe/details/${id}`}
                onClick={onRecipeLikeButtonClickHandler}
              >
                {likesCounter} likes
              </Link>
            )}
          </div>
        </div>

        <div className="detailsIngredients">
          <h3 className="my-3 ingredient">Ingredients</h3>
          <ul>
            {ingredients?.map((item, index) => {
              return <li key={index}>{item}</li>; //TODO FIX KEYS
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SingleRecipeDetails;
