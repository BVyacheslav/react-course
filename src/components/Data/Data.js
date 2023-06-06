import { useJsonFetch } from '../../hooks/useJsonFetch';

export const Data = () => {

  const [{ data: data, isLoading, error }] = useJsonFetch('http://localhost:7070/data');

  return (
    <div>
      <span>
        {data?.status}
      </span>
    </div>
  )
}
