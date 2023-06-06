import { useJsonFetch } from '../../hooks/useJsonFetch';

export const Loading = () => {

  const [{ data: data, isLoading, error }] = useJsonFetch('http://localhost:7070/loading');

  console.log('data=', isLoading)

  return (
    <div>
      <span>
        {isLoading && 'Loading...'}
      </span>
    </div>
  )
}
