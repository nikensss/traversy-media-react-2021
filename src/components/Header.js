import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Button } from './Button';

export const Header = ({ title, onAdd, showAddTask }) => {
  const location = useLocation();
  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' && (
        <Button
          color={showAddTask ? 'dodgerblue' : 'green'}
          onClick={onAdd}
          text={showAddTask ? 'Close' : 'Add'}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: 'Task tracker'
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number
};

// CSS in JS
// const headingStyle = { color: 'red', backgroundColor: 'dodgerblue' };
