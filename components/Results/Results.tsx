import Thumbnail from '../Thumbnail';
import FlipMove from 'react-flip-move';

type ResultsType = {
  results: [];
};

function Result({ results }: ResultsType) {
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {results.map((result: any) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  );
}

export default Result;
