import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useGlobalContext } from '../context';
import { deleteOne, likeOne, getOneRecipe } from '../services/recipeServices';
import ActionButtons from '../components/ActionButtons';

function SingleRecipeDetails() {
  const { id } = useParams();
  const { user } = useGlobalContext();
  const history = useHistory();
  // const [recipe, setRecipe] = useState(null); TODO - fix the initial state
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    getOneRecipe(id)
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
    likeOne(id, incrementedLikes, user.uid).then(() => {
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

  const hasOwner = owner === user?.uid;

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
            <p className="description">
              <br />
              <i>"{description}"</i>
            </p>
          </div>
          <div className="actions">
            <ActionButtons
              owner={hasOwner}
              onRecipeDeleteButtonClickHandler={
                onRecipeDeleteButtonClickHandler
              }
              onRecipeLikeButtonClickHandler={onRecipeLikeButtonClickHandler}
              id={id}
              likesCounter={likesCounter}
            />
          </div>
        </div>

        <div className="detailsIngredients">
          <h3 className="my-3 ingredient">Ingredients</h3>
          <ul>
            {ingredients?.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SingleRecipeDetails;
