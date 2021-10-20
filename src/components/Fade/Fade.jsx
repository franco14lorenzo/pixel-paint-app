import React, { useEffect, useState } from 'react';

const Fade = ({ show, children }) => {

  const [shouldRender, setShouldRender] = useState(show);

  useEffect(() => {
    show && setShouldRender(true);
  }, [show]);

  const onAnimationEnd = () => {

    !show && setShouldRender(false);
  }

  return (
    shouldRender && (
      <div
        style={{ animation: `${show ? 'fadeIn' : "fadeOut"} 1s` }}
        onAnimationEnd={onAnimationEnd}
      >

        {children}

      </div>
    )
  );
};

export default Fade;