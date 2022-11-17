import { useState, useEffect } from 'react';
import axios from 'axios';
import Form from 'src/components/Form';
import SearchResult from 'src/components/SearchResult';
import Spinner from 'src/components/Sprinner';
import MoreButton from 'src/components/MoreButton';
import NotFound from 'src/components/NotFound';
import './styles.scss';

function SearchPage() {
  const [fieldValue, setFieldValue] = useState('');
  const [resultsValue, setResultsValue] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalValues, setTotalValues] = useState(0);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [refreshSearch, setRefreshSerarch] = useState(false);
  const [status, setStatus] = useState('');

  const [queryString, setQueryString] = useState('');

  const loadData = () => {
    setIsLoading(true);
    axios.get(`https://api.github.com/search/repositories?q=${queryString}&sort=stars&order=desc&page=${page}&per_page=9`)
      .then((results) => {
        setTotalValues(results.data.total_count);

        setStatus(results.status);
        setResultsValue([
          ...resultsValue,
          ...results.data.items,
        ]);
      })
      .catch((error) => {
        setIsError(true);
        setStatus(error.response.status);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const loadMore = () => {
    setPage(page + 1);
  };

  const loadNewSearch = () => {
    setResultsValue([]);
    setTotalValues(0);
    setStatus('');
    setIsError(false);
    setPage(1);

    setQueryString(fieldValue);
    setRefreshSerarch(true);
  };

  useEffect(

    () => {
      if (fieldValue !== '') {
        loadData();
        setRefreshSerarch(false);
      }
    },

    [queryString, page, refreshSearch],
  );
  return (
    <>
      <Form
        identifier="serchBar"
        placeholder="Search..."
        label=""
        type="text"
        value={fieldValue}
        loadData={loadNewSearch}
        changeField={(identifier, newValue) => {
          setFieldValue(newValue);
        }}
      />

      {
        isError && status !== 200
          ? <p className="error">Une erreur est survenue !</p>
          : <p className="count">{`${totalValues} repositories correspond to the search`}</p>
      }
      {
        status === 200 && totalValues === 0
          ? !isLoading && <NotFound />
          : !isError && <SearchResult results={resultsValue} />
      }
      {isLoading && <Spinner />}
      {totalValues > resultsValue.length && <MoreButton loadMore={loadMore} />}
    </>
  );
}

export default SearchPage;
