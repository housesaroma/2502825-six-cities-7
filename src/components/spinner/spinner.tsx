import './spinner.css';

const INFINITY_PATH = 'M12 12 C14 8.5 19 8.5 19 12 C19 15.5 14 15.5 12 12 C10 8.5 5 8.5 5 12 C5 15.5 10 15.5 12 12 Z';
const CIRCLE_TOP_PATH = 'M12 8 C14.21 8 16 9.79 16 12 C16 14.21 14.21 16 12 16 C9.79 16 8 14.21 8 12 C8 9.79 9.79 8 12 8 Z';
const CIRCLE_BOTTOM_PATH = 'M12 16 C14.21 16 16 14.21 16 12 C16 9.79 14.21 8 12 8 C9.79 8 8 9.79 8 12 C8 14.21 9.79 16 12 16 Z';

const ANIMATION_VALUES = [
  INFINITY_PATH,
  CIRCLE_TOP_PATH,
  INFINITY_PATH,
  CIRCLE_BOTTOM_PATH,
  INFINITY_PATH,
].join(';');

const EASE_IN_OUT = '0.42 0 0.58 1';

function Spinner(): JSX.Element {
  return (
    <div className="spinner">
      <svg className="spinner__icon" viewBox="0 0 24 24" width="64" height="64" aria-hidden="true">
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d={INFINITY_PATH}
        >
          <animate
            attributeName="d"
            dur="5s"
            repeatCount="indefinite"
            values={ANIMATION_VALUES}
            keyTimes="0;0.25;0.5;0.75;1"
            calcMode="spline"
            keySplines={Array(4).fill(EASE_IN_OUT).join(';')}
          />
        </path>
      </svg>
      <p className="spinner__text">Loading...</p>
    </div>
  );
}

export default Spinner;
