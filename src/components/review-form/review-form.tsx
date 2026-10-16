import {ChangeEvent, FormEvent, Fragment, useState} from 'react';
import {CommentLength, RATING_OPTIONS} from '../../const';

type Rating = typeof RATING_OPTIONS[number]['value'];

type ReviewFormData = {
  rating: Rating | null;
  comment: string;
};

function ReviewForm(): JSX.Element {
  const [formData, setFormData] = useState<ReviewFormData>({rating: null, comment: ''});

  const commentLength = formData.comment.trim().length;
  const isValid = formData.rating !== null
    && commentLength >= CommentLength.Min
    && commentLength <= CommentLength.Max;

  const handleFieldChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: name === 'rating' ? Number(value) : value});
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RATING_OPTIONS.map(({value, title}) => (
          <Fragment key={value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={value}
              id={`${value}-stars`}
              type="radio"
              checked={formData.rating === value}
              onChange={handleFieldChange}
            />
            <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        maxLength={CommentLength.Max}
        value={formData.comment}
        onChange={handleFieldChange}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{CommentLength.Min} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isValid}>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
