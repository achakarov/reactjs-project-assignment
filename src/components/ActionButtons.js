import React from 'react';
import { Link } from 'react-router-dom';

function ActionButtons({
  owner,
  onRecipeDeleteButtonClickHandler,
  onRecipeLikeButtonClickHandler,
  id,
  likesCounter,
}) {
  if (owner) {
    return (
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
    );
  }

  return (
    <Link
      className="btn btn-success"
      to={`/recipe/details/${id}`}
      onClick={onRecipeLikeButtonClickHandler}
    >
      {likesCounter} likes
    </Link>
  );
}

export default ActionButtons;
