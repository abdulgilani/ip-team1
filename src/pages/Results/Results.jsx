import React from 'react';

function Results({ answers }) {
  return (
    <body className="results">
      <h2 className='results__title'>Recommendations</h2>
      <p className='results__p'>Based on your answers, we recommend the following:</p>
      <pre className='results__pre'> {JSON.stringify(answers, null, 2)} </pre>
    </body>
  );
}

export default Results;
