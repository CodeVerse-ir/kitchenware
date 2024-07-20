
export default function Products({ params }) {
  const {productsName} = params

  return (
    <div>
      Search : {productsName}
    </div>
  )
}
