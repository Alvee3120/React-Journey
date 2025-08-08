import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(()=>{

    //     fetch('https://api.github.com/users/Alvee3120')
    //     .then((res)=>res.json())
    //     .then((data)=> {console.log(data)
    //         setData(data)
    //     } )
    // })
  return (
    <>
    <div className="min-h-screen flex justify-center items-center bg-slate-900 ">
      <div className="max-w-sm w-full block transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-2xl rounded-2xl overflow-hidden bg-gradient-to-br from-white/80 to-slate-50   p-5">
        <div className="flex gap-4 items-center">
          <img
            src={data.avatar_url}
            alt="avatar"
            className="h-20 w-20 rounded-full object-cover ring-4 ring-white -800 shadow-md"
          />
          <div>
            <h3 className="text-lg font-semibold text-slate-900">{data.name}</h3>
            <p className="text-sm text-slate-500 ">{data.login}</p>
          </div>
        </div>
        <p className="mt-3 text-sm text-slate-600 ">
          {data.bio}
        </p>
        <div className="mt-4 flex items-center justify-between text-sm text-slate-500 ">
          <span>{data.location}</span>
          <span>{data.public_repos}</span>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
          <div>
            <div className="text-sm text-slate-900 ">Followers</div>
            <div className="text-base font-semibold text-slate-900">{data.followers}</div>
          </div>
          <div>
            <div className="text-sm text-slate-900">Following</div>
            <div className="text-base text-slate-900 font-semibold">{data.following}</div>
          </div>
          <div>
            <div className="text-sm text-slate-900">Repos</div>
            <div className="text-base text-slate-900 font-semibold">12</div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/Alvee3120')
    return res.json()
}