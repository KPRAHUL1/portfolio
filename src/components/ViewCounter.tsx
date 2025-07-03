// 'use client'

// import { useEffect, useState } from 'react'

// export function ViewCounter() {
//   const [views, setViews] = useState<number | null>(null)

//   useEffect(() => {
//     fetch('https://api.countapi.xyz/hit/kprahul.netlify.app')
//       .then((res) => res.json())
//       .then((data) => setViews(data.value))
//       .catch(() => setViews(null))
//   }, [])

//   return (
//     <p className="text-sm text-gray-500">
//       👀 Total Visitors: {views ?? 'Loading...'}
//     </p>
//   )
// }
