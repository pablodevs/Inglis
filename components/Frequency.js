const STEP = 2;

const calcFrequency = (value) => {
  const cond1 = value > STEP && value <= STEP * 2,
    cond2 = value > STEP * 2;
  return [cond1 || cond2, cond2];
};

export const Frequency = ({ value }) => {
  const classes = calcFrequency(value);

  return (
    <div className='frequency'>
      <span className='fill'></span>
      <span className={classes[0] && 'fill'}></span>
      <span className={classes[1] && 'fill'}></span>

      <style jsx>{`
        .frequency {
          position: relative;
          width: 70px;
          display: inline-flex;
          gap: 5px;
          margin-left: auto;
        }
        .frequency::before {
          content: 'Frequency';
          position: absolute;
          bottom: 6px;
          left: 0;
          font-size: 0.75rem;
          font-weight: 400;
        }
        .frequency > span {
          width: 100%;
          height: 5px;
          background-color: var(--secondary);
        }
        .frequency > span.fill {
          background-color: var(--primary);
        }
      `}</style>
    </div>
  );
};