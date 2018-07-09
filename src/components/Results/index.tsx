import * as React from 'react';
import { declareQueries } from '@buildo/bento/data';
import { restaurants } from 'queries';
import Business from 'Business';

const queries = declareQueries({ results: restaurants });

const Results: React.SFC<typeof queries.Props> = ({ results }) => {
  if (results.ready) {
    return results.value.fold(
      () => (
        <span>sorry we couldn't fin any result that matches your queries</span>
      ),
      ({ businesses }) => (
        <div>
          {businesses.map(business => (
            <Business key={business.id} {...business} />
          ))}
        </div>
      ),
    );
  }

  return <div>loading</div>;
};

export default queries(Results);
