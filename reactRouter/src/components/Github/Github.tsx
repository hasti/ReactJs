import { useLoaderData } from "react-router-dom"
const Github = () => {
  const data =  useLoaderData()
 /* const [data, setData ] = useState();
  useEffect(() => {
    fetch('https://api.github.com/users/hiteshchoudhary')
    .then(response => response.json())
    .then (data => {
      console.log(data)
      setData(data)
    })
  }, [])*/
  return (
    <div className="mx-auto w-full max-w-7xl text-center m-4 bg-gray-600 text-white p4 text-3xl">
      Github Followers : {data.followers}
      <img src={data.avatar_url} alt="Git Picture" width={300} />
    </div>    
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/hasti')
  return response.json()
}