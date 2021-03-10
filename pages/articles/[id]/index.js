

const article = () => {
 
  const router = useRouter()
  const {id}  = router.query

 return <div> This is and article</div>   
}
export const getServerSideProps = async (context) => {
    const res = await fetch(`https://`)
}