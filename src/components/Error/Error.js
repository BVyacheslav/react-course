import { useJsonFetch } from '../../hooks/useJsonFetch';

export const Error = () => {

  const [{ data: data, isLoading, error }] = useJsonFetch('http://localhost:7070/error');

  return (
    <div>
      <span>
        {error}
      </span>
    </div>
  )
}
