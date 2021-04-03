import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

function ActionButtons(owner) {
  const { user } = useGlobalContext();

  return (
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
        <Link
          className="btn btn-success"
          to={`/recipe/details/${id}`}
          onClick={onRecipeLikeButtonClickHandler}
        >
          {likesCounter} likes
        </Link>
      )}
    </div>
  );
}

export default ActionButtons;
